import { Module } from '@nestjs/common';
import { CityOfLightController } from './city-of-light.controller';
import { CityOfLightService } from './city-of-light.service';

@Module({
  controllers: [CityOfLightController],
  providers: [CityOfLightService]
})
export class CityOfLightModule {}
