import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    { id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar,
  ) {
    super({ id, model, year, color, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
