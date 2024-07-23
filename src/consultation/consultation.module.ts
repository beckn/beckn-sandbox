import { Module } from "@nestjs/common";

import { ConsultationApiService } from "./consultation-api.service";
import { ConsultationService } from "./consultation.service";

@Module({
    providers: [ConsultationApiService, ConsultationService],
})
export class ConsultationModule {
    /* body */
}
