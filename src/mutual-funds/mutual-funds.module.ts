import { Module } from "@nestjs/common";

import { MutualFundsApiService } from "./mutual-funds-api.service";
import { MutualFundsService } from "./mutual-funds.service";

@Module({
    providers: [MutualFundsApiService, MutualFundsService],
})
export class MutualFundsModule {
    /* body */
}
