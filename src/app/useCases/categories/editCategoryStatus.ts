import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function editCategoryStatus(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { isActive } = req.body;

    const category = await Category.findByIdAndUpdate(categoryId, { isActive }, { new: true });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
