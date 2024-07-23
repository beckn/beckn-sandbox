import { response } from "express";
import { Injectable } from "@nestjs/common";
import { LogisticClientDTO } from "./dto/logistic.dto";
import { BPP_ID, BPP_URI } from "../common/constants";
import { LogisticApiInterface } from "./logistic-api.interface";
import * as CancelResponse from "./response/response.cancel.json";
import * as SearchResponse from "./response/response.search.json";
import * as SelectResponse from "./response/response.select.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as RatingResponse from "./response/response.rating.json";
import * as SupportResponse from "./response/respose.support.json";
import * as InitResponse from "./response/response.init.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/respose.update.json";
import * as TrackResponse from "./response/respose.track.json";

@Injectable()
export class LogisticService implements LogisticApiInterface {
    search = (logisticRequest: LogisticClientDTO) => {
        return SearchResponse;
    };
    select = (logisticRequest: LogisticClientDTO) => {
        return SelectResponse;
    };
    init = (logisticRequest: LogisticClientDTO) => {
        return InitResponse;
    };
    confirm = (logisticRequest: LogisticClientDTO) => {
        return ConfirmResponse;
    };
    rating = (logisticRequest: LogisticClientDTO) => {
        return RatingResponse;
    };
    status = (logisticRequest: LogisticClientDTO) => {
        return StatusResponse;
    };
    cancel = (logisticRequest: LogisticClientDTO) => {
        return CancelResponse;
    };
    support = (logisticRequest: LogisticClientDTO) => {
        return SupportResponse;
    };
    update = (logisticRequest: LogisticClientDTO) => {
        return UpdateResponse;
    };
    track = (logisticRequest: LogisticClientDTO) => {
        return TrackResponse;
    };
}
