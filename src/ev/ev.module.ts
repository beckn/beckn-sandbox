import { Module } from "@nestjs/common";

import { EVApiService } from "./ev-api.service";
import { EVService } from "./ev.service";

@Module({
    providers: [EVApiService, EVService],
})
export class EVModule {
    /* body */
}
