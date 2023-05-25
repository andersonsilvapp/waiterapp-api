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

  async delete(productId: string) {
    await Product.findByIdAndDelete(productId);

    return;
  }

  async update(productId: string, { name,
    description,
    imagePath,
    price,
    category,
    ingredients }: ICreateProductDTO) {

    const product = await Product.findByIdAndUpdate(productId, { name,
      description,
      imagePath,
      price,
      category,
      ingredients }, { new: true });

    return product;
  }

  async updatePrice(productId: string, price: number) {
    const product = await Product.findByIdAndUpdate(productId, { price }, { new: true });

    return product;
  }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
