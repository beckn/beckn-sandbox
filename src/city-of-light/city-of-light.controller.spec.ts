import { Test, TestingModule } from '@nestjs/testing';
import { CityOfLightController } from './city-of-light.controller';

describe('CityOfLightController', () => {
  let controller: CityOfLightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityOfLightController],
    }).compile();

    controller = module.get<CityOfLightController>(CityOfLightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
