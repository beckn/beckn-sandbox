import { Test, TestingModule } from '@nestjs/testing';
import { AmbulanceService } from './ambulance.service';

describe('AmbulanceService', () => {
  let service: AmbulanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbulanceService],
    }).compile();

    service = module.get<AmbulanceService>(AmbulanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
