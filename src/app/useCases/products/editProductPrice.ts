import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function editProductPrice(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const {price} = req.body;

    await Product.findByIdAndUpdate(productId, {
      price: Number(price),
    });

    res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

