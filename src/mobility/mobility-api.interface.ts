import { MobilityRequestDto } from "./dto/request.dto";

export interface MobilityApiInterface {
    search: (mobilityRequestDto: MobilityRequestDto) => any;
    select: (mobilityRequestDto: MobilityRequestDto) => any;
    init: (mobilityRequestDto: MobilityRequestDto) => any;
    confirm: (mobilityRequestDto: MobilityRequestDto) => any;
    status: (mobilityRequestDto: MobilityRequestDto) => any;
    track: (mobilityRequestDto: MobilityRequestDto) => any;
    cancel: (mobilityRequestDto: MobilityRequestDto) => any;
    update: (mobilityRequestDto: MobilityRequestDto) => any;
    rating: (mobilityRequestDto: MobilityRequestDto) => any;
    support: (mobilityRequestDto: MobilityRequestDto) => any;
    cancellationReasons: (mobilityRequestDto: MobilityRequestDto) => any;
    ratingCategories: (mobilityRequestDto: MobilityRequestDto) => any;
}
