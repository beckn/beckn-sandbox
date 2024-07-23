import { Industry4_0ENUM } from "../industry-4.0-modules.enum";
export class Industry_4_O_CLIENT_CONTEXT_DTO {
    domain: Industry4_0ENUM;
    version: string;
    action: string;
    bap_id: string;
    bap_uri: string;
    location?: {
        city: {
            name: string;
            code: string;
        };
        country: {
            name: string;
            code: string;
        };
    };
    transaction_id?: string;
    message_id: string;
    ttl: string;
    timestamp: string;
    bpp_uri?: string;
    bpp_id?: string;
    key?: string;
}
