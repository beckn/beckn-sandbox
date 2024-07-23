import { Controller, Post, Body } from "@nestjs/common";
import { DSNPClientDTO } from "./dto/dsnp.dto";
import { DSNPService } from "./dsnp.service";

@Controller("dsnp")
export class DSNPController {
    constructor(private readonly dsnpService: DSNPService) {}

    @Post("/search")
    search(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.search(dsnpRequest);
    }

    @Post("/select")
    select(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.select(dsnpRequest);
    }

    @Post("/init")
    init(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.init(dsnpRequest);
    }

    @Post("/confirm")
    confirm(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.confirm(dsnpRequest);
    }

    @Post("/support")
    support(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.support(dsnpRequest);
    }

    @Post("/cancel")
    cancel(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.cancel(dsnpRequest);
    }

    @Post("/rating")
    rating(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.rating(dsnpRequest);
    }

    @Post("/update")
    update(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.update(dsnpRequest);
    }

    @Post("/status")
    status(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.status(dsnpRequest);
    }

    @Post("/track")
    track(@Body() dsnpRequest: DSNPClientDTO) {
        return this.dsnpService.track(dsnpRequest);
    }
}
