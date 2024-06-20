import { UMTCClientDTO } from "./dto/umtc.dto";

export interface UMTCApiInterface {
    search: (umtcRequest: UMTCClientDTO) => any;
    select: (umtcRequest: UMTCClientDTO) => any;
    init: (umtcRequest: UMTCClientDTO) => any;
    confirm: (umtcRequest: UMTCClientDTO) => any;
    status: (umtcRequest: UMTCClientDTO) => any;
    cancel: (umtcRequest: UMTCClientDTO) => any;
    support: (umtcRequest: UMTCClientDTO) => any;
    rating: (umtcRequest: UMTCClientDTO) => any;
    update: (umtcRequest: UMTCClientDTO) => any;
    track: (umtcRequest: UMTCClientDTO) => any;
}
