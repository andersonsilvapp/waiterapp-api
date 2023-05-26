import { Request, Response } from 'express';

import { authenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const token = await authenticateUserUseCase.execute({ email, password });

    response.json(token);
  }
}

const authenticateUserController = new AuthenticateUserController();

export { authenticateUserController };
