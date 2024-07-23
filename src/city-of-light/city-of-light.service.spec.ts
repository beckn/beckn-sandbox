import { Test, TestingModule } from '@nestjs/testing';
import { CityOfLightService } from './city-of-light.service';

describe('CityOfLightService', () => {
  let service: CityOfLightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityOfLightService],
    }).compile();

    service = module.get<CityOfLightService>(CityOfLightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
