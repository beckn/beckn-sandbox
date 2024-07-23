import { Controller, Post, Body } from "@nestjs/common";
import { DSEPRequestDto } from "./dto/request.dto";
import { DsepService } from "./dsep.service";

@Controller("dsep")
export class DsepController {
    constructor(private readonly dsepService: DsepService) {}

    @Post("/search")
    search(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).search(dsepRequest);
    }

    @Post("/select")
    select(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).select(dsepRequest);
    }

    @Post("/init")
    init(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).init(dsepRequest);
    }

    @Post("/confirm")
    confirm(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).confirm(dsepRequest);
    }

    @Post("/support")
    support(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).support(dsepRequest);
    }

    @Post("/cancel")
    cancel(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).cancel(dsepRequest);
    }

    @Post("/rating")
    rating(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).rating(dsepRequest);
    }

    @Post("/update")
    update(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).update(dsepRequest);
    }

    @Post("/status")
    status(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).status(dsepRequest);
    }

    @Post("/track")
    track(@Body() dsepRequest: DSEPRequestDto) {
        return this.dsepService.get(dsepRequest.context.domain).track(dsepRequest);
    }
}
