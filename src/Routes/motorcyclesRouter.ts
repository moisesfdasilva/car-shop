import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRouter = Router();
const motorcyclesId = '/motorcycles/:id';

motorcyclesRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);
motorcyclesRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);
motorcyclesRouter.get(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).getOneMotorcycle(),
);
motorcyclesRouter.put(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).updateOneMotorcycle(),
);
motorcyclesRouter.delete(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).deleteOneMotorcycle(),
);

export default motorcyclesRouter;