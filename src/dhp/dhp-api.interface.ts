import { DHPRequestDto } from "./dto/request.dto";

export interface DHPApiInterface {
    search: (dHPRequestDto: DHPRequestDto) => any;
    select: (dHPRequestDto: DHPRequestDto) => any;
    init: (dHPRequestDto: DHPRequestDto) => any;
    confirm: (dHPRequestDto: DHPRequestDto) => any;
    status: (dHPRequestDto: DHPRequestDto) => any;
    track: (dHPRequestDto: DHPRequestDto) => any;
    cancel: (dHPRequestDto: DHPRequestDto) => any;
    update: (dHPRequestDto: DHPRequestDto) => any;
    rating: (dHPRequestDto: DHPRequestDto) => any;
    support: (dHPRequestDto: DHPRequestDto) => any;
}
