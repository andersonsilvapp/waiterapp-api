import { Request, Response } from 'express';

import { listProductByCategoryUseCase } from './ListProductByCategoryUseCase';

class ListProductByCategoryController {
  async handle(request: Request, response: Response) {
    const { categoryId } = request.params;

    const products = await listProductByCategoryUseCase.execute(categoryId);

    return response.json(products);
  }
}

const listProductByCategoryController = new ListProductByCategoryController();

export { listProductByCategoryController};
