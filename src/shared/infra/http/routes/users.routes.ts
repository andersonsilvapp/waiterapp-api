import { Router } from 'express';

import { createUserController } from '../../../../modules/users/UseCases/createUser/CreateUserController';
import { authenticateUserController } from '../../../../modules/users/UseCases/authenticateUser/AuthenticateUserController';
import { privateRouteController } from '../../../../modules/users/UseCases/privateRoute/PrivateRouteController';
import { checkToken } from '../middlewares/checkToken';

const usersRoutes = Router();

usersRoutes.post('/register', createUserController.handle);

usersRoutes.post('/login', authenticateUserController.handle);

usersRoutes.get('/user/:id', checkToken, privateRouteController.handle);

export { usersRoutes };
