import { Module } from "@nestjs/common";
import { Industry40Controller } from "./industry-4.0.controller";
import { Industry40Service } from "./industry-4.0.service";

@Module({
    controllers: [Industry40Controller],
    providers: [Industry40Service],
})
export class Industry40Module {}
