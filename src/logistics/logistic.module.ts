import { Module } from "@nestjs/common";
import { LogisticService } from "./logistic.service";
import { LogisticController } from "./logistic.controller";

@Module({
    controllers: [LogisticController],
    providers: [LogisticService],
})
export class LogisticModule {}
