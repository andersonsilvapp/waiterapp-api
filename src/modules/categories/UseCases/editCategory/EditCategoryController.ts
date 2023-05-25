import { Request, Response } from 'express';

import { EditCategoryUseCase } from '../editCategory/EditCategoryUseCase';

const editCategoryUseCase =  new EditCategoryUseCase();

class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { categoryId } = request.params;
    const { name, icon } = request.body;

    const category = await editCategoryUseCase.execute(categoryId, name, icon);

    return response.status(201).json(category);
  }
}

export { EditCategoryController };

