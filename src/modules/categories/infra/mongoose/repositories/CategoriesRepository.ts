import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';
import { Product } from '../../../../products/infra/mongoose/models/Product';

class CategoriesRepository {
  async list() {
    const categories = Category.find();

    return categories;
  }

  async listByCategory(categoryId: string) {
    const products = await Product.find().where('category').equals(categoryId);

    return products;
  }

  async create({ name, icon }: ICreateCategoryDTO) {
    const category = Category.create({ name, icon });

    return category;
  }

  async delete(categoryId: string): Promise<void> {
    await Category.findByIdAndDelete(categoryId);
  }

  async update(categoryId: string, name: string, icon: string) {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { name, icon },
      { new: true }
    );

    return category;
  }

  async updateStatus(categoryId: string, status: boolean) {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { isActive: status },
      { new: true }
    );

    return category;
  }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
