import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class UpdateRequestDto extends MobilityRequestDto {
    message: {
        update_target: string;
        order: {
            id: string;
            state: string;
            provider: {
                id: string;
                locations: [
                    {
                        id: string;
                    },
                ];
            };
            items: [
                {
                    id: string;
                    parent_item_id: string;
                    descriptor: {
                        name: string;
                        code: string;
                        symbol: string;
                        short_desc: string;
                        long_desc: string;
                        images: [string];
                        audio: string;
                        "3d_render": string;
                    };
                    price: {
                        currency: string;
                        value: string;
                        estimated_value: string;
                        computed_value: string;
                        listed_value: string;
                        offered_value: string;
                        minimum_value: string;
                        maximum_value: string;
                    };
                    category_id: string;
                    fulfillment_id: string;
                    rating: string;
                    location_id: string;
                    time: {
                        label: string;
                        timestamp: string;
                        duration: string;
                        range: {
                            start: string;
                            end: string;
                        };
                        days: string;
                        schedule: {
                            frequency: string;
                            holidays: [string];
                            times: [string];
                        };
                    };
                    rateable: string;
                    matched: string;
                    related: string;
                    recommended: string;
                    tags: {
                        additionalProp1: string;
                        additionalProp2: string;
                        additionalProp3: string;
                    };
                    quantity: {
                        count: string;
                        measure: {
                            type: string;
                            value: string;
                            estimated_value: string;
                            computed_value: string;
                            range: {
                                min: string;
                                max: string;
                            };
                            unit: string;
                        };
                    };
                },
            ];
            add_ons: [
                {
                    id: string;
                },
            ];
            offers: [
                {
                    id: string;
                },
            ];
            documents: [
                {
                    url: string;
                    label: string;
                },
            ];
            billing: {
                name: string;
                organization: {
                    name: string;
                    cred: string;
                };
                address: {
                    door: string;
                    name: string;
                    building: string;
                    street: string;
                    locality: string;
                    ward: string;
                    city: string;
                    state: string;
                    country: string;
                    area_code: string;
                };
                email: string;
                phone: string;
                time: {
                    label: string;
                    timestamp: string;
                    duration: string;
                    range: {
                        start: string;
                        end: string;
                    };
                    days: string;
                    schedule: {
                        frequency: string;
                        holidays: [string];
                        times: [string];
                    };
                };
                tax_number: string;
                created_at: string;
                updated_at: string;
            };
            fulfillment: {
                id: string;
                type: string;
                provider_id: string;
                rating: string;
                state: {
                    descriptor: {
                        name: string;
                        code: string;
                        symbol: string;
                        short_desc: string;
                        long_desc: string;
                        images: [string];
                        audio: string;
                        "3d_render": string;
                    };
                    updated_at: string;
                    updated_by: string;
                };
                tracking: string;
                customer: {
                    person: {
                        name: string;
                        image: string;
                        dob: string;
                        gender: string;
                        cred: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                    contact: {
                        phone: string;
                        email: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                };
                agent: {
                    name: string;
                    image: string;
                    dob: string;
                    gender: string;
                    cred: string;
                    tags: {
                        additionalProp1: string;
                        additionalProp2: string;
                        additionalProp3: string;
                    };
                    phone: string;
                    email: string;
                    rateable: true;
                };
                person: {
                    name: string;
                    image: string;
                    dob: string;
                    gender: string;
                    cred: string;
                    tags: {
                        additionalProp1: string;
                        additionalProp2: string;
                        additionalProp3: string;
                    };
                };
                contact: {
                    phone: string;
                    email: string;
                    tags: {
                        additionalProp1: string;
                        additionalProp2: string;
                        additionalProp3: string;
                    };
                };
                vehicle: {
                    category: string;
                    capacity: string;
                    make: string;
                    model: string;
                    size: string;
                    variant: string;
                    color: string;
                    energy_type: string;
                    registration: string;
                };
                start: {
                    location: {
                        id: string;
                        descriptor: {
                            name: string;
                            code: string;
                            symbol: string;
                            short_desc: string;
                            long_desc: string;
                            images: [string];
                            audio: string;
                            "3d_render": string;
                        };
                        gps: string;
                        address: {
                            door: string;
                            name: string;
                            building: string;
                            street: string;
                            locality: string;
                            ward: string;
                            city: string;
                            state: string;
                            country: string;
                            area_code: string;
                        };
                        station_code: string;
                        city: {
                            name: string;
                            code: string;
                        };
                        country: {
                            name: string;
                            code: string;
                        };
                        circle: {
                            gps: string;
                            radius: {
                                type: string;
                                value: string;
                                estimated_value: string;
                                computed_value: string;
                                range: {
                                    min: string;
                                    max: string;
                                };
                                unit: string;
                            };
                        };
                        polygon: string;
                        "3dspace": string;
                        time: {
                            label: string;
                            timestamp: string;
                            duration: string;
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                frequency: string;
                                holidays: [string];
                                times: [string];
                            };
                        };
                    };
                    time: {
                        label: string;
                        timestamp: string;
                        duration: string;
                        range: {
                            start: string;
                            end: string;
                        };
                        days: string;
                        schedule: {
                            frequency: string;
                            holidays: [string];
                            times: [string];
                        };
                    };
                    instructions: {
                        name: string;
                        code: string;
                        symbol: string;
                        short_desc: string;
                        long_desc: string;
                        images: [string];
                        audio: string;
                        "3d_render": string;
                    };
                    contact: {
                        phone: string;
                        email: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                    person: {
                        name: string;
                        image: string;
                        dob: string;
                        gender: string;
                        cred: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                    authorization: {
                        type: string;
                        token: string;
                        valid_from: string;
                        valid_to: string;
                        status: string;
                    };
                };
                end: {
                    location: {
                        id: string;
                        descriptor: {
                            name: string;
                            code: string;
                            symbol: string;
                            short_desc: string;
                            long_desc: string;
                            images: [string];
                            audio: string;
                            "3d_render": string;
                        };
                        gps: string;
                        address: {
                            door: string;
                            name: string;
                            building: string;
                            street: string;
                            locality: string;
                            ward: string;
                            city: string;
                            state: string;
                            country: string;
                            area_code: string;
                        };
                        station_code: string;
                        city: {
                            name: string;
                            code: string;
                        };
                        country: {
                            name: string;
                            code: string;
                        };
                        circle: {
                            gps: string;
                            radius: {
                                type: string;
                                value: string;
                                estimated_value: string;
                                computed_value: string;
                                range: {
                                    min: string;
                                    max: string;
                                };
                                unit: string;
                            };
                        };
                        polygon: string;
                        "3dspace": string;
                        time: {
                            label: string;
                            timestamp: string;
                            duration: string;
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                frequency: string;
                                holidays: [string];
                                times: [string];
                            };
                        };
                    };
                    time: {
                        label: string;
                        timestamp: string;
                        duration: string;
                        range: {
                            start: string;
                            end: string;
                        };
                        days: string;
                        schedule: {
                            frequency: string;
                            holidays: [string];
                            times: [string];
                        };
                    };
                    instructions: {
                        name: string;
                        code: string;
                        symbol: string;
                        short_desc: string;
                        long_desc: string;
                        images: [string];
                        audio: string;
                        "3d_render": string;
                    };
                    contact: {
                        phone: string;
                        email: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                    person: {
                        name: string;
                        image: string;
                        dob: string;
                        gender: string;
                        cred: string;
                        tags: {
                            additionalProp1: string;
                            additionalProp2: string;
                            additionalProp3: string;
                        };
                    };
                    authorization: {
                        type: string;
                        token: string;
                        valid_from: string;
                        valid_to: string;
                        status: string;
                    };
                };
                rateable: true;
                tags: {
                    additionalProp1: string;
                    additionalProp2: string;
                    additionalProp3: string;
                };
            };
            quote: {
                price: {
                    currency: string;
                    value: string;
                    estimated_value: string;
                    computed_value: string;
                    listed_value: string;
                    offered_value: string;
                    minimum_value: string;
                    maximum_value: string;
                };
                breakup: [
                    {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                            estimated_value: string;
                            computed_value: string;
                            listed_value: string;
                            offered_value: string;
                            minimum_value: string;
                            maximum_value: string;
                        };
                    },
                ];
                ttl: string;
            };
            payment: {
                uri: string;
                tl_method: string;
                params: {
                    transaction_id: string;
                    transaction_status: string;
                    amount: string;
                    currency: string;
                    additionalProp1: string;
                    additionalProp2: string;
                    additionalProp3: string;
                };
                type: string;
                status: string;
                time: {
                    label: string;
                    timestamp: string;
                    duration: string;
                    range: {
                        start: string;
                        end: string;
                    };
                    days: string;
                    schedule: {
                        frequency: string;
                        holidays: [string];
                        times: [string];
                    };
                };
            };
            created_at: string;
            updated_at: string;
        };
    };
}
