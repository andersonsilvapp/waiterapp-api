import { Router } from 'express';
import { listOrderController } from '../../../../modules/orders/UseCases/listOrder/ListOrderController';
import { createOrderController } from '../../../../modules/orders/UseCases/createOrder/CreateOrderController';
import { cancelOrderController } from '../../../../modules/orders/UseCases/cancelOrder/CancelOrderController';
import { editOrderStatusController } from '../../../../modules/orders/UseCases/editOrderStatus/EditOrderStatusController';

const ordersRoutes = Router();

ordersRoutes.get('/', listOrderController.handle);

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.delete('/:orderId', cancelOrderController.handle);

ordersRoutes.patch('/:orderId/status', editOrderStatusController.handle);

export { ordersRoutes };
