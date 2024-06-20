import { response } from "express";
import { Injectable } from "@nestjs/common";
import { ONDCClientDTO } from "./dto/ondc.dto";
import { BPP_ID, BPP_URI } from "../common/constants";
import { ONDCApiInterface } from "./ondc-api.interface";
import * as CancelResponse from "./response/response.cancel-by-driver.json";
import * as SearchResponse from "./response/response.search-multiple-provider.json";
import * as SelectResponse from "./response/response.select.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as RatingResponse from "./response/response.rating.json";
import * as SupportResponse from "./response/response.support.json";
import * as InitResponse from "./response/response.init.json";
import * as StatusResponse from "./response/response.status-driver-an-route.json";
import * as UpdateResponse from "./response/response.update.json";
import * as TrackResponse from "./response/response.track.json";

@Injectable()
export class ONDCService implements ONDCApiInterface {
    search = (ondcRequest: ONDCClientDTO) => {
        return SearchResponse;
    };
    select = (ondcRequest: ONDCClientDTO) => {
        return SelectResponse;
    };
    init = (ondcRequest: ONDCClientDTO) => {
        return InitResponse;
    };
    confirm = (ondcRequest: ONDCClientDTO) => {
        return ConfirmResponse;
    };
    rating = (ondcRequest: ONDCClientDTO) => {
        return RatingResponse;
    };
    status = (ondcRequest: ONDCClientDTO) => {
        return StatusResponse;
    };
    cancel = (ondcRequest: ONDCClientDTO) => {
        return CancelResponse;
    };
    support = (ondcRequest: ONDCClientDTO) => {
        return SupportResponse;
    };
    update = (ondcRequest: ONDCClientDTO) => {
        return UpdateResponse;
    };
    track = (ondcRequest: ONDCClientDTO) => {
        return TrackResponse;
    };
}
