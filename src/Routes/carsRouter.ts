import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).registerCar(),
);
carsRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);
carsRouter.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getOneCar(),
);

export default carsRouter;
