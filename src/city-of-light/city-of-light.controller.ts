import { Controller, Post, Body } from "@nestjs/common";
import { CityOfLightClientDTO } from "./dto/cityOfLight.dto";
import { CityOfLightService } from "./city-of-light.service";

@Controller('city-of-light')
export class CityOfLightController {
    constructor(private readonly cityService: CityOfLightService) {}

    @Post("/search")
    search(@Body() request: CityOfLightClientDTO) {
        return this.cityService.search(request);
    }

    @Post("/select")
    select(@Body() request: CityOfLightClientDTO) {
        return this.cityService.select(request);
    }

    @Post("/init")
    init(@Body() request: CityOfLightClientDTO) {
        return this.cityService.init(request);
    }

    @Post("/confirm")
    confirm(@Body() request: CityOfLightClientDTO) {
        return this.cityService.confirm(request);
    }

    @Post("/support")
    support(@Body() request: CityOfLightClientDTO) {
        return this.cityService.support(request);
    }

    @Post("/cancel")
    cancel(@Body() request: CityOfLightClientDTO) {
        return this.cityService.cancel(request);
    }

    @Post("/rating")
    rating(@Body() request: CityOfLightClientDTO) {
        return this.cityService.rating(request);
    }

    @Post("/update")
    update(@Body() request: CityOfLightClientDTO) {
        return this.cityService.update(request);
    }

    @Post("/status")
    status(@Body() request: CityOfLightClientDTO) {
        return this.cityService.status(request);
    }

    @Post("/track")
    track(@Body() request: CityOfLightClientDTO) {
        return this.cityService.track(request);
    }
}
