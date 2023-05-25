import { Router } from 'express';

import { createCategoriesController } from '../../../../modules/categories/UseCases/createCategory/CreateCategoriesController';
import { deleteCategoryController } from '../../../../modules/categories/UseCases/deleteCategory/DeleteCategoryController';
import { editCategoryController } from '../../../../modules/categories/UseCases/editCategory/EditCategoryController';
import { editCategoryStatusController } from '../../../../modules/categories/UseCases/editCategoryStatus/EditCategoryStatusController';
import { listCategoryController } from '../../../../modules/categories/UseCases/listCategory/ListCategoryController';
import { listProductByCategoryController } from '../../../../modules/categories/UseCases/listProductByCategory/ListProductByCategoryController';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoriesController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.put('/:categoryId', editCategoryController.handle);

categoriesRoutes.patch(
  '/:categoryId/status',
  editCategoryStatusController.handle
);

categoriesRoutes.delete('/:categoryId', deleteCategoryController.handle);

categoriesRoutes.get(
  '/:categoryId/products',
  listProductByCategoryController.handle
);

export { categoriesRoutes };
