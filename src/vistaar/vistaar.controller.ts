import { Body, Controller, Post, Get, Query } from "@nestjs/common";
import { VistaarService } from "./vistaar.service";
import { Vistaar_Request_DTO } from "./request.dto";

@Controller("vistaar-advisory")
export class VistaarController {
    constructor(private readonly vistaarService: VistaarService) {}

    @Post("/search")
    search(@Body() vistaarRequest: Vistaar_Request_DTO) {
        return this.vistaarService.search(vistaarRequest);
    }
    @Post("/rating")
    rating(@Body() vistaarRequest: Vistaar_Request_DTO) {
        return this.vistaarService.rating(vistaarRequest);
    }
    @Post("/support")
    support(@Body() vistaarRequest: Vistaar_Request_DTO) {
        return this.vistaarService.support(vistaarRequest);
    }
}
