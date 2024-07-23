import { Module } from "@nestjs/common";
import { ODRService } from "./odr.service";
import { ODRController } from "./odr.controller";

@Module({
    controllers: [ODRController],
    providers: [ODRService],
})
export class ODRModule {}
