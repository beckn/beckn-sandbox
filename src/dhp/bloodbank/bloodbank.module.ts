import { Module } from '@nestjs/common';
import { BloodbankService } from './bloodbank.service';

@Module({
  providers: [BloodbankService]
})
export class BloodbankModule {}
