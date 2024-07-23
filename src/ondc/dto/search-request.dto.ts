import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class SearchRequestDto extends MobilityRequestDto {
    message: {
        intent: {
            fulfillment: {
                start: {
                    location: {
                        gps: string;
                    };
                };
                end: {
                    location: {
                        gps: string;
                    };
                };
            };
            customer?: {
                person: {
                    tags: {
                        "groups/1/descriptor/name": string;
                        "groups/1/descriptor/code": string;
                        "groups/1/display": boolean;
                        "groups/1/list/1/descriptor/code": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                    };
                };
            };
        };
    };
}
