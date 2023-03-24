import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const MotorcycleInputMock: IMotorcycle = {
  model: 'Suzuki GSX-R',
  year: 1985,
  color: 'blue',
  status: true,
  buyValue: 57.500,
  category: 'Street',
  engineCapacity: 750,
};

const MotorcycleOutputMock: IMotorcycle = {
  id: '641dd71b4f3e69e8dc6d586f',
  model: 'Suzuki GSX-R',
  year: 1985,
  color: 'blue',
  status: true,
  buyValue: 57.500,
  category: 'Street',
  engineCapacity: 750,
};

const ArrayMotorcycleOutputMock: IMotorcycle[] = [
  {
    id: '641ddfa54f3e69e8dc6d5873',
    model: 'Harley-Davidson Fat Boy',
    year: 2008,
    color: 'black',
    status: true,
    buyValue: 49.900,
    category: 'Custom',
    engineCapacity: 1600,
  },
  {
    id: '641ddc8b4f3e69e8dc6d5871',
    model: 'Yamaha Ténéré',
    year: 1986,
    color: 'white',
    status: true,
    buyValue: 15.000,
    category: 'Trail',
    engineCapacity: 600,
  },
];

export {
  MotorcycleInputMock,
  MotorcycleOutputMock,
  ArrayMotorcycleOutputMock,
};