import { categoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

interface IRequest {
  name: string;
  icon: string;
}
class CreateCategoriesUseCase {
  async execute({ name, icon }: IRequest) {

    const category = await categoriesRepository.create({ name, icon});

    return category;
  }
}

export { CreateCategoriesUseCase };
