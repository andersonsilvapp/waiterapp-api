import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  console.log({ authHeader, token });

  if(!token) {
    return res.status(401).json({ msg: 'Acesso negado!'});
  }

  try {
    const secret = process.env.SECRET;

    if (!secret) return;

    jwt.verify(token, secret);

    next();

  } catch(error) {
    res.status(400).json({ msg: 'Token inválido'});
  }
}
