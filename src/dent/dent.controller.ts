import { Body, Controller, Post } from "@nestjs/common";

import { DentRequestDto } from "./dto/request.dto";
import { DentService } from "./dent.service";

@Controller("/dent")
export class DentController {
    constructor(private readonly service: DentService) {
        /* constructor */
    }

    @Post("/search")
    search(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).search(dentRequestDto);
    }

    @Post("/select")
    select(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).select(dentRequestDto);
    }

    @Post("/init")
    init(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).init(dentRequestDto);
    }

    @Post("/confirm")
    confirm(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).confirm(dentRequestDto);
    }

    @Post("/status")
    status(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).status(dentRequestDto);
    }

    @Post("/track")
    track(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).track(dentRequestDto);
    }

    @Post("/cancel")
    cancel(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).cancel(dentRequestDto);
    }

    @Post("/support")
    support(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).support(dentRequestDto);
    }

    @Post("/update")
    update(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).update(dentRequestDto);
    }

    @Post("/rating")
    rating(@Body() dentRequestDto: DentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).rating(dentRequestDto);
    }
}
