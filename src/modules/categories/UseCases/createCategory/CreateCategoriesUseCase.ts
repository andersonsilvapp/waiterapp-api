import { CategoriesRepository } from '../../infra/mongoose/repositories/CategoriesRepository';

interface IRequest {
  name: string;
  icon: string;
}

const categoriesRepository = new CategoriesRepository();

class CreateCategoriesUseCase {
  async execute({ name, icon }: IRequest) {

    const category = await categoriesRepository.create({ name, icon});

    return category;
  }
}

export { CreateCategoriesUseCase };
