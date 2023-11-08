import { Injectable } from "@nestjs/common";
import { ODRClientDTO } from "./dto/odr.dto";
import { ODRApiInterface } from "./odr-api.interface";
import * as CancelResponse from "./response/cancel.response.json";
import * as SearchResponse from "./response/search.response.json";
import * as SelectResponse from "./response/select.response.json";
import * as ConfirmResponse from "./response/confirm.response.json";
import * as RatingResponse from "./response/rating.response.json";
import * as SupportResponse from "./response/support.response.json";

@Injectable()
export class ODRService implements ODRApiInterface {
    search = (odrRequest: ODRClientDTO) => {
        return SearchResponse;
    };
    select = (odrRequest: ODRClientDTO) => {
        return SelectResponse;
    };
    init = (odrRequest: ODRClientDTO) => {
        // resolved
        return {};
    };
    confirm = (odrRequest: ODRClientDTO) => {
        return ConfirmResponse;
    };
    status = (odrRequest: ODRClientDTO) => {
        return {};
    };
    cancel = (odrRequest: ODRClientDTO) => {
        return CancelResponse;
    };
    support = (odrRequest: ODRClientDTO) => {
        return SupportResponse;
    };
    rating = (odrRequest: ODRClientDTO) => {
        return RatingResponse;
    };
    update = (odrRequest: ODRClientDTO) => {
        return {};
    };
}
