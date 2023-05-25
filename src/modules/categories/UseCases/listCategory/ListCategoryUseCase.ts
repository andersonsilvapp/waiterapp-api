import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class ListCategoryUseCase {
  async execute() {
    const categories = await categoriesRepository.list();

    return categories;
  }

}

const listCategoryUseCase = new ListCategoryUseCase();

export { listCategoryUseCase };
