import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import path from 'node:path';
import http from 'node:http';

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Server } from 'socket.io';

import { router } from './shared/infra/http/routes';
import { AppError } from './shared/errors/AppError';

dotenv.config();

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;

    io.on('connect', () => {
      console.log('Conectou');
    });

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: `Internal server error - ${err.message}`,
        });
      }
    );

    server.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));
