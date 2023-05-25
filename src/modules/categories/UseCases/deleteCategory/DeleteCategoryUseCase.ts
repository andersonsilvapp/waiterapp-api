import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class DeleteCategoryUseCase {
  async execute(categoryId: string) {
    await categoriesRepository.delete(categoryId);

    return true;
  }
}

export { DeleteCategoryUseCase };
