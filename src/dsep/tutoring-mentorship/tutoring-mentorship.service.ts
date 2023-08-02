import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SearchResponse from "./response/response.search.json";
import * as SelectResponse from "./response/response.select.json";
import * as InitResponse from "./response/response.init.json";
import * as StatusResponse from "./response/response.status.json";

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
        return {};
    };
}
