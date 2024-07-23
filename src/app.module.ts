import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { MobilityModule } from "./mobility/mobility.module";
import { FinancialServicesModule } from "./financial-services/financial-services.module";
import { DentModule } from "./dent/dent.module";
import { DHPModule } from "./dhp/dhp.module";
import { DsepModule } from "./dsep/dsep.module";
import { Industry40Module } from "./industry-4.0/industry-4.0.module";
import { ODRModule } from "./odr/odr.module";
import { LocalRetailModule } from "./local-retail/local-retail.module";
import { TourismModule } from "./tourism/tourism.module";
import { CityOfLightModule } from "./city-of-light/city-of-light.module";
import { DSNPModule } from "./dsnp-osm/dsnp.module";
import { LogisticModule } from "./logistics/logistic.module";
import { VistaarModule } from "./vistaar/vistaar.module";

@Module({
    imports: [
        MobilityModule,
        CommonModule,
        FinancialServicesModule,
        DsepModule,
        DentModule,
        DHPModule,
        Industry40Module,
        ODRModule,
        LocalRetailModule,
        TourismModule,
        CityOfLightModule,
        DSNPModule,
        LogisticModule,
        VistaarModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    /* body */
}
