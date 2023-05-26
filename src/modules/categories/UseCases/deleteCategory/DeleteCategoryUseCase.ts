import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class DeleteCategoryUseCase {
  async execute(categoryId: string): Promise<void> {
    await categoriesRepository.delete(categoryId);
  }
}

export { DeleteCategoryUseCase };
