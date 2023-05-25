import { Request, Response } from 'express';

import { editCategoryStatusUseCase } from './EditCategoryStatusUseCase';

class EditCategoryStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.params;
    const { isActive } = request.body;

    const category = await editCategoryStatusUseCase.execute(
      categoryId,
      isActive
    );

    return response.status(201).json(category);
  }
}

const editCategoryStatusController = new EditCategoryStatusController();

export { editCategoryStatusController };
