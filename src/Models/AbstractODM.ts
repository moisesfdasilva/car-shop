import { Model, Schema, model, models, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async registerVehicle(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAllVehicles(): Promise<T[]> {
    return this.model.find({});
  }

  public async getOneVehicle(vehicleId: string): Promise<T | null> {
    return this.model.findById(vehicleId).exec();
  }

  public async updateOneVehicle(vehicleId: string, vehicle: T): Promise<T | null> {
    await this.model.updateOne({ id: vehicleId }, { ...vehicle } as UpdateQuery<T>);
    return { id: vehicleId, ...vehicle };
  }

  public async deleteOneVehicle(vehicleId: string) {
    await this.model.deleteOne({ id: vehicleId });
  }
}

export default AbstractODM;
