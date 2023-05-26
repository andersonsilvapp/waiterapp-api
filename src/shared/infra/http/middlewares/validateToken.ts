import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    throw new AppError('Acesso negado!');
  }

  try {
    const secret = process.env.SECRET;

    if (!secret) return;
    verify(token, secret);

    next();
  } catch (error) {
    throw new AppError('Token inválido!');
  }
}
