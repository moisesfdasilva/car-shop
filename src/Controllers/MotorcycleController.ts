import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotorcycleService;
  public invalidId: string;
  public notFound: string;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotorcycleService();
    this.invalidId = 'Invalid mongo id';
    this.notFound = 'Motorcycle not found';
  }

  public async registerMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status === undefined ? false : this._req.body.status,
      buyValue: this._req.body.buyValue,
      category: this._req.body.category,
      engineCapacity: this._req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this._service.registerMotorcycle(motorcycle);
      return this._res.status(201).json(newMotorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAllMotorcycles() {
    const allMotorcycles = await this._service.getAllMotorcycles();
    return this._res.status(200).json(allMotorcycles);
  }

  public async getOneMotorcycle() {
    const motorcycleId: string = this._req.params.id;
    try {
      if (!isValidObjectId(motorcycleId)) {
        return this._res.status(422).json({ message: this.invalidId });
      }
      const oneMotorcycle = await this._service.getOneMotorcycle(motorcycleId);
      if (oneMotorcycle === null) {
        return this._res.status(404).json({ message: this.notFound });
      }
      return this._res.status(200).json(oneMotorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async updateOneMotorcycle() {
    const motorcycleId: string = this._req.params.id;
    const motorcycle: IMotorcycle = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status === undefined ? false : this._req.body.status,
      buyValue: this._req.body.buyValue,
      category: this._req.body.category,
      engineCapacity: this._req.body.engineCapacity,
    };

    try {
      if (!isValidObjectId(motorcycleId)) {
        return this._res.status(422).json({ message: this.invalidId });
      }
      const oneMotorcycle = await this._service.getOneMotorcycle(motorcycleId);
      if (oneMotorcycle === null) {
        return this._res.status(404).json({ message: this.notFound });
      }
      const updateMotorcycle = await this._service.updateOneMotorcycle(motorcycleId, motorcycle);
      return this._res.status(200).json(updateMotorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async deleteOneMotorcycle() {
    const motorcycleId: string = this._req.params.id;

    try {
      if (!isValidObjectId(motorcycleId)) {
        return this._res.status(422).json({ message: this.invalidId });
      }
      const oneMotorcycle = await this._service.getOneMotorcycle(motorcycleId);
      if (oneMotorcycle === null) {
        return this._res.status(404).json({ message: this.notFound });
      }
      await this._service.deleteOneMotorcycle(motorcycleId);
      return this._res.status(204).json();
    } catch (error) {
      this._next(error);
    }
  }
}

export default MotorcycleController;
