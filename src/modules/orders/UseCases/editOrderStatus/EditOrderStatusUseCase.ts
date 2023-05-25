import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';

class EditOrderStatusUseCase {
  async execute(orderId: string, status: boolean) {
    const order = ordersRepository.updateStatus(orderId, status);

    return order;
  }
}

const editOrderStatusUseCase = new EditOrderStatusUseCase();

export { editOrderStatusUseCase };
