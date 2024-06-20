import { response } from "express";
import { Injectable } from "@nestjs/common";
import { UMTCClientDTO } from "./dto/umtc.dto";
import { BPP_ID, BPP_URI } from "../common/constants";
import { UMTCApiInterface } from "./umtc-api.interface";
import * as CancelResponse from "./response/response.cancel.json";
import * as SearchResponse from "./response/response.search.json";
import * as SelectResponse from "./response/response.select.json";
import * as ConfirmResponse from "./response/response.confirm-notpaid.json";
import * as InitResponse from "./response/response.init-bankdetails.json";
import * as StatusResponse from "./response/response.status-entered-paidarea.json";

@Injectable()
export class UMTCService implements UMTCApiInterface {
    search = (umtcRequest: UMTCClientDTO) => {
        return SearchResponse;
    };
    select = (umtcRequest: UMTCClientDTO) => {
        return SelectResponse;
    };
    init = (umtcRequest: UMTCClientDTO) => {
        return InitResponse;
    };
    confirm = (umtcRequest: UMTCClientDTO) => {
        return ConfirmResponse;
    };
    status = (umtcRequest: UMTCClientDTO) => {
        return StatusResponse;
    };
    cancel = (umtcRequest: UMTCClientDTO) => {
        return CancelResponse;
    };
}
