import { DSNPClientDTO } from "./dto/dsnp.dto";

export interface DSNPApiInterface {
    search: (dsnpRequest: DSNPClientDTO) => any;
    select: (dsnpRequest: DSNPClientDTO) => any;
    init: (dsnpRequest: DSNPClientDTO) => any;
    confirm: (dsnpRequest: DSNPClientDTO) => any;
    status: (dsnpRequest: DSNPClientDTO) => any;
    cancel: (dsnpRequest: DSNPClientDTO) => any;
    support: (dsnpRequest: DSNPClientDTO) => any;
    rating: (dsnpRequest: DSNPClientDTO) => any;
    update: (dsnpRequest: DSNPClientDTO) => any;
    track: (dsnpRequest: DSNPClientDTO) => any;
}
