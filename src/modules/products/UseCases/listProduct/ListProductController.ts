import { Request, Response } from 'express';

import { listProductUseCase } from './ListProductUseCase';

class ListProductController {
  async handle(request: Request, response: Response) {
    const products = await listProductUseCase.execute();

    return response.json(products);
  }
}

const listProductController = new ListProductController();

export { listProductController };
