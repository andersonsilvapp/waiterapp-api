import { AppError } from '../../../../shared/errors/AppError';
import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';

class EditOrderStatusUseCase {
  async execute(orderId: string, status: string) {
    const order = ordersRepository.updateStatus(orderId, status);

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      throw new AppError(
        'Status deve ser algum desses: WAITING, IN_PRODUCTION, DONE'
      );
    }

    return order;
  }
}

const editOrderStatusUseCase = new EditOrderStatusUseCase();

export { editOrderStatusUseCase };
