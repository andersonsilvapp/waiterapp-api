import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategories';
import { listProducts } from './app/useCases/products/listProducts';
import { createProducts } from './app/useCases/products/createProducts';
import { listProductsByCategories } from './app/useCases/categories/listProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { editProduct } from './app/useCases/products/editProduct';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { editProductPrice } from './app/useCases/products/editProductPrice';
import { editProductStatus } from './app/useCases/products/editProductStatus copy';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

// List Catgories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('image'), createProducts);

// Edit Product
router.put('/products/:productId', upload.single('image'), editProduct);

// Edit Product Price
router.patch('/products/:productId/price',  editProductPrice);

// Edit Product status
router.patch('/products/:productId/status',  editProductStatus);

// Remove Product
router.delete('/products/:productId', deleteProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change order Status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:orderId', cancelOrder);
