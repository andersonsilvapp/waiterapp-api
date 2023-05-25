import bcrypt from 'bcrypt';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ name, email, password }: IRequest) {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

const createUserUseCase = new CreateUserUseCase();

export { createUserUseCase };
