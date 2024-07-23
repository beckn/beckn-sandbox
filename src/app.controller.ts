import { Body, Controller, Get, Post, Req } from "@nestjs/common";

import { AppService } from "./app.service";
import { IncomingMessage } from "http";

@Controller()
export class AppController {
    getHello(): any {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly appService: AppService) {}

    @Post()
    webhook(@Body() body: any, @Req() req: any) {
        this.appService.webhookService(body, `${req.protocol}://${req.get("host")}`);
        return { message: { ack: { status: "ACK" } } };
    }
}
