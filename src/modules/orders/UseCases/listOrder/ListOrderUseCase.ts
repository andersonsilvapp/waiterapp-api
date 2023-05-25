import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';

class ListOrderUseCase {
  async execute() {

    const orders = await ordersRepository.list();

    return orders;
  }
}

const listOrderUseCase = new ListOrderUseCase();

export { listOrderUseCase };
