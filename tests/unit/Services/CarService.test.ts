import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

import {
  CarInputMock,
  CarOutputMock,
  ArrayCarOutputMock,
} from '../../mocks/carMock';

describe('Teste dos Serviços de Car:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('1. Deve registrar um carro', async function () {
    sinon.stub(Model, 'create').resolves(CarOutputMock);

    const service = new CarService();
    const result = await service.registerCar(CarInputMock);

    expect(result).to.be.deep.equal(CarOutputMock);
  });

  it('2. Deve apresentar a lista de carros cadastrados.', async function () {
    sinon.stub(Model, 'find').resolves(ArrayCarOutputMock);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(ArrayCarOutputMock);
  });

  it('3. Deve apresentar um carro especificado pelo id cadastrado.', async function () {
    sinon.stub(Model, 'findById').resolves(CarOutputMock);

    const service = new CarService();
    const result = await service.getOneCar('641dd71b4f3e69e8dc6d586f');

    expect(result).to.be.deep.equal(CarOutputMock);
  });

  it('4. Deve não apresentar um carro com id inexistente não cadastrado.', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.getOneCar('641xx71b4f3e69e8dc6d586x');

    expect(result).to.be.deep.equal(null);
  });

  it('5. Deve modificar um carro especificado pelo id cadastrado.', async function () {
    sinon.stub(Model, 'updateOne').resolves();

    const service = new CarService();
    const result = await service.updateOneCar(
      '641dd71b4f3e69e8dc6d586f',
      CarInputMock,
    );

    expect(result).to.be.deep.equal(CarOutputMock);
  });

  it('6. Deve deletar um carro especificado pelo id cadastrado.', async function () {
    sinon.stub(Model, 'deleteOne').resolves();

    const service = new CarService();
    const result = await service.deleteOneCar('641dd71b4f3e69e8dc6d586f');

    expect(result).to.be.deep.equal(undefined);
  });
});