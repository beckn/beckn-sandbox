import { Body, Controller, Post } from "@nestjs/common";

import { FinancialServicesRequestDto } from "./dto/request.dto";
import { FinancialServicesService } from "./financial-services.service";

@Controller("/financial-services")
export class FinancialServicesController {
    constructor(private readonly service: FinancialServicesService) {
        /* constructor */
    }

    @Post("/search")
    search(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).search(financialServicesRequest);
    }

    @Post("/select")
    select(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).select(financialServicesRequest);
    }

    @Post("/init")
    init(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).init(financialServicesRequest);
    }

    @Post("/confirm")
    confirm(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).confirm(financialServicesRequest);
    }

    @Post("/status")
    status(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).status(financialServicesRequest);
    }

    @Post("/track")
    track(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).track(financialServicesRequest);
    }

    @Post("/cancel")
    cancel(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).cancel(financialServicesRequest);
    }

    @Post("/support")
    support(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).support(financialServicesRequest);
    }

    @Post("/update")
    update(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).update(financialServicesRequest);
    }

    @Post("/rating")
    rating(@Body() financialServicesRequest: FinancialServicesRequestDto) {
        return this.service.get(financialServicesRequest.context.domain).rating(financialServicesRequest);
    }
}
