import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).registerCar(),
);

export default carsRouter;
