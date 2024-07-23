import { Module } from "@nestjs/common";

import { CreditPersonalApiService } from "./credit-personal-api.service";
import { CreditPersonalService } from "./credit-personal.service";

@Module({
    providers: [CreditPersonalApiService, CreditPersonalService],
})
export class CreditPersonalModule {
    /* body */
}
