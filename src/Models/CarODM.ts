import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async registerCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find({});
  }

  public async getOneCar(carId: string): Promise<ICar | null> {
    return this.model.findById(carId).exec();
  }

  public async updateOneCar(car: ICar): Promise<ICar | null> {
    await this.model.updateOne({ id: car.id }, { ...car });
    return car;
  }
}

export default CarODM;
