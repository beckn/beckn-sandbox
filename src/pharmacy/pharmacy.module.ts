import { Module } from "@nestjs/common";

import { PharmacyApiService } from "./pharmacy-api.service";
import { PharmacyService } from "./pharmacy.service";

@Module({
    providers: [PharmacyApiService, PharmacyService],
})
export class PharmacyModule {
    /* body */
}
