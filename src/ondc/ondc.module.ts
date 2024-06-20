import { Module } from "@nestjs/common";
import { ONDCService } from "./ondc.service";
import { ONDCController } from "./ondc.controller";

@Module({
    controllers: [ONDCController],
    providers: [ONDCService],
})
export class ONDCModule {}
