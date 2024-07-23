import { DentRequestDto } from "./dto/request.dto";

export interface DentApiInterface {
    search: (dentRequestDto: DentRequestDto) => any;
    select: (dentRequestDto: DentRequestDto) => any;
    init: (dentRequestDto: DentRequestDto) => any;
    confirm: (dentRequestDto: DentRequestDto) => any;
    status: (dentRequestDto: DentRequestDto) => any;
    track: (dentRequestDto: DentRequestDto) => any;
    cancel: (dentRequestDto: DentRequestDto) => any;
    update: (dentRequestDto: DentRequestDto) => any;
    rating: (dentRequestDto: DentRequestDto) => any;
    support: (dentRequestDto: DentRequestDto) => any;
    cancellationReasons: (dentRequestDto: DentRequestDto) => any;
    ratingCategories: (dentRequestDto: DentRequestDto) => any;
}
