import { Request, Response } from 'express';

import { getUserById } from './getUserById';

export async function privateRoute(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if(!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado!'});
  }

  res.status(200).json({ user });
}
