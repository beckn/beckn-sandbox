import { Controller, Post, Body } from "@nestjs/common";
import { ODRClientDTO } from "./dto/odr.dto";
import { ODRService } from "./odr.service";

@Controller("odr")
export class ODRController {
    constructor(private readonly odrService: ODRService) {}

    @Post("/search")
    search(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.search(odrRequest);
    }

    @Post("/select")
    select(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.select(odrRequest);
    }

    @Post("/init")
    init(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.init(odrRequest);
    }

    @Post("/confirm")
    confirm(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.confirm(odrRequest);
    }

    @Post("/support")
    support(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.support(odrRequest);
    }

    @Post("/cancel")
    cancel(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.cancel(odrRequest);
    }

    @Post("/rating")
    rating(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.rating(odrRequest);
    }

    @Post("/update")
    update(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.update(odrRequest);
    }

    @Post("/status")
    status(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.status(odrRequest);
    }

    @Post("/track")
    track(@Body() odrRequest: ODRClientDTO) {
        return this.odrService.track(odrRequest);
    }
}
