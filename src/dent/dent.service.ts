import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { EVApiService } from "src/ev/ev-api.service";

import { Injectable } from "@nestjs/common";

import { DentApiInterface } from "./dent-api.interface";
import { DentTypeEnum } from "./dent-type.enum";

@Injectable()
export class DentService {
    get(domain: string): DentApiInterface {
        switch (domain) {
            case DentTypeEnum.DENTEVCHARGIN:
            case DentTypeEnum.EVCHARGINGUEI:
                return new EVApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
