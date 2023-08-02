import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as InitResponse from "./response/response.init.json";
import * as SearchOnGenderResponse from "./response/response.searchOnGender.json";
import * as SearchOnGenderAndCourseResponse from "./response/response.searchOnGenderAndCourse.json";
import * as SearchOnScholarshipNameResponse from "./response/response.searchOnScholarshipName.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";

@Injectable()
export class ScholarshipsGrantsService implements DSEPApiInterface {
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
    search = (dsepRequestDto: DSEPRequestDto) => {
        const { message } = dsepRequestDto;
        const isSearchOnScholarshipName = !!message?.intent?.item?.descriptor?.name;
        const isSearchOnGender = !!message?.intent?.fulfillment?.customer?.person?.gender;
        const isSearchOnCourseCategory = !!message?.intent?.provider?.categories?.length;

        if (isSearchOnScholarshipName) {
            console.log("HEre");
            return SearchOnScholarshipNameResponse;
        }
        if (isSearchOnGender && !isSearchOnCourseCategory) {
            console.log("HEre");
            return SearchOnGenderResponse;
        }
        if (isSearchOnGender && isSearchOnCourseCategory) {
            console.log("HEre");
            return SearchOnGenderAndCourseResponse;
        }
    };
    cancel = (dsepRequestDto: DSEPRequestDto) => {
        return {};
    };
}
