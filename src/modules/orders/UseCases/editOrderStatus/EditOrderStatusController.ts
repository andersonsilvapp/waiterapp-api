import { Request, Response } from 'express';

import { editOrderStatusUseCase } from './EditOrderStatusUseCase';

class EditOrderStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { orderId } = request.params;
    const { status } = request.body;

    const order = await editOrderStatusUseCase.execute(orderId, status);

    return response.status(201).json(order);
  }
}

const editOrderStatusController = new EditOrderStatusController();

export { editOrderStatusController };
