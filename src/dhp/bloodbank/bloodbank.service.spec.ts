import { Test, TestingModule } from '@nestjs/testing';
import { BloodbankService } from './bloodbank.service';

describe('BloodbankService', () => {
  let service: BloodbankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodbankService],
    }).compile();

    service = module.get<BloodbankService>(BloodbankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
