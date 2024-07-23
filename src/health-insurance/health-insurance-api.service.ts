import { FinancialServicesApiInterface } from "src/financial-services/financial-services-api.interface";

import { Injectable } from "@nestjs/common";

import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as updateResponse from "./response/response.update.json";
import * as cancellationResponse from "./response/response.cancellation_reasons.json";
import * as ratingCategories from "./response/response.rating_categories.json";
import * as ratingResponse from "./response/response.rating.json";
@Injectable()
export class HealthInsuranceApiService implements FinancialServicesApiInterface {
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
    update = function () {
        return updateResponse;
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
