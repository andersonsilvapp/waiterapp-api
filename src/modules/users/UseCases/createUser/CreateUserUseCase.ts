import { genSalt, hash } from 'bcrypt';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    confirmPassword,
  }: IRequest): Promise<void> {
    if (!name) {
      throw new AppError('O nome é obrigatório!');
    }

    if (!email) {
      throw new AppError('O email é obrigatório!');
    }

    if (!password) {
      throw new AppError('A senha é obrigatória!');
    }
    if (password !== confirmPassword) {
      throw new AppError('As senhas não conferem!');
    }

    const userAlreadyExists = await usersRepository.getUserByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('Este email já está em uso!');
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    await usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

const createUserUseCase = new CreateUserUseCase();

export { createUserUseCase };
