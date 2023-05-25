import { productsRepository } from '../../repositories/ProductsRepository';

class EditProductStatusUseCase {
  async execute(productId: string, isActive: boolean) {

    const product = await productsRepository.updateStatus(productId, isActive);

    return product;
  }
}

const editProductStatusUseCase = new EditProductStatusUseCase();

export { editProductStatusUseCase };
