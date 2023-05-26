import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export function validateToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  const token = authorization?.replace('Bearer', '').trim();

  if (!token) {
    throw new AppError('Acesso negado!', 401);
  }

  try {
    const secret = process.env.SECRET;

    const data = verify(token, secret!);

    const { id } = data as TokenPayload;

    request.userId = id;

    return next();
  } catch (error) {
    throw new AppError('Token inválido!', 401);
  }
}
