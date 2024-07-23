import { Module } from "@nestjs/common";

import { UmtcApiService } from "./umtc-api.service";
import { UmtcService } from "./umtc.service";

@Module({
    providers: [UmtcService, UmtcApiService],
})
export class UmtcModule {}
