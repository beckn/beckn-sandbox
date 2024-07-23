import { Module } from '@nestjs/common';
import { AmbulanceService } from './ambulance.service';

@Module({
  providers: [AmbulanceService]
})
export class AmbulanceModule {}
