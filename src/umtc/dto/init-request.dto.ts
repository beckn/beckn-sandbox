import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class InitRequestDto extends MobilityRequestDto {
    message: {
        order: {
            provider: {
                id: string;
            };
            items: [
                {
                    id: string;
                    fulfillment_id: string;
                    payment_id: string;
                },
            ];
            quote: {
                value: string;
                currency: string;
                breakup: [
                    {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    },
                    {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    },
                ];
            };
            fulfillment: {
                id: string;
                start: {
                    location: {
                        gps: string;
                        address: {
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
                        address: {
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
                agent: {
                    name: string;
                    rateable: string;
                    rating: string;
                };
                vehicle: {
                    category: string;
                };
            };
            payment: {
                id: string;
                type: string;
                collected_by: string;
            };
            customer: {
                person: {
                    name: string;
                    phone: string;
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
