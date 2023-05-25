import { Request, Response } from 'express';

import { listOrderUseCase } from './ListOrderUseCase';

class ListOrderController {
  async handle(request: Request, response: Response) {
    const orders = await listOrderUseCase.execute();

    return response.json(orders);
  }
}

const listOrderController = new ListOrderController();

export { listOrderController };
