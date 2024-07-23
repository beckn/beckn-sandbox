import { TourismClientDTO } from "./dto/tourism.dto";

export interface TourismApiInterface {
    search: (tourismRequest: TourismClientDTO) => any;
    select: (tourismRequest: TourismClientDTO) => any;
    init: (tourismRequest: TourismClientDTO) => any;
    confirm: (tourismRequest: TourismClientDTO) => any;
    status: (tourismRequest: TourismClientDTO) => any;
    cancel: (tourismRequest: TourismClientDTO) => any;
    support: (tourismRequest: TourismClientDTO) => any;
    rating: (tourismRequest: TourismClientDTO) => any;
    update: (tourismRequest: TourismClientDTO) => any;
    track: (tourismRequest: TourismClientDTO) => any;
}
