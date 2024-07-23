import { Body, Controller, Post } from "@nestjs/common";
import { LocalRetailService } from "./local-retail.service";
import { Local_Retail110_Request_DTO } from "./dto/1-1-0/local-retail-1-1-0-request.dto";

@Controller("retail/1.1.0")
export class LocalRetailController110 {
    constructor(private readonly localRetailService: LocalRetailService) {}

    @Post("/search")
    search(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).search(request);
    }

    @Post("/init")
    init(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).init(request);
    }

    @Post("/cancel")
    cancel(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).cancel(request);
    }

    @Post("/confirm")
    confirm(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).confirm(request);
    }

    @Post("/rating")
    rating(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).rating(request);
    }

    @Post("/select")
    select(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).select(request);
    }

    @Post("/status")
    status(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).status(request);
    }

    @Post("/support")
    support(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).support(request);
    }

    @Post("/track")
    track(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).track(request);
    }

    @Post("/update")
    update(@Body() request: Local_Retail110_Request_DTO) {
        return this.localRetailService.get110(request.context.domain).update(request);
    }
}
