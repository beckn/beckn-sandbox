import { Controller, Post, Body } from "@nestjs/common";
import { TourismClientDTO } from "./dto/tourism.dto";
import { TourismService } from "./tourism.service";

@Controller("tourism")
export class TourismController {
    constructor(private readonly tourismService: TourismService) {}

    @Post("/search")
    search(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.search(tourismRequest);
    }

    @Post("/select")
    select(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.select(tourismRequest);
    }

    @Post("/init")
    init(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.init(tourismRequest);
    }

    @Post("/confirm")
    confirm(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.confirm(tourismRequest);
    }

    @Post("/support")
    support(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.support(tourismRequest);
    }

    @Post("/cancel")
    cancel(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.cancel(tourismRequest);
    }

    @Post("/rating")
    rating(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.rating(tourismRequest);
    }

    @Post("/update")
    update(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.update(tourismRequest);
    }

    @Post("/status")
    status(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.status(tourismRequest);
    }

    @Post("/track")
    track(@Body() tourismRequest: TourismClientDTO) {
        return this.tourismService.track(tourismRequest);
    }
}
