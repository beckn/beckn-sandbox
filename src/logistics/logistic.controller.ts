import { Controller, Post, Body } from "@nestjs/common";
import { LogisticClientDTO } from "./dto/logistic.dto";
import { LogisticService } from "./logistic.service";

@Controller("logistic")
export class LogisticController {
    constructor(private readonly logisticService: LogisticService) {}

    @Post("/search")
    search(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.search(logisticRequest);
    }

    @Post("/select")
    select(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.select(logisticRequest);
    }

    @Post("/init")
    init(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.init(logisticRequest);
    }

    @Post("/confirm")
    confirm(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.confirm(logisticRequest);
    }

    @Post("/support")
    support(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.support(logisticRequest);
    }

    @Post("/cancel")
    cancel(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.cancel(logisticRequest);
    }

    @Post("/rating")
    rating(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.rating(logisticRequest);
    }

    @Post("/update")
    update(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.update(logisticRequest);
    }

    @Post("/status")
    status(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.status(logisticRequest);
    }

    @Post("/track")
    track(@Body() logisticRequest: LogisticClientDTO) {
        return this.logisticService.track(logisticRequest);
    }
}
