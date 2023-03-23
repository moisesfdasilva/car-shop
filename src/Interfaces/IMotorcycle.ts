import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  category: string;
  engineCapacity: number;
}

export default IMotorcycle;