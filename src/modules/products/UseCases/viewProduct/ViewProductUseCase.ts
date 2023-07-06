import { productsRepository } from '../../repositories/ProductsRepository';

class ViewProductUseCase {
  async execute(id: string) {
    const products = await productsRepository.view(id);

    return products;
  }
}

const viewProductUseCase = new ViewProductUseCase();

export { viewProductUseCase };
