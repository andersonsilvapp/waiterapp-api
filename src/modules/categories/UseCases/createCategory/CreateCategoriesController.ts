import { Request, Response } from 'express';

import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

const createCategoryUseCase = new CreateCategoriesUseCase();

class CreateCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, icon } = request.body;

    const category = await createCategoryUseCase.execute({ name, icon});

    return response.status(201).json(category);
  }
}

export { CreateCategoriesController };
