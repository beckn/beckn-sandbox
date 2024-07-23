import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class ConfirmRequestDto extends MobilityRequestDto {
    message: {
        order: {
            id: string;
            provider: {
                id: string;
                descriptor: {
                    name: string;
                };
            };
            items: [
                {
                    id: string;
                    descriptor: {
                        name: string;
                        code: string;
                    };
                    tags: {
                        "groups/1/descriptor/name": string;
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": "661 m";
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
                        "groups/3/list/2/value": string;
                    };
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
            payment: {
                id: string;
                type: string;
                params: {
                    amount: string;
                    currency: string;
                    transaction_status: string;
                };
            };
        };
    };
}
