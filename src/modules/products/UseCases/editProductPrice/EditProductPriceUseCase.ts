import { productsRepository } from '../../repositories/ProductsRepository';

class EditProductPriceUseCase {
  async execute(productId: string, price: number) {
    const castPrice = Number(price);

    const product = await productsRepository.updatePrice(productId, castPrice);

    return product;
  }
}

const editProductPriceUseCase = new EditProductPriceUseCase();

export { editProductPriceUseCase };
