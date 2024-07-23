import { Body, Controller, Post, Get, Query } from "@nestjs/common";
import { Industry40Service } from "./industry-4.0.service";
import { Industry_4_0_Request_DTO } from "./dto/request.dto";
import { Industry4_0ENUM } from "./industry-4.0-modules.enum";

@Controller("industry-4.0")
export class Industry40Controller {
    constructor(private readonly industry40Service: Industry40Service) {}

    @Post("/search")
    search(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).search(industry40Request);
    }

    @Post("/init")
    init(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).init(industry40Request);
    }

    @Post("/cancel")
    cancel(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).cancel(industry40Request);
    }

    @Post("/confirm")
    confirm(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).confirm(industry40Request);
    }

    @Post("/rating")
    rating(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).rating(industry40Request);
    }

    @Post("/select")
    select(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).select(industry40Request);
    }

    @Post("/status")
    status(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).status(industry40Request);
    }

    @Post("/support")
    support(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).support(industry40Request);
    }

    @Post("/track")
    track(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).track(industry40Request);
    }

    @Post("/update")
    update(@Body() industry40Request: Industry_4_0_Request_DTO) {
        return this.industry40Service.get(industry40Request.context.domain).update(industry40Request);
    }
    @Get("/form")
    getForm(@Query() industry40FormQuery: any) {
        return this.industry40Service.get(industry40FormQuery.domain).getForm();
    }
    @Post("/formsubmit")
    submitForm(@Body() xinputFormBody: any) {
        return this.industry40Service.get(Industry4_0ENUM.ASSEMBLY).submitForm(xinputFormBody);
    }
}
