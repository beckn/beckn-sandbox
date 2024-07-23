import { Test, TestingModule } from '@nestjs/testing';
import { StudentConnectService } from './student-connect.service';

describe('StudentConnectService', () => {
  let service: StudentConnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentConnectService],
    }).compile();

    service = module.get<StudentConnectService>(StudentConnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
