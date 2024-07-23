import { Body, Controller, Post } from "@nestjs/common";

import { DHPRequestDto } from "./dto/request.dto";
import { DHPService } from "./dhp.service";

@Controller("/dhp")
export class DHPController {
    constructor(private readonly service: DHPService) {
        /* constructor */
    }

    @Post("/search")
    search(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).search(dHPRequestDto);
    }

    @Post("/select")
    select(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).select(dHPRequestDto);
    }

    @Post("/init")
    init(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).init(dHPRequestDto);
    }

    @Post("/confirm")
    confirm(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).confirm(dHPRequestDto);
    }

    @Post("/status")
    status(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).status(dHPRequestDto);
    }

    @Post("/track")
    track(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).track(dHPRequestDto);
    }

    @Post("/cancel")
    cancel(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).cancel(dHPRequestDto);
    }

    @Post("/support")
    support(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).support(dHPRequestDto);
    }

    @Post("/update")
    update(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).update(dHPRequestDto);
    }

    @Post("/rating")
    rating(@Body() dHPRequestDto: DHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).rating(dHPRequestDto);
    }
}
