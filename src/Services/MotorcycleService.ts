import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async registerMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.registerVehicle(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const allMotorcycles = await motorcycleODM.getAllVehicles();
    const allCarsDomain = allMotorcycles.map((motorcycle) => (
      this.createMotorcycleDomain(motorcycle)));
    return allCarsDomain;
  }

  public async getOneMotorcycle(motorcycleId: string) {
    const motorcycleODM = new MotorcycleODM();
    const oneMotorcycle = await motorcycleODM.getOneVehicle(motorcycleId);
    return this.createMotorcycleDomain(oneMotorcycle);
  }
}

export default MotorcycleService;
