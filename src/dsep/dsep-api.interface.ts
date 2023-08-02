import { DSEPRequestDto } from "./dto/request.dto";

export interface DSEPApiInterface {
    search: (dsepRequest: DSEPRequestDto) => any;
    select: (dsepRequest: DSEPRequestDto) => any;
    init: (dsepRequest: DSEPRequestDto) => any;
    confirm: (dsepRequest: DSEPRequestDto) => any;
    status: (dsepRequest: DSEPRequestDto) => any;
    cancel: (dsepRequest: DSEPRequestDto) => any;
}
