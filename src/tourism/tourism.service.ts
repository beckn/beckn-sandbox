import { response } from "express";
import { Injectable } from "@nestjs/common";
import { TourismClientDTO } from "./dto/tourism.dto";
import { BPP_ID, BPP_URI } from "../common/constants";
import { TourismApiInterface } from "./tourism-api.interface";
import * as CancelResponse from "./response/cancel.response.json";
import * as SearchResponse from "./response/search.response.json";
import * as SelectResponse from "./response/select.response.json";
import * as ConfirmResponse from "./response/confirm.response.json";
import * as RatingResponse from "./response/rating.response.json";
import * as SupportResponse from "./response/support.response.json";
import * as InitResponse from "./response/init.response.json";
import * as StatusResponse from "./response/status.response.json";
import * as UpdateResponse from "./response/update.response.json";
import * as TrackResponse from "./response/track.response.json";

@Injectable()
export class TourismService implements TourismApiInterface {
    search = (tourismRequest: TourismClientDTO) => {
        return SearchResponse;
    };
    select = (tourismRequest: TourismClientDTO) => {
        return SelectResponse;
    };
    init = (tourismRequest: TourismClientDTO) => {
        return InitResponse;
    };
    confirm = (tourismRequest: TourismClientDTO) => {
        return ConfirmResponse;
    };
    rating = (tourismRequest: TourismClientDTO) => {
        return RatingResponse;
    };
    status = (tourismRequest: TourismClientDTO) => {
        return StatusResponse;
    };
    cancel = (tourismRequest: TourismClientDTO) => {
        return CancelResponse;
    };
    support = (tourismRequest: TourismClientDTO) => {
        return SupportResponse;
    };
    update = (tourismRequest: TourismClientDTO) => {
        return UpdateResponse;
    };
    track = (tourismRequest: TourismClientDTO) => {
        return TrackResponse;
    };
}
