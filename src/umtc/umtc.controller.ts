import { Controller, Post, Body } from "@nestjs/common";
import { UMTCClientDTO } from "./dto/umtc.dto";
import { UMTCService } from "./umtc.service";

@Controller("umtc")
export class UMTCController {
    constructor(private readonly umtcService: UMTCService) {}

    @Post("/search")
    search(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.search(umtcRequest);
    }

    @Post("/select")
    select(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.select(umtcRequest);
    }

    @Post("/init")
    init(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.init(umtcRequest);
    }

    @Post("/confirm")
    confirm(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.confirm(umtcRequest);
    }

    @Post("/cancel")
    cancel(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.cancel(umtcRequest);
    }

    @Post("/status")
    status(@Body() umtcRequest: UMTCClientDTO) {
        return this.umtcService.status(umtcRequest);
    }
}
