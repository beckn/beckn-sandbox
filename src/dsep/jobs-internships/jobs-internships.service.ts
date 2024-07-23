import { Injectable } from "@nestjs/common";
import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SearchWithTitleAndLocationReponse from "./response/response.searchWithTitleAndLocation.json";
import * as SearchWithDeveloperTitle from "./response/response.searchWithTitleDeveloper.json";
import * as SearchWithTitleEngineer from "./response/response.searchWithTitleEngineer.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";
import * as InitResponse from "./response/response.init.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as RatingResponse from "./response/response.rating.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import { v4 as uuid_v4 } from "uuid";
@Injectable()
export class JobsInternshipsService implements DSEPApiInterface {
    search = (dsepRequestDto: DSEPRequestDto) => {
        const { message } = dsepRequestDto;
        const isSearchWithTitleEngineer = message?.intent?.item?.descriptor?.name === "Engineer";
        const isSearchWithTitleAndLocation = !!message?.intent?.item?.descriptor?.name && !!message?.intent?.item?.location_id;

        if (isSearchWithTitleEngineer && !isSearchWithTitleAndLocation) {
            return SearchWithTitleEngineer;
        }
        if (isSearchWithTitleAndLocation) {
            return SearchWithTitleAndLocationReponse;
        }
        return SearchWithDeveloperTitle;
    };
    select = (dsepRequestDto: DSEPRequestDto) => {
        return SelectResponse;
    };
    init = (dsepRequestDto: DSEPRequestDto) => {
        return InitResponse;
    };
    confirm = (dsepRequestDto: DSEPRequestDto) => {
        ConfirmResponse.message.order.id = uuid_v4();
        console.log("confirmResponse=====>", ConfirmResponse);
        return ConfirmResponse;
    };
    status = (dsepRequestDto: DSEPRequestDto) => {
        StatusResponse.message.order.id = dsepRequestDto?.message?.order_id;
        console.log("confirmResponse=====>", StatusResponse);
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
