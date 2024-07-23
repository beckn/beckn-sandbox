import { Injectable } from "@nestjs/common";
import { Industry4_0ApiInterface } from "../industry-4.0-api.interface";
import { Industry_4_0_Request_DTO } from "../dto/request.dto";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
//select
import * as StatusResponseStatusDispatched from "./response/response.status-dispatched.json";
import * as StatusResponseStatusPrinterSetup from "./response/response.status-printer-setup.json";
import * as StatusResponseStatusPrinting from "./response/response.status-printing.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import * as RatingResponse from "./response/response.rating.json";
import * as SelectResponse1 from "./response/response.select-1.json";
import * as SelectResponse2 from "./response/response.select-2.json";

@Injectable()
export class Three_D_PrintingService implements Industry4_0ApiInterface {
    search = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return SearchResponse;
    };
    select = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        const Select1 = industry_4_0_Request_DTO?.message?.order?.tags?.find((tag: any) => tag?.descriptor?.name === "select-1");

        const Select2 = industry_4_0_Request_DTO?.message?.order?.tags?.find((tag: any) => tag?.descriptor?.name === "select-2");

        if (Select1) {
            return SelectResponse1;
        }
        if (Select2) {
            return SelectResponse2;
        }
    };
    init = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return InitResponse;
    };
    confirm = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return ConfirmResponse;
    };
    status = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        if (industry_4_0_Request_DTO?.context?.key === "dispatched") {
            return StatusResponseStatusDispatched;
        } else if (industry_4_0_Request_DTO?.context?.key === "printer-setup") {
            return StatusResponseStatusPrinterSetup;
        }
        return StatusResponseStatusDispatched;
    };
    cancel = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return CancelResponse;
    };
    update = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return UpdateResponse;
    };
    support = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return SupportResponse;
    };
    rating = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return RatingResponse;
    };
    track = (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        return TrackResponse;
    };
    getForm = () => {
        return {};
    };
    submitForm = (request: any) => {
        return {};
    };
}
