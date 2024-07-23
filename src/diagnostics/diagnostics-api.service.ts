import { DHPApiInterface } from "src/dhp/dhp-api.interface";

import { Injectable } from "@nestjs/common";

import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as ratingResponse from "./response/response.rating.json";
import * as updateResponse from "./response/response.update.json";
import * as trackResponse from "./response/response.track.json";

@Injectable()
export class DiagnosticsApiService implements DHPApiInterface {
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
        return trackResponse;
    };
    cancel = function () {
        return cancelResponse;
    };
    update = function () {
        return updateResponse;
    };
    rating = function () {
        return ratingResponse;
    };
    support = function () {
        return supportResponse;
    };
}
