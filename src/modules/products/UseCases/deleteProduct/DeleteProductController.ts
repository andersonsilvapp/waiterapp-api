import { Request, Response } from 'express';
import { deleteProductUseCase } from './DeleteProductUseCase';

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { productId } = request.params;

    await deleteProductUseCase.execute(productId);

    return response.sendStatus(204);
  }
}

const deleteProductController = new DeleteProductController();

export { deleteProductController };
