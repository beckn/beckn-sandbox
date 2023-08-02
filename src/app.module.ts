import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { MobilityModule } from "./mobility/mobility.module";
import { FinancialServicesModule } from "./financial-services/financial-services.module";

import { DsepModule } from "./dsep/dsep.module";

@Module({
    imports: [MobilityModule, CommonModule, FinancialServicesModule, DsepModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    /* body */
}
