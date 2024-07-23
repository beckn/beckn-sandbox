import { Module } from "@nestjs/common";
import { DsepService } from "./dsep.service";
import { DsepController } from "./dsep.controller";
import { StudentConnectModule } from './student-connect/student-connect.module';

@Module({
    controllers: [DsepController],
    providers: [DsepService],
    imports: [StudentConnectModule],
})
export class DsepModule {}
