import { CityOfLightClientDTO } from "./dto/cityOfLight.dto";

export interface CityOfLightApiInterface {
    search: (request: CityOfLightClientDTO) => any;
    select: (request: CityOfLightClientDTO) => any;
    init: (request: CityOfLightClientDTO) => any;
    confirm: (request: CityOfLightClientDTO) => any;
    status: (request: CityOfLightClientDTO) => any;
    cancel: (request: CityOfLightClientDTO) => any;
    support: (request: CityOfLightClientDTO) => any;
    rating: (request: CityOfLightClientDTO) => any;
    update: (request: CityOfLightClientDTO) => any;
    track: (request: CityOfLightClientDTO) => any;
}
