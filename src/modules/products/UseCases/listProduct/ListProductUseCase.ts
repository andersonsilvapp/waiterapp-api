import { productsRepository } from '../../repositories/ProductsRepository';

class ListProductUseCase {
  async execute() {

    const products = await productsRepository.list();

    return products;
  }
}

const listProductUseCase = new ListProductUseCase();

export { listProductUseCase };
