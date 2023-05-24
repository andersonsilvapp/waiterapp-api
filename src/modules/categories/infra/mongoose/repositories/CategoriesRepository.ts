import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

class CategoriesRepository {
  async create({ name, icon }: ICreateCategoryDTO) {
    const category = Category.create({ name, icon });

    return category;
  }
}

export { CategoriesRepository};
