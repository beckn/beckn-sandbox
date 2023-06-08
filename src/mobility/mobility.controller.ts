import { Body, Controller, Get, NotAcceptableException, Post } from "@nestjs/common";
import { MobilityRequestDto } from "./dto/request.dto";
import { MobilityService } from "./mobility.service";

@Controller()
export class MobilityController {
    constructor(private readonly service: MobilityService) { }
    @Post("/search")
    search(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).search(mobilityRequest);   
        }
    }

    @Post("/select")
    select(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).select(mobilityRequest);  
        }
    }

    @Post("/init")
    init(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).init(mobilityRequest);
        }
    }

    @Post("/confirm")
    confirm(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).confirm(mobilityRequest);
        }
    }

    @Post("/status")
    status(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).status(mobilityRequest);
        }
    }

    @Post("/track")
    track(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).track(mobilityRequest);
        }
    }

    @Post("/cancel")
    cancel(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).cancel(mobilityRequest);
        }
    }

    @Post("/update")
    update(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).update(mobilityRequest);
        }
    }

    @Post("/support")
    support(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).support(mobilityRequest);
        }
    }

    @Post("/rating")
    rating(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).rating(mobilityRequest);
        }
    }

    @Post("/get_cancellation_reasons")
    cancellationReasons(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).cancellationReasons(mobilityRequest);
        }
    }

    @Post("/get_rating_categories")
    ratingCategories(@Body() mobilityRequest: MobilityRequestDto) {
        if(mobilityRequest.context ===undefined||mobilityRequest.context.domain === undefined )
        {
            throw new NotAcceptableException('Invalid Request', { cause: new Error(), description: 'Invalid Request, check the format of request' });
        }
        else{
            return this.service.get(mobilityRequest.context.domain).ratingCategories(mobilityRequest);
        }
    }

}
