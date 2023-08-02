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
            console.log("Here");
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
        return ConfirmResponse;
    };
    status = (dsepRequestDto: DSEPRequestDto) => {
        return StatusResponse;
    };
    cancel = (dsepRequestDto: DSEPRequestDto) => {
        return {};
    };
}
