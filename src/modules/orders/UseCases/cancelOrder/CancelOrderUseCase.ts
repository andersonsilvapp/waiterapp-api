import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';

class CancelOrderUseCase {
  async execute(orderId: string) {
    await ordersRepository.delete(orderId);

    return;
  }
}

const cancelOrderUseCase = new CancelOrderUseCase();

export { cancelOrderUseCase };
