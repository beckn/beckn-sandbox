import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { OndcApiService } from "src/ondc/ondc-api.service";
import { UmtcApiService } from "src/umtc/umtc-api.service";

import { Injectable } from "@nestjs/common";

import { MobilityApiInterface } from "./mobility-api.interface";
import { MobilityTypeEnum } from "./mobility-type.enum";

@Injectable()
export class MobilityService {
    get(domain: string): MobilityApiInterface {
        switch (domain) {
            case MobilityTypeEnum.ONDC:
                return new OndcApiService();
            case MobilityTypeEnum.UMTC:
                return new UmtcApiService();
            case MobilityTypeEnum.BECKN_MOBILITY:
                return new UmtcApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
