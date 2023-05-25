import { Order } from '../models/Order';

import { ICreateOrderDTO } from '../../../dtos/ICreateOrderDTO';

class OrdersRepository {
  async list() {
    const orders = await Order.find();

    return orders;
  }

  async create({ table, products }: ICreateOrderDTO) {

    const order = await Order.create({ table, products });
    const orderDetails = await order.populate('products.product');

    return orderDetails;
  }

  async delete(orderId: string) {
    await Order.findByIdAndDelete(orderId);

    return;
  }

  async updateStatus(orderId: string, status: boolean) {
    const product = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    return product;
  }
}

const ordersRepository = new OrdersRepository();

export { ordersRepository };
