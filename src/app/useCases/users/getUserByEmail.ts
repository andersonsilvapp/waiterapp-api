import { User } from '../../models/User';

export async function getUserByEmail(email: string) {
  const user = await User.findOne().where('email').equals(email);

  return user;
}
