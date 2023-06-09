import { Request, Response } from 'express';

import { usersRepository } from '../../infra/mongoose/repositories/UsersRepository';

class PrivateRouteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await usersRepository.getUserById(id);

    if (!user) {
      return response.status(404).json({ message: 'Usuário não encontrado!' });
    }

    response.status(200).json({ user, id: request.userId });
  }
}

const privateRouteController = new PrivateRouteController();

export { privateRouteController };
