import { Request, Response } from 'express';

import { editOrderStatusUseCase } from './EditOrderStatusUseCase';

class EditOrderStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { orderId } = request.params;
    const { status } = request.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
      });
    }

    const order = await editOrderStatusUseCase.execute(orderId, status);

    return response.status(201).json(order);
  }
}

const editOrderStatusController = new EditOrderStatusController();

export { editOrderStatusController };
