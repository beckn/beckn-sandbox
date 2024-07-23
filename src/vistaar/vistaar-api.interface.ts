import { Vistaar_Request_DTO } from "./request.dto";

export interface VistaarApiInterface {
    search: (request: Vistaar_Request_DTO) => any;
    support: (request: Vistaar_Request_DTO) => any;
    rating: (request: Vistaar_Request_DTO) => any;
}
