import { Request, Response } from 'express';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';

class PrivateRouteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await usersRepository.getUserById(id);

    if (!user) {
      return response.status(404).json({ msg: 'Usuário não encontrado!' });
    }

    response.status(200).json({ user });
  }
}

const privateRouteController = new PrivateRouteController();

export { privateRouteController };
