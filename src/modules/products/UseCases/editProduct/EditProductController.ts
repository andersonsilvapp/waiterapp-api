import { Request, Response } from 'express';
import { editProductUseCase } from './EditProductUseCase';

class EditProductController {
  async handle(request: Request, response: Response) {
    const { productId } = request.params;
    const imagePath = request.file?.filename || '';
    const {name, description, price, category, ingredients} = request.body;

    const product = await editProductUseCase.execute(productId, { name, description, imagePath, price, category, ingredients });

    return response.json(product);
  }
}

const editProductController = new EditProductController();

export { editProductController};

