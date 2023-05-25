import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email) {
      return response.status(422).json({ msg: 'O email é obrigatório!' });
    }

    if (!password) {
      return response.status(422).json({ msg: 'A senha é obrigatória!' });
    }

    const user = await usersRepository.getUserByEmail(email);

    if (!user) {
      return response.status(404).json({ msg: 'Usuário não encontrado' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return response.status(422).json({ msg: 'Senha inválida!' });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret!
      );

      response
        .status(200)
        .json({ msg: 'Autenticação realizada com sucesso', token });
    } catch (error) {
      console.log(error);
      response.status(500).json({ msg: 'Aconteceu um erro no servidor.' });
    }
  }
}

const authenticateUserController = new AuthenticateUserController();

export { authenticateUserController };
