import ICar from '../../src/Interfaces/ICar';

const CarInputMock: ICar = {
  model: 'Kombi véia',
  year: 1976,
  color: 'beige',
  status: true,
  buyValue: 8.500,
  doorsQty: 4,
  seatsQty: 9,
};

const CarOutputMock: ICar = {
  id: '641dd71b4f3e69e8dc6d586f',
  model: 'Kombi véia',
  year: 1976,
  color: 'beige',
  status: true,
  buyValue: 8.500,
  doorsQty: 4,
  seatsQty: 9,
};

const ArrayCarOutputMock: ICar[] = [
  {
    id: '641ddfa54f3e69e8dc6d5873',
    model: 'Corcel 77',
    year: 1975,
    color: 'brown',
    status: true,
    buyValue: 3.800,
    doorsQty: 2,
    seatsQty: 5,
  },
  {
    id: '641ddc8b4f3e69e8dc6d5871',
    model: 'Santana veloz',
    year: 1996,
    color: 'green',
    status: true,
    buyValue: 16.500,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export {
  CarInputMock,
  CarOutputMock,
  ArrayCarOutputMock,
};
