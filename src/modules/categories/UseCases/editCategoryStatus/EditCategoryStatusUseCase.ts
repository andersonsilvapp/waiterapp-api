import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class EditCategoryStatusUseCase {
  async execute(categoryId: string, status: boolean) {
    const category = categoriesRepository.updateStatus(categoryId, status);

    return category;
  }
}

const editCategoryStatusUseCase = new EditCategoryStatusUseCase();

export { editCategoryStatusUseCase };

