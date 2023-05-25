import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

class CategoriesRepository {
  async create({ name, icon }: ICreateCategoryDTO) {
    const category = Category.create({ name, icon });

    return category;
  }

  async delete( categoryId: string ) {
    await Category.findByIdAndDelete(categoryId);

    return true;
  }

  async update( categoryId: string, name: string, icon: string ) {
    const category = await Category.findByIdAndUpdate(categoryId, { name, icon }, { new: true });

    return category;
  }

  async updateStatus( categoryId: string, status: boolean ) {
    const category = await Category.findByIdAndUpdate(categoryId, { isActive: status }, { new: true });

    return category;
  }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
