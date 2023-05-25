import { Request, Response } from 'express';
import { editProductPriceUseCase } from './EditProductPriceUseCase';

class EditProductPriceController {
  async handle(request: Request, response: Response) {
    const { productId } = request.params;
    const { price } = request.body;

    const product = await editProductPriceUseCase.execute(productId, price);

    return response.json(product);
  }
}

const editProductPriceController = new EditProductPriceController();

export { editProductPriceController };
