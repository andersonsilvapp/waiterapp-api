import { Product } from '../infra/mongoose/models/Product';

import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

class ProductsRepository {
  async create({ name,
    description,
    imagePath,
    price,
    category,
    ingredients }: ICreateProductDTO) {

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    return product;
  }

  async delete( productId: string) {
    await Product.findByIdAndDelete(productId);

    return;
  }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
