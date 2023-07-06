import { Request, Response } from 'express';

import { viewProductUseCase } from './ViewProductUseCase';

class ViewProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const products = await viewProductUseCase.execute(id);

    return response.json(products);
  }
}

const viewProductController = new ViewProductController();

export { viewProductController };
