import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';

import {
  MotorcycleInputMock,
  MotorcycleOutputMock,
  ArrayMotorcycleOutputMock,
} from '../../mocks/motorcycleMock';

describe('Teste dos Serviços de Motorcycle:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('1. Deve registrar uma moto', async function () {
    sinon.stub(Model, 'create').resolves(MotorcycleOutputMock);

    const service = new MotorcycleService();
    const result = await service.registerMotorcycle(MotorcycleInputMock);

    expect(result).to.be.deep.equal(MotorcycleOutputMock);
  });

  it('2. Deve apresentar a lista de motos cadastradas.', async function () {
    sinon.stub(Model, 'find').resolves(ArrayMotorcycleOutputMock);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(ArrayMotorcycleOutputMock);
  });

  it('3. Deve apresentar uma moto especificada pelo id cadastrado.', async function () {
    sinon.stub(Model, 'findById').resolves(MotorcycleOutputMock);

    const service = new MotorcycleService();
    const result = await service.getOneMotorcycle('641dd71b4f3e69e8dc6d586f');

    expect(result).to.be.deep.equal(MotorcycleOutputMock);
  });

  it('4. Deve não apresentar uma moto com id inexistente não cadastrado.', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcycleService();
    const result = await service.getOneMotorcycle('641xx71b4f3e69e8dc6d586x');

    expect(result).to.be.deep.equal(null);
  });

  it('5. Deve modificar uma moto especificada pelo id cadastrado.', async function () {
    sinon.stub(Model, 'updateOne').resolves();

    const service = new MotorcycleService();
    const result = await service.updateOneMotorcycle(
      '641dd71b4f3e69e8dc6d586f',
      MotorcycleInputMock,
    );

    expect(result).to.be.deep.equal(MotorcycleOutputMock);
  });

  it('6. Deve deletar uma moto especificada pelo id cadastrado.', async function () {
    sinon.stub(Model, 'deleteOne').resolves();

    const service = new MotorcycleService();
    const result = await service.deleteOneMotorcycle('641dd71b4f3e69e8dc6d586f');

    expect(result).to.be.deep.equal(undefined);
  });
});