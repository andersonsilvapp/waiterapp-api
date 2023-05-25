import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

class EditCategoryUseCase {
  async execute( categoryId: string, name: string, icon: string ) {

    const category = await categoriesRepository.update(categoryId, name, icon);

    return category;
  }
}

export { EditCategoryUseCase };
