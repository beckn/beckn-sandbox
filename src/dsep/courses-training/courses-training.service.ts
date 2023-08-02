import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as SearchResponse from "./response/response.searchByCategorySchool.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SelectResponse from "./response/response.select.json";

@Injectable()
export class CoursesTrainingService implements DSEPApiInterface {
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
        return {};
    };
    cancel = (dsepRequestDto: DSEPRequestDto) => {
        return {};
    };
}
