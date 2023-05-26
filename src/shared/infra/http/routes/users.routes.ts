import { Router } from 'express';

import { createUserController } from '../../../../modules/users/UseCases/createUser/CreateUserController';
import { authenticateUserController } from '../../../../modules/users/UseCases/authenticateUser/AuthenticateUserController';
import { privateRouteController } from '../../../../modules/users/UseCases/privateRoute/PrivateRouteController';
import { validateToken } from '../middlewares/validateToken';

const usersRoutes = Router();

usersRoutes.post('/register', createUserController.handle);

usersRoutes.post('/login', authenticateUserController.handle);

usersRoutes.get('/user/:id', validateToken, privateRouteController.handle);

export { usersRoutes };
