import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../models/User';
import { getUserByEmail } from './getUserByEmail';

export async function createUser(req: Request, res: Response) {

  const {name, email, password, confirmPassword} = req.body;

  if(!name) {
    return res.status(422).json({ msg: 'O nome é obrigatório!'});
  }

  if(!email) {
    return res.status(422).json({ msg: 'O email é obrigatório!'});
  }

  if(!password) {
    return res.status(422).json({ msg: 'A senha é obrigatória!'});
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ msg: 'As senhas não conferem!'});
  }

  const userExists = await getUserByEmail(email);

  if (userExists) {
    return res.status(422).json({ msg: 'Este email já está em uso!'});
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);


  try {

    const user = await User.create({
      name,
      email,
      password: passwordHash
    });

    res.status(201).json({ msg: 'Usuario criado com sucesso'});
  } catch(error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor.'});
  }
}
