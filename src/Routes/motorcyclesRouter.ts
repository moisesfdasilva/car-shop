import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRouter = Router();

motorcyclesRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);
motorcyclesRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);
motorcyclesRouter.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getOneMotorcycle(),
);
motorcyclesRouter.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateOneMotorcycle(),
);

export default motorcyclesRouter;