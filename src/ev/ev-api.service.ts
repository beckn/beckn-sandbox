import { DentApiInterface } from "src/dent/dent-api.interface";

import { Injectable } from "@nestjs/common";

import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as ratingResponse from "./response/response.rating.json";
import * as updateStartResponse from "./response/response.update.start.json";
import * as updateEndResponse from "./response/response.update.end.json";
import * as cancellationResponse from "./response/response.cancel.json";
import * as ratingCategories from "./response/response.rating.json";

@Injectable()
export class EVApiService implements DentApiInterface {
    search = function () {
        return searchResponse;
    };
    select = function () {
        return selectResponse;
    };
    init = function () {
        return initResponse;
    };
    confirm = function () {
        return confirmResponse;
    };
    status = function () {
        return statusResonse;
    };
    track = function () {
        return "";
    };
    cancel = function () {
        return cancelResponse;
    };
    update = function (updateDto) {
        if (updateDto.message?.order?.fulfillments[0]?.state?.descriptor?.code === "end-charging") {
            return updateEndResponse;
        } else {
            return updateStartResponse;
        }
    };
    rating = function () {
        return ratingResponse;
    };
    support = function () {
        return supportResponse;
    };
    cancellationReasons = function () {
        return cancellationResponse;
    };
    ratingCategories = function () {
        return ratingCategories;
    };
}
