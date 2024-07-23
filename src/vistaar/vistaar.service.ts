import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import { VistaarApiInterface } from "./vistaar-api.interface";
import { Vistaar_Request_DTO } from "./request.dto";
import * as SearchResponse from "./response/on_search.response.json";
import * as RatingResponse from "./response/on_rating.response.json";
import * as SupportResponse from "./response/on_support.response.json";

dotenv.config();

@Injectable()
export class VistaarService implements VistaarApiInterface {
    search = (vistaar_Request_DTO: Vistaar_Request_DTO) => {
        return SearchResponse;
    };

    support = (vistaar_Request_DTO: Vistaar_Request_DTO) => {
        return SupportResponse;
    };
    rating = (vistaar_Request_DTO: Vistaar_Request_DTO) => {
        return RatingResponse;
    };
}
