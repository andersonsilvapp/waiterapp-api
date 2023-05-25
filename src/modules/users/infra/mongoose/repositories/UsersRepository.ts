import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';

import { User } from '../models/User';

class UsersRepository {
  async create({ name, email, password }: ICreateUserDTO) {
    const user = await User.create({ name, email, password });

    return user;
  }

  async getUserByEmail(email: string) {
    const user = await User.findOne().where('email').equals(email);

    return user;
  }

  async getUserById(id: string) {
    const user = await User.findById(id, '-password');

    return user;
  }
}

const usersRepository = new UsersRepository();

export { usersRepository };
