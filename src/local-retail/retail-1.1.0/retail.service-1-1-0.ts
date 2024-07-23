import { Injectable } from "@nestjs/common";
import { LocalRetail110ApiInterface } from "../local-retail-api.interface";
import { Local_Retail110_Request_DTO } from "../dto/1-1-0/local-retail-1-1-0-request.dto";
import { BPP_ID, BPP_URI } from "../../common/constants";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import * as RatingResponse from "./response/response.rating.json";

@Injectable()
export class RetailService110 implements LocalRetail110ApiInterface {
    search = (request_DTO: Local_Retail110_Request_DTO) => {
        SearchResponse.context.bpp_id = BPP_ID;
        SearchResponse.context.bpp_uri = BPP_URI;
        return SearchResponse;
    };
    select = (request_DTO: Local_Retail110_Request_DTO) => {
        SelectResponse.context.bpp_id = BPP_ID;
        SelectResponse.context.bpp_uri = BPP_URI;
        return SelectResponse;
    };
    init = (request_DTO: Local_Retail110_Request_DTO) => {
        InitResponse.context.bpp_id = BPP_ID;
        InitResponse.context.bpp_uri = BPP_URI;
        return InitResponse;
    };
    confirm = (request_DTO: Local_Retail110_Request_DTO) => {
        ConfirmResponse.context.bpp_id = BPP_ID;
        ConfirmResponse.context.bpp_uri = BPP_URI;
        return ConfirmResponse;
    };
    status = (request_DTO: Local_Retail110_Request_DTO) => {
        StatusResponse.context.bpp_id = BPP_ID;
        StatusResponse.context.bpp_uri = BPP_URI;
        return StatusResponse;
    };
    cancel = (request_DTO: Local_Retail110_Request_DTO) => {
        CancelResponse.context.bpp_id = BPP_ID;
        CancelResponse.context.bpp_uri = BPP_URI;
        return CancelResponse;
    };
    update = (request_DTO: Local_Retail110_Request_DTO) => {
        UpdateResponse.context.bpp_id = BPP_ID;
        UpdateResponse.context.bpp_uri = BPP_URI;
        return UpdateResponse;
    };
    support = (request_DTO: Local_Retail110_Request_DTO) => {
        SupportResponse.context.bpp_id = BPP_ID;
        SupportResponse.context.bpp_uri = BPP_URI;
        return SupportResponse;
    };
    rating = (request_DTO: Local_Retail110_Request_DTO) => {
        RatingResponse.context.bpp_id = BPP_ID;
        RatingResponse.context.bpp_uri = BPP_URI;
        return RatingResponse;
    };
    track = (request_DTO: Local_Retail110_Request_DTO) => {
        TrackResponse.context.bpp_id = BPP_ID;
        TrackResponse.context.bpp_uri = BPP_URI;
        return TrackResponse;
    };
}
