import { Request, Response } from 'express';

import { cancelOrderUseCase } from './CancelOrderUseCase';

class CancelOrderController {
  async handle(request: Request, response: Response) {
    const { orderId } = request.params;

    await cancelOrderUseCase.execute(orderId);

    return response.sendStatus(204);
  }
}

const cancelOrderController = new CancelOrderController();

export { cancelOrderController };
