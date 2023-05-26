import { AppError } from '../../../../shared/errors/AppError';
import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

interface IRequest {
  name: string;
  icon: string;
}
class CreateCategoriesUseCase {
  async execute({ name, icon }: IRequest) {
    if (!name) {
      throw new AppError('Insira um nome para a categoria');
    }

    if (!icon) {
      throw new AppError('Insira um icone para a categoria');
    }

    const category = await categoriesRepository.create({ name, icon });

    return category;
  }
}

export { CreateCategoriesUseCase };
