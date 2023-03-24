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
    const newCar = await carODM.registerVehicle(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const allCars = await carODM.getAllVehicles();
    const allCarsDomain = allCars.map((car) => this.createCarDomain(car));
    return allCarsDomain;
  }

  public async getOneCar(carId: string) {
    const carODM = new CarODM();
    const oneCar = await carODM.getOneVehicle(carId);
    return this.createCarDomain(oneCar);
  }

  public async updateOneCar(carId: string, car: ICar) {
    const carODM = new CarODM();
    const updateCar = await carODM.updateOneVehicle(carId, car);
    return this.createCarDomain(updateCar);
  }

  public async deleteOneCar(carId: string) {
    const carODM = new CarODM();
    await carODM.deleteOneVehicle(carId);
  }
}

export default CarService;
