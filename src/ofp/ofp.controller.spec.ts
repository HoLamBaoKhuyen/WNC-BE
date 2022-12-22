import { Test, TestingModule } from '@nestjs/testing';
import { OfpController } from './ofp.controller';
import { OfpService } from './ofp.service';

describe('OfpController', () => {
  let controller: OfpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfpController],
      providers: [OfpService],
    }).compile();

    controller = module.get<OfpController>(OfpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
