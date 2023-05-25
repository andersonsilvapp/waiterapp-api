import { Request, Response } from 'express';

import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

const deleteCategoryUseCase = new DeleteCategoryUseCase();

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.params;

    await deleteCategoryUseCase.execute(categoryId);

    return response.sendStatus(204);
  }
}

export { DeleteCategoryController };
