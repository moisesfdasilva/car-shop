import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();
const carsId = '/cars/:id';

carsRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).registerCar(),
);
carsRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);
carsRouter.get(
  carsId,
  (req, res, next) => new CarController(req, res, next).getOneCar(),
);
carsRouter.put(
  carsId,
  (req, res, next) => new CarController(req, res, next).updateOneCar(),
);
carsRouter.delete(
  carsId,
  (req, res, next) => new CarController(req, res, next).deleteOneCar(),
);

export default carsRouter;
