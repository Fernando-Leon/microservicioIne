import { Test, TestingModule } from '@nestjs/testing';
import { DatosineService } from './datosine.service';

describe('DatosineService', () => {
  let service: DatosineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosineService],
    }).compile();

    service = module.get<DatosineService>(DatosineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
