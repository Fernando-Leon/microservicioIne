import { Test, TestingModule } from '@nestjs/testing';
import { DatosineController } from './datosine.controller';
import { DatosineService } from './datosine.service';

describe('DatosineController', () => {
  let controller: DatosineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosineController],
      providers: [DatosineService],
    }).compile();

    controller = module.get<DatosineController>(DatosineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
