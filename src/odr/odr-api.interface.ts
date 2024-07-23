import { ODRClientDTO } from "./dto/odr.dto";

export interface ODRApiInterface {
    search: (odrRequest: ODRClientDTO) => any;
    select: (odrRequest: ODRClientDTO) => any;
    init: (odrRequest: ODRClientDTO) => any;
    confirm: (odrRequest: ODRClientDTO) => any;
    status: (odrRequest: ODRClientDTO) => any;
    cancel: (odrRequest: ODRClientDTO) => any;
    support: (odrRequest: ODRClientDTO) => any;
    rating: (odrRequest: ODRClientDTO) => any;
    update: (odrRequest: ODRClientDTO) => any;
    track: (odrRequest: ODRClientDTO) => any;
}
