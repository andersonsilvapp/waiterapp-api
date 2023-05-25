import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { productsRoutes } from './products.routes';
import { ordersRoutes } from './orders.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);
router.use('/auth', usersRoutes);

export { router };
