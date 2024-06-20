import { Module } from "@nestjs/common";
import { UMTCService } from "./umtc.service";
import { UMTCController } from "./umtc.controller";

@Module({
    controllers: [UMTCController],
    providers: [UMTCService],
})
export class UMTCModule {}
