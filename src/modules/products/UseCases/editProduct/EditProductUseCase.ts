import { productsRepository } from '../../repositories/ProductsRepository';

interface IRequest {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  category: string;
  ingredients: string;
}

class EditProductUseCase {
  async execute(
    productId: string,
    { name, description, imagePath, price, category, ingredients }: IRequest
  ) {
    const product = await productsRepository.update(productId, {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    return product;
  }
}

const editProductUseCase = new EditProductUseCase();

export { editProductUseCase };
