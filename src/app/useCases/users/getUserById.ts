import { User } from '../../models/User';

export async function getUserById(id: string) {
  const user = await User.findById(id, '-password');

  return user;
}
