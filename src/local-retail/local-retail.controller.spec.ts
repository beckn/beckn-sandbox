import { Test, TestingModule } from '@nestjs/testing';
import { LocalRetailController094 } from './local-retail.controller-0-9-4';

describe('LocalRetailController', () => {
  let controller: LocalRetailController094;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalRetailController094],
    }).compile();

    controller = module.get<LocalRetailController094>(LocalRetailController094);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
