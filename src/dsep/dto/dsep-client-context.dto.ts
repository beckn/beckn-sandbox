import { DSEPModulesEnum } from "../dsep-modules.enum";
export class DSEPClientContextDto {
    domain: DSEPModulesEnum;
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
