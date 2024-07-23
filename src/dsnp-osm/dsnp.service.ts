import { Injectable } from "@nestjs/common";
import { DSNPClientDTO } from "./dto/dsnp.dto";
import { DSNPApiInterface } from "./dsnp-api.interface";
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
export class DSNPService implements DSNPApiInterface {
    search = (dsnpRequest: DSNPClientDTO) => {
        return SearchResponse;
    };
    select = (dsnpRequest: DSNPClientDTO) => {
        return SelectResponse;
    };
    init = (dsnpRequest: DSNPClientDTO) => {
        return InitResponse;
    };
    confirm = (dsnpRequest: DSNPClientDTO) => {
        return ConfirmResponse;
    };
    rating = (dsnpRequest: DSNPClientDTO) => {
        return RatingResponse;
    };
    status = (dsnpRequest: DSNPClientDTO) => {
        return StatusResponse;
    };
    cancel = (dsnpRequest: DSNPClientDTO) => {
        return CancelResponse;
    };
    support = (dsnpRequest: DSNPClientDTO) => {
        return SupportResponse;
    };
    update = (dsnpRequest: DSNPClientDTO) => {
        return UpdateResponse;
    };
    track = (dsnpRequest: DSNPClientDTO) => {
        return TrackResponse;
    };
}
