import express from 'express';
import carsRouter from './Routes/carsRouter';
import motorcyclesRouter from './Routes/motorcyclesRouter';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(motorcyclesRouter);

export default app;
