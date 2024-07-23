import { Module } from "@nestjs/common";
import { VistaarController } from "./vistaar.controller";
import { VistaarService } from "./vistaar.service";

@Module({
    controllers: [VistaarController],
    providers: [VistaarService],
})
export class VistaarModule {}
