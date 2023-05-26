import { Request, Response } from 'express';
import { createProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response) {
    const imagePath = request.file?.filename || '';
    const { name, description, price, category, ingredients } = request.body;

    const product = await createProductUseCase.execute({
      name,
      description,
      imagePath,
      price,
      category,
      ingredients,
    });

    return response.status(201).json(product);
  }
}

const createProductController = new CreateProductController();

export { createProductController };
