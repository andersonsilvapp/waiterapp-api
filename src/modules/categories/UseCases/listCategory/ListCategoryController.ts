import { Request, Response } from 'express';

import { listCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const categories = await listCategoryUseCase.execute();

    return response.json(categories);
  }
}

const listCategoryController = new ListCategoryController();

export { listCategoryController };
