import path from 'node:path';
import { Router } from 'express';
import { createProductController } from '../../../../modules/products/UseCases/createProduct/CreateProductController';
import multer from 'multer';
import { deleteProductController } from '../../../../modules/products/UseCases/deleteProduct/DeleteProductController';
import { editProductController } from '../../../../modules/products/UseCases/editProduct/EditProductController';
import { editProductPriceController } from '../../../../modules/products/UseCases/editProductPrice/EditProductPriceController';
import { editProductStatusController } from '../../../../modules/products/UseCases/editProductStatus/EditProductStatusController';
import { listProductController } from '../../../../modules/products/UseCases/listProduct/ListProductController';
import { viewProductController } from '../../../../modules/products/UseCases/viewProduct/ViewProductController';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../../../../../', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const productsRoutes = Router();

productsRoutes.post(
  '/',
  upload.single('image'),
  createProductController.handle
);

productsRoutes.get('/', listProductController.handle);

productsRoutes.get('/:id', viewProductController.handle);

productsRoutes.put(
  '/:productId',
  upload.single('image'),
  editProductController.handle
);

productsRoutes.patch('/:productId/price', editProductPriceController.handle);

productsRoutes.patch('/:productId/status', editProductStatusController.handle);

productsRoutes.delete('/:productId', deleteProductController.handle);

export { productsRoutes };
