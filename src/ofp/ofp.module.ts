import { Module } from '@nestjs/common';
import { OfpService } from './ofp.service';
import { OfpController } from './ofp.controller';

@Module({
  controllers: [OfpController],
  providers: [OfpService]
})
export class OfpModule {}
