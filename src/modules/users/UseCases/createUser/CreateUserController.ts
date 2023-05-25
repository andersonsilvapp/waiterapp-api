import { Request, Response } from 'express';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';
import { createUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {

    const { name, email, password, confirmPassword } = request.body;

    if(!name) {
      return response.status(422).json({ msg: 'O nome é obrigatório!'});
    }

    if(!email) {
      return response.status(422).json({ msg: 'O email é obrigatório!'});
    }

    if(!password) {
      return response.status(422).json({ msg: 'A senha é obrigatória!'});
    }

    if (password !== confirmPassword) {
      return response.status(422).json({ msg: 'As senhas não conferem!'});
    }

    const userExists = await usersRepository.getUserByEmail(email);

    if (userExists) {
      return response.status(422).json({ msg: 'Este email já está em uso!'});
    }

    await createUserUseCase.execute({ name, email, password });

    response.status(201).json({ msg: 'Usuario criado com sucesso'});
  }

}

const createUserController = new CreateUserController();

export { createUserController };
