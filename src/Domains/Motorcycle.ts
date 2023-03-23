import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    { id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle,
  ) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getDoorsQty() {
    return this.category;
  }

  public getSeatsQty() {
    return this.engineCapacity;
  }
}

export default Motorcycle;
