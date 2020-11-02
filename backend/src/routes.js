import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/User';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/newUser', UserController.store)

routes.use(authMiddleware);


export default routes;