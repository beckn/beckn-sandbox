import { Injectable } from '@nestjs/common';
import { BPP_ID, BPP_URI } from "../common/constants";
import { CityOfLightApiInterface } from "./city-of-light-api.interface"
import { CityOfLightClientDTO } from './dto/cityOfLight.dto';
import * as CancelResponse from "./response/cancel.response.json";
import * as SearchResponse from "./response/search.response.json";
import * as SelectResponse from "./response/select.response.json";
import * as ConfirmResponse from "./response/confirm.response.json";
import * as RatingResponse from "./response/rating.response.json";
import * as SupportResponse from "./response/support.response.json";
import * as InitResponse from "./response/init.response.json";
import * as StatusResponse from "./response/status.response.json";
import * as UpdateResponse from "./response/update.response.json";
import { v4 as uuid_v4 } from "uuid";

@Injectable()
export class CityOfLightService implements CityOfLightApiInterface {
    search = (request: CityOfLightClientDTO) => {
        SearchResponse.context.bpp_id = BPP_ID;
        SearchResponse.context.bpp_uri = BPP_URI;
        SearchResponse.context.bap_id = request.context.bap_id;
        SearchResponse.context.bap_uri = request.context.bap_uri;
        return SearchResponse;
    };
    select = (request: CityOfLightClientDTO) => {
        SelectResponse.context.bpp_id = BPP_ID;
        SelectResponse.context.bpp_uri = BPP_URI;
        SelectResponse.context.bap_id = request.context.bap_id;
        SelectResponse.context.bap_uri = request.context.bap_uri;
        return SelectResponse;
    };
    init = (request: CityOfLightClientDTO) => {
        InitResponse.context.bpp_id = BPP_ID;
        InitResponse.context.bpp_uri = BPP_URI;
        InitResponse.context.bap_id = request.context.bap_id;
        InitResponse.context.bap_uri = request.context.bap_uri;
        return InitResponse;
    };
    confirm = (request: CityOfLightClientDTO) => {
        ConfirmResponse.context.bpp_id = BPP_ID;
        ConfirmResponse.context.bpp_uri = BPP_URI;
        ConfirmResponse.context.bap_id = request.context.bap_id;
        ConfirmResponse.context.bap_uri = request.context.bap_uri;
        ConfirmResponse.message.order.id = uuid_v4();
        return ConfirmResponse;
    };
    status = (request: CityOfLightClientDTO) => {
        StatusResponse.context.bpp_id = BPP_ID;
        StatusResponse.context.bpp_uri = BPP_URI;
        StatusResponse.context.bap_id = request.context.bap_id;
        StatusResponse.context.bap_uri = request.context.bap_uri;
        StatusResponse.message.order.id = request?.message?.order_id;
        return StatusResponse;
    };
    cancel = (request: CityOfLightClientDTO) => {
        CancelResponse.context.bpp_id = BPP_ID;
        CancelResponse.context.bpp_uri = BPP_URI;
        CancelResponse.context.bap_id = request.context.bap_id;
        CancelResponse.context.bap_uri = request.context.bap_uri;
        CancelResponse.message.order.id = request?.message?.order_id;
        return CancelResponse;
    };
    support = (request: CityOfLightClientDTO) => {
        SupportResponse.context.bpp_id = BPP_ID;
        SupportResponse.context.bpp_uri = BPP_URI;
        SupportResponse.context.bap_id = request.context.bap_id;
        SupportResponse.context.bap_uri = request.context.bap_uri;
        return SupportResponse;
    };
    rating = (request: CityOfLightClientDTO) => {
        RatingResponse.context.bpp_id = BPP_ID;
        RatingResponse.context.bpp_uri = BPP_URI;
        RatingResponse.context.bap_id = request.context.bap_id;
        RatingResponse.context.bap_uri = request.context.bap_uri;
        return RatingResponse;
    };
    update = (request: CityOfLightClientDTO) => {
        UpdateResponse.context.bpp_id = BPP_ID;
        UpdateResponse.context.bpp_uri = BPP_URI;
        UpdateResponse.context.bap_id = request.context.bap_id;
        UpdateResponse.context.bap_uri = request.context.bap_uri;
        return UpdateResponse;
    };
    track = (request: CityOfLightClientDTO) => {
        return null;
    };
}
