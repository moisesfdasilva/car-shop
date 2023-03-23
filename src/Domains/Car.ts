import ICar from '../Interfaces/ICar';

class Car {
  public id: string | undefined;
  public model: string;
  public year: number;
  public color: string;
  public status: boolean;
  public buyValue: number;
  public doorsQty: number;
  public seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;
