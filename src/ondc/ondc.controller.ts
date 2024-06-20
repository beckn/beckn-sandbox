import { Controller, Post, Body } from "@nestjs/common";
import { ONDCClientDTO } from "./dto/ondc.dto";
import { ONDCService } from "./ondc.service";

@Controller("ondc")
export class ONDCController {
    constructor(private readonly ondcService: ONDCService) {}

    @Post("/search")
    search(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.search(ondcRequest);
    }

    @Post("/select")
    select(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.select(ondcRequest);
    }

    @Post("/init")
    init(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.init(ondcRequest);
    }

    @Post("/confirm")
    confirm(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.confirm(ondcRequest);
    }

    @Post("/support")
    support(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.support(ondcRequest);
    }

    @Post("/cancel")
    cancel(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.cancel(ondcRequest);
    }

    @Post("/rating")
    rating(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.rating(ondcRequest);
    }

    @Post("/update")
    update(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.update(ondcRequest);
    }

    @Post("/status")
    status(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.status(ondcRequest);
    }

    @Post("/track")
    track(@Body() ondcRequest: ONDCClientDTO) {
        return this.ondcService.track(ondcRequest);
    }
}
