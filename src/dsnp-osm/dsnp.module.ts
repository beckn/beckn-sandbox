import { Module } from "@nestjs/common";
import { DSNPService } from "./dsnp.service";
import { DSNPController } from "./dsnp.controller";

@Module({
    controllers: [DSNPController],
    providers: [DSNPService],
})
export class DSNPModule {}
