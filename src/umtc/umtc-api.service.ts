import { MobilityApiInterface } from "src/mobility/mobility-api.interface";

import { Injectable } from "@nestjs/common";

import { CancelRequestDto } from "./dto/cancel-request.dto";
import { ConfirmRequestDto } from "./dto/confirm.request.dto";
import { InitRequestDto } from "./dto/init-request.dto";
import { RatingRequestDto } from "./dto/rating-request.dto";
import { SearchRequestDto } from "./dto/search-request.dto";
import { SelectReqDto } from "./dto/select-request.dto";
import { StatusRequestDto } from "./dto/status-request.dto";
import { SupportRequestDto } from "./dto/support-request.dto";
import { TrackRequestDto } from "./dto/track-request.dto";
import { UpdateRequestDto } from "./dto/update-request.dto";
import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as ratingResponse from "./response/response.rating.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as trackResponse from "./response/response.track.json";
import * as updateResponse from "./response/response.update.json";
import * as cancellationResponse from "./response/response.cancellation_reasons.json";
import * as ratingCategories from "./response/response.rating_categories.json";

@Injectable()
export class UmtcApiService implements MobilityApiInterface {
    search = function (searchRequest: SearchRequestDto) {
        return searchResponse;
    };
    select = function (selectRequestDto: SelectReqDto) {
        return selectResponse;
    };
    init = function (initRequestDto: InitRequestDto) {
        return initResponse;
    };
    confirm = function (confirmRequestDto: ConfirmRequestDto) {
        return confirmResponse;
    };
    status = function (statusRequestDto: StatusRequestDto) {
        return statusResonse;
    };
    track = function (trackRequest: TrackRequestDto) {
        return trackResponse;
    };
    cancel = function (cancelRequest: CancelRequestDto) {
        return cancelResponse;
    };
    update = function (updateRequest: UpdateRequestDto) {
        return updateResponse;
    };
    rating = function (ratingRequest: RatingRequestDto) {
        return ratingResponse;
    };
    support = function (supportRequest: SupportRequestDto) {
        return supportResponse;
    };
    cancellationReasons = function () {
        return cancellationResponse;
    };
    ratingCategories = function () {
        return ratingCategories;
    };
}
