import { Module } from "@nestjs/common";
import { EVModule } from "src/ev/ev.module";
import { DentController } from "./dent.controller";
import { DentService } from "./dent.service";

@Module({
    imports: [EVModule],
    controllers: [DentController],
    providers: [DentService],
})
export class DentModule {
    /* body */
}
