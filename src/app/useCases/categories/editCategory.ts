import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function editCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { icon, name } = req.body;

    const category = await Category.findByIdAndUpdate(categoryId, { icon, name }, { new: true });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
