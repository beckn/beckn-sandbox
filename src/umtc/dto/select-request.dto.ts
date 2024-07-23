import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class SelectReqDto extends MobilityRequestDto {
    message: {
        order: {
            items: [{ id: string }];
            fulfillment: {
                start: {
                    location: {
                        gps: string;
                        address?: {
                            ward: string;
                            country: string;
                            building: string;
                            state: string;
                            city: string;
                            locality: string;
                            door: string;
                            area_code: string;
                            street: string;
                        };
                    };
                };
                end: {
                    location: {
                        gps: string;
                        address?: {
                            ward: string;
                            country: string;
                            building: string;
                            state: string;
                            city: string;
                            locality: string;
                            door: string;
                            area_code: string;
                            street: string;
                        };
                    };
                };
            };
            customer?: {
                person: {
                    tags: {
                        "groups/1/descriptor/name": string;
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/code": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                    };
                };
            };
        };
    };
}
