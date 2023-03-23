import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  public async registerCar() {
    const car: ICar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status === undefined ? false : this._req.body.status,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };

    try {
      const newCar = await this._service.registerCar(car);
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAllCars() {
    const allCars = await this._service.getAllCars();
    return this._res.status(200).json(allCars);
  }

  public async getOneCar() {
    try {
      const carId: string = this._req.params.id;
      if (!isValidObjectId(carId)) {
        return this._res.status(422).json({ message: 'Invalid mongo id' });
      }
      const oneCar = await this._service.getOneCar(carId);
      if (oneCar === null) {
        return this._res.status(404).json({ message: 'Car not found' });
      }
      return this._res.status(200).json(oneCar);
    } catch (error) {
      this._next(error);
    }
  }

  public async updateOneCar() {
    const carId: string = this._req.params.id;
    const car: ICar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status === undefined ? false : this._req.body.status,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };

    try {
      if (!isValidObjectId(carId)) {
        return this._res.status(422).json({ message: 'Invalid mongo id' });
      }
      const oneCar = await this._service.getOneCar(carId);
      if (oneCar === null) {
        return this._res.status(404).json({ message: 'Car not found' });
      }
      const updateCar = await this._service.updateOneCar(carId, car);
      return this._res.status(200).json(updateCar);
    } catch (error) {
      this._next(error);
    }
  }
}

export default CarController;
