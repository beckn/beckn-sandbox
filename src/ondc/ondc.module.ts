import { Module } from "@nestjs/common";

import { OndcApiService } from "./ondc-api.service";
import { OndcService } from "./ondc.service";

@Module({
    providers: [OndcService, OndcApiService],
})
export class OndcModule {}
