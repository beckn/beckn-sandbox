import { Injectable } from '@nestjs/common';
import { DSEPApiInterface } from '../dsep-api.interface';
import { DSEPRequestDto } from '../dto/request.dto';
import { BPP_ID, BPP_URI } from 'src/common/constants';
import { v4 as uuid_v4 } from "uuid";

import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponsePhsical from "./response/response.select-physical.json";
import * as selectResponseVirtual from "./response/response.select-virtual.json";
import * as statusResonse from "./response/response.status.json";
import * as updateResponseSlot from "./response/response.update-booking-slot.json";
import * as updateResponsePersonal from "./response/response.update-person-details.json";


@Injectable()
export class StudentConnectService implements DSEPApiInterface {

    search = (request: DSEPRequestDto) => {
        this.processResponse(searchResponse, request)
        return searchResponse;
    };
    select = (request: DSEPRequestDto) => {
        const fulfillmentId = request?.message?.order?.fulfillments[0]?.id ?? "";
        var response;
        if(fulfillmentId == "ful-02") {
            response = selectResponsePhsical;
        } else {
            response = selectResponseVirtual;
        }
        this.processResponse(response, request)
        return response;
    };
    init = (request: DSEPRequestDto) => {
        this.processResponse(initResponse, request)
        return initResponse;
    };
    confirm = (request: DSEPRequestDto) => {
        this.processResponse(confirmResponse, request)
        confirmResponse.message.order.id = uuid_v4();
        return confirmResponse;
    };
    status = (request: DSEPRequestDto) => {
        this.processResponse(statusResonse, request)
        statusResonse.message.order.id = request?.message?.order_id;
        return statusResonse;
    };
    track = (request: DSEPRequestDto) => {
        return null;
    };
    cancel = (request: DSEPRequestDto) => {
        this.processResponse(cancelResponse, request)
        cancelResponse.message.order.id = request?.message?.order_id;
        return cancelResponse;
    };
    update = (request: DSEPRequestDto) => {
        const updateTarget = request?.message?.update_target ?? "";
        var response;
        if(updateTarget.includes("time")) {
            response = updateResponseSlot;
        } else {
            response = updateResponsePersonal;
        }
        this.processResponse(response, request)
        return response;
    };
    rating = (request: DSEPRequestDto) => {
        return null;
    };
    support = (request: DSEPRequestDto) => {
        return null;
    };

    processResponse(response: typeof searchResponse | typeof selectResponsePhsical | 
        typeof selectResponseVirtual | typeof initResponse | typeof confirmResponse | 
        typeof statusResonse | typeof updateResponsePersonal | 
        typeof updateResponseSlot | typeof cancelResponse, request: DSEPRequestDto) {
        response.context.bpp_id = BPP_ID;
        response.context.bpp_uri = BPP_URI;
        response.context.bap_id = request.context.bap_id;
        response.context.bap_uri = request.context.bap_uri;
        return response;
    }
}
