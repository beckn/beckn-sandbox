import { Module } from "@nestjs/common";

import { HealthInsuranceApiService } from "./health-insurance-api.service";
import { HealthInsuranceService } from "./health-insurance.service";

@Module({
    providers: [HealthInsuranceApiService, HealthInsuranceService],
})
export class HealthInsuranceModule {
    /* body */
}
