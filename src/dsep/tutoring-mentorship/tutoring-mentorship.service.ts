import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SearchResponse from "./response/response.search.json";
import * as SelectResponse from "./response/response.select.json";
import * as InitResponse from "./response/response.init.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as RatingResponse from "./response/response.rating.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";

@Injectable()
export class TutoringMentorshipService implements DSEPApiInterface {
    search = (dsepRequestDto: DSEPRequestDto) => {
        return SearchResponse;
    };
    select = (dsepRequestDto: DSEPRequestDto) => {
        return SelectResponse;
    };
    init = (dsepRequestDto: DSEPRequestDto) => {
        return InitResponse;
    };
    confirm = (dsepRequestDto: DSEPRequestDto) => {
        return ConfirmResponse;
    };
    status = (dsepRequestDto: DSEPRequestDto) => {
        return StatusResponse;
    };
    cancel = (dsepRequestDto: DSEPRequestDto) => {
        return CancelResponse;
    };
    update = (dsepRequestDto: DSEPRequestDto) => {
        return UpdateResponse;
    };
    support = (dsepRequestDto: DSEPRequestDto) => {
        return SupportResponse;
    };
    rating = (dsepRequestDto: DSEPRequestDto) => {
        return RatingResponse;
    };
    track = (dsepRequestDto: DSEPRequestDto) => {
        return TrackResponse;
    };
}
