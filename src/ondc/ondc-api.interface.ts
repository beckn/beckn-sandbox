import { ONDCClientDTO } from "./dto/ondc.dto";

export interface ONDCApiInterface {
    search: (ondcRequest: ONDCClientDTO) => any;
    select: (ondcRequest: ONDCClientDTO) => any;
    init: (ondcRequest: ONDCClientDTO) => any;
    confirm: (ondcRequest: ONDCClientDTO) => any;
    status: (ondcRequest: ONDCClientDTO) => any;
    cancel: (ondcRequest: ONDCClientDTO) => any;
    support: (ondcRequest: ONDCClientDTO) => any;
    rating: (ondcRequest: ONDCClientDTO) => any;
    update: (ondcRequest: ONDCClientDTO) => any;
    track: (ondcRequest: ONDCClientDTO) => any;
}
