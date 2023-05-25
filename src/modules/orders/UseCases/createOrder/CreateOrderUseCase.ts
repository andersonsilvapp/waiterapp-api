import { ordersRepository } from '../../infra/mongoose/repositories/OrdersRepository';

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

    return order;
  }
}

const createOrderUseCase = new CreateOrderUseCase();

export { createOrderUseCase };
