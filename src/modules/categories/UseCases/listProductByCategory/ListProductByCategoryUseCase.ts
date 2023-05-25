import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class ListProductByCategoryUseCase {
  async execute(categoryId: string) {
    const products = await categoriesRepository.listByCategory(categoryId);

    return products;
  }
}

const listProductByCategoryUseCase = new ListProductByCategoryUseCase();

export { listProductByCategoryUseCase };
