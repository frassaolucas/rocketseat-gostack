import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import CourierController from './app/controllers/CourierController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// NEED TO BE AUTHENTICATED AFTER THIS LINE
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/recipients', RecipientController.store);

routes.post('/couriers', CourierController.store);
routes.put('/couriers/:id', CourierController.update);

export default routes;
