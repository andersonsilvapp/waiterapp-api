import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';
import { io } from '../../../..';

interface IRequest {
  table: string;
  products: {
    product: string;
    quantity: number;
  }[];
}

class CreateOrderUseCase {
  async execute({ table, products }: IRequest) {
    const order = await ordersRepository.create({ table, products });

    io.emit('orders@new', order);

    return order;
  }
}

const createOrderUseCase = new CreateOrderUseCase();

export { createOrderUseCase };
