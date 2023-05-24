import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getUserByEmail } from './getUserByEmail';

export async function authenticateUser(req: Request, res: Response) {

  const {email, password} = req.body;

  if(!email) {
    return res.status(422).json({ msg: 'O email é obrigatório!'});
  }

  if(!password) {
    return res.status(422).json({ msg: 'A senha é obrigatória!'});
  }

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado'});
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: 'Senha inválida!'});
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign({
      id: user._id,
    }, secret!
    );

    res.status(200).json({ msg: 'Autenticação realizada com sucesso', token});
  } catch(error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor.'});
  }

  // const salt = await bcrypt.genSalt(12);
  // const passwordHash = await bcrypt.hash(password, salt);



}
