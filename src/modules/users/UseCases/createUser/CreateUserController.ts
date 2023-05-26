import { Request, Response } from 'express';

import { createUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, confirmPassword } = request.body;

    await createUserUseCase.execute({ name, email, password, confirmPassword });

    response.status(201).json({ message: 'Usuario criado com sucesso' });
  }
}

const createUserController = new CreateUserController();

export { createUserController };
