import { Request, Response } from 'express';
import { editProductStatusUseCase } from './EditProductStatusUseCase';

class EditProductStatusController {
  async handle(request: Request, response: Response) {
    const { productId } = request.params;
    const { isActive } = request.body;

    const product = await editProductStatusUseCase.execute(productId, isActive);

    return response.json(product);
  }
}

const editProductStatusController = new EditProductStatusController();

export { editProductStatusController};

