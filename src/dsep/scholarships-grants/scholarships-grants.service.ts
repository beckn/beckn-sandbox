import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as InitResponse from "./response/response.initPersonalDetails.json";
import * as SearchOnGenderResponse from "./response/response.searchOnGender.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as RatingResponse from "./response/response.rating.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import { v4 as uuid_v4 } from "uuid";
@Injectable()
export class ScholarshipsGrantsService implements DSEPApiInterface {
    select = (dsepRequestDto: DSEPRequestDto) => {
        return SelectResponse;
    };
    init = (dsepRequestDto: DSEPRequestDto) => {
        return InitResponse;
    };
    confirm = (dsepRequestDto: DSEPRequestDto) => {
        ConfirmResponse.message.order.id = uuid_v4();
        console.log("ConfirmResponse======>", ConfirmResponse);
        return ConfirmResponse;
    };
    status = (dsepRequestDto: DSEPRequestDto) => {
        StatusResponse.message.order.id = dsepRequestDto?.message?.order_id;
        console.log("StatusResponse======>", StatusResponse);
        return StatusResponse;
    };
    search = (dsepRequestDto: DSEPRequestDto) => {
        const { message } = dsepRequestDto;
        const isSearchOnScholarshipName = !!message?.intent?.item?.descriptor?.name;
        const isSearchOnGender = !!message?.intent?.fulfillment?.customer?.person?.gender;
        const isSearchOnCourseCategory = !!message?.intent?.provider?.categories?.length;
        
        return SearchOnGenderResponse;
    };
    cancel = (dsepRequestDto: DSEPRequestDto) => {
        return CancelResponse;
    };
    track = (dsepRequestDto: DSEPRequestDto) => {
        return TrackResponse;
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
}
