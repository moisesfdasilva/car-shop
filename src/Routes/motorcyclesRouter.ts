import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRouter = Router();

motorcyclesRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);

export default motorcyclesRouter;