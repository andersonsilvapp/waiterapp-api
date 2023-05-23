import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function editProductStatus (req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { isActive } = req.body;

    await Product.findByIdAndUpdate(productId, {
      isActive: isActive,
    });

    res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

