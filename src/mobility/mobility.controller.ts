import { Body, Controller, Get, Post } from "@nestjs/common";

import { MobilityRequestDto } from "./dto/request.dto";
import { MobilityService } from "./mobility.service";

@Controller("/mobility")
export class MobilityController {
    constructor(private readonly service: MobilityService) {
        /* constructor */
    }

    @Post("/search")
    search(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).search(mobilityRequest);
    }

    @Post("/select")
    select(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).select(mobilityRequest);
    }

    @Post("/init")
    init(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).init(mobilityRequest);
    }

    @Post("/confirm")
    confirm(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).confirm(mobilityRequest);
    }

    @Post("/status")
    status(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).status(mobilityRequest);
    }

    @Post("/track")
    track(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).track(mobilityRequest);
    }

    @Post("/cancel")
    cancel(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).cancel(mobilityRequest);
    }

    @Post("/update")
    update(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).update(mobilityRequest);
    }

    @Post("/support")
    support(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).support(mobilityRequest);
    }

    @Post("/rating")
    rating(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).rating(mobilityRequest);
    }

    @Post("/get_cancellation_reasons")
    cancellationReasons(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).cancellationReasons(mobilityRequest);
    }

    @Post("/get_rating_categories")
    ratingCategories(@Body() mobilityRequest: MobilityRequestDto) {
        return this.service.get(mobilityRequest.context.domain).ratingCategories(mobilityRequest);
    }
}
