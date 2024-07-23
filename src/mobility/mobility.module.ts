import { OndcModule } from "src/ondc/ondc.module";
import { UmtcModule } from "src/umtc/umtc.module";

import { Module } from "@nestjs/common";

import { MobilityController } from "./mobility.controller";
import { MobilityService } from "./mobility.service";

@Module({
    imports: [OndcModule, UmtcModule],
    controllers: [MobilityController],
    providers: [MobilityService],
})
export class MobilityModule {}
