import { DHPApiInterface } from "src/dhp/dhp-api.interface";

import { Injectable } from "@nestjs/common";
import { BPP_ID, BPP_URI } from "../../common/constants";
import { DHPRequestDto } from "../dto/request.dto";
import { v4 as uuid_v4 } from "uuid";

import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as updateResponse from "./response/response.update.json";
import * as ratingResponse from "./response/response.rating.json";
import * as trackResponse from "./response/response.track.json";
@Injectable()
export class BloodbankService implements DHPApiInterface {
    search = (request: DHPRequestDto) => {
        this.processResponse(searchResponse, request);
        return searchResponse;
    };
    select = (request: DHPRequestDto) => {
        this.processResponse(selectResponse, request);
        return selectResponse;
    };
    init = (request: DHPRequestDto) => {
        this.processResponse(initResponse, request);
        return initResponse;
    };
    confirm = (request: DHPRequestDto) => {
        this.processResponse(confirmResponse, request);
        confirmResponse.message.order.id = uuid_v4();
        return confirmResponse;
    };
    status = (request: DHPRequestDto) => {
        this.processResponse(statusResonse, request);
        statusResonse.message.order.id = request?.message?.order_id;
        return statusResonse;
    };
    track = (request: DHPRequestDto) => {
        this.processResponse(trackResponse, request);
        return trackResponse;
    };
    cancel = (request: DHPRequestDto) => {
        this.processResponse(cancelResponse, request);
        cancelResponse.message.order.id = request?.message?.order_id;
        return cancelResponse;
    };
    update = (request: DHPRequestDto) => {
        this.processResponse(updateResponse, request);
        updateResponse.message.order.id = request?.message?.order_id;
        return updateResponse;
    };
    rating = (request: DHPRequestDto) => {
        this.processResponse(ratingResponse, request);
        return ratingResponse;
    };
    support = (request: DHPRequestDto) => {
        this.processResponse(supportResponse, request);
        return supportResponse;
    };

    processResponse(
        response:
            | typeof searchResponse
            | typeof selectResponse
            | typeof initResponse
            | typeof confirmResponse
            | typeof statusResonse
            | typeof updateResponse
            | typeof supportResponse
            | typeof cancelResponse
            | typeof trackResponse
            | typeof ratingResponse,

        request: DHPRequestDto,
    ) {
        response["context"].bpp_id = BPP_ID;
        response["context"].bpp_uri = BPP_URI;
        response["context"].bap_id = request.context.bap_id;
        response["context"].bap_uri = request.context.bap_uri;
        return response;
    }
}
