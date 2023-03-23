import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();

carRouter.post(
  '/car',
  (req, res, next) => new CarController(req, res, next).registerCar(),
);

export default carRouter;
