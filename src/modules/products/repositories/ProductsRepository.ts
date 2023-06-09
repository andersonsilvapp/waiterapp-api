import { Product } from '../infra/mongoose/models/Product';

import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

class ProductsRepository {
  async list() {
    const products = await Product.find();

    return products;
  }

  async view(id: string) {
    const product = await Product.findById(id);

    return product;
  }

  async create({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: ICreateProductDTO) {
    console.log(ingredients);
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

  async delete(productId: string): Promise<void> {
    await Product.findByIdAndDelete(productId);
  }

  async update(
    productId: string,
    {
      name,
      description,
      imagePath,
      price,
      category,
      ingredients,
    }: ICreateProductDTO
  ) {
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, imagePath, price, category, ingredients },
      { new: true }
    );

    return product;
  }

  async updatePrice(productId: string, price: number) {
    const product = await Product.findByIdAndUpdate(
      productId,
      { price },
      { new: true }
    );

    return product;
  }

  async updateStatus(productId: string, isActive: boolean) {
    const product = await Product.findByIdAndUpdate(
      productId,
      { isActive },
      { new: true }
    );

    return product;
  }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
