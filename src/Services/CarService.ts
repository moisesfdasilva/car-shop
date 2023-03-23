import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.registerCar(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const allCars = await carODM.getAllCars();
    const allCarsDomain = allCars.map((car) => this.createCarDomain(car));
    return allCarsDomain;
  }

  public async getOneCar(carId: string) {
    const carODM = new CarODM();
    const oneCar = await carODM.getOneCar(carId);
    return this.createCarDomain(oneCar);
  }

  public async updateOneCar(car: ICar) {
    const carODM = new CarODM();
    const updateCar = await carODM.updateOneCar(car);
    return this.createCarDomain(updateCar);
  }
}

export default CarService;
