import { productsRepository } from '../../repositories/ProductsRepository';

class DeleteProductUseCase {
  async execute(productId: string) {
    await productsRepository.delete(productId);
  }
}

const deleteProductUseCase = new DeleteProductUseCase();

export { deleteProductUseCase };
