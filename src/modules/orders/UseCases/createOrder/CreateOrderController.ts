import { Request, Response } from 'express';
import { createOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { table, products } = request.body;

    const order = await createOrderUseCase.execute({ table, products });

    return response.json(order);
  }
}

const createOrderController = new CreateOrderController();

export { createOrderController};

