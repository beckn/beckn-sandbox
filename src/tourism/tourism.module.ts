import { Module } from "@nestjs/common";
import { TourismService } from "./tourism.service";
import { TourismController } from "./tourism.controller";

@Module({
    controllers: [TourismController],
    providers: [TourismService],
})
export class TourismModule {}
