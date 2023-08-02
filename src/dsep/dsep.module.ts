import { Module } from "@nestjs/common";
import { DsepService } from "./dsep.service";
import { DsepController } from "./dsep.controller";

@Module({
    controllers: [DsepController],
    providers: [DsepService],
})
export class DsepModule {}
