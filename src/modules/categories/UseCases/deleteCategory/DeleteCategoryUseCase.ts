import { CategoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

const categoryRepository = new CategoriesRepository();

class DeleteCategoryUseCase {
  async execute( categoryId: string ) {
    await categoryRepository.delete(categoryId);

    return true;
  }
}

export { DeleteCategoryUseCase };
