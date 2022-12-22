import { Test, TestingModule } from '@nestjs/testing';
import { OfpService } from './ofp.service';

describe('OfpService', () => {
  let service: OfpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfpService],
    }).compile();

    service = module.get<OfpService>(OfpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
