import { Industry_4_0_Request_DTO } from "./dto/request.dto";

export interface Industry4_0ApiInterface {
    search: (dsepRequest: Industry_4_0_Request_DTO) => any;
    select: (dsepRequest: Industry_4_0_Request_DTO) => any;
    init: (dsepRequest: Industry_4_0_Request_DTO) => any;
    confirm: (dsepRequest: Industry_4_0_Request_DTO) => any;
    status: (dsepRequest: Industry_4_0_Request_DTO) => any;
    cancel: (dsepRequest: Industry_4_0_Request_DTO) => any;
    support: (dsepRequest: Industry_4_0_Request_DTO) => any;
    rating: (dsepRequest: Industry_4_0_Request_DTO) => any;
    update: (dsepRequest: Industry_4_0_Request_DTO) => any;
    track: (dsepRequest: Industry_4_0_Request_DTO) => any;
    getForm: () => any;
    submitForm: (request: any) => any;
}
