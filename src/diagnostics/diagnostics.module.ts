import { Module } from "@nestjs/common";

import { DiagnosticsApiService } from "./diagnostics-api.service";
import { DiagnosticsService } from "./diagnostics.service";

@Module({
    providers: [DiagnosticsApiService, DiagnosticsService],
})
export class DiagnosticsModule {
    /* body */
}
