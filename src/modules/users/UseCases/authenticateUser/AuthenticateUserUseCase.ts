import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../shared/errors/AppError';
import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IRequest) {
    if (!email) {
      throw new AppError('O email é obrigatório!');
    }

    if (!password) {
      throw new AppError('A senha é obrigatória!');
    }

    const user = await usersRepository.getUserByEmail(email);

    if (!user) {
      throw new AppError('Email ou senha inválida!', 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email ou senha inválida!', 404);
    }

    const secret = process.env.SECRET;

    const token = sign(
      {
        id: user._id,
      },
      secret!,
      { expiresIn: 2000 }
    );

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

const authenticateUserUseCase = new AuthenticateUserUseCase();

export { authenticateUserUseCase };
