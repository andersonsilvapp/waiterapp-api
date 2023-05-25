import { productsRepository } from '../../repositories/ProductsRepository';

interface IRequest {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  category: string;
  ingredients: string;
}

class CreateProductUseCase {
  async execute({ name,
    description,
    imagePath,
    price,
    category,
    ingredients }: IRequest) {

    const product = await productsRepository.create({ name,
      description,
      imagePath,
      price,
      category,
      ingredients });

    return product;
  }
}

const createProductUseCase = new CreateProductUseCase();

export { createProductUseCase };
