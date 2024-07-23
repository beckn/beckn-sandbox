import { Injectable } from "@nestjs/common";
import { LocalRetailENUM, VersionENUM } from "./local-retail-modules.enum";
import { RetailService094 } from "./retail-0.9.4/retail.service-0-9-4";
import { RetailService110 } from "./retail-1.1.0/retail.service-1-1-0";
import { LocalRetail094ApiInterface } from "./local-retail-api.interface";
import { LocalRetail110ApiInterface } from "./local-retail-api.interface";
import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";

@Injectable()//
export class LocalRetailService {
    get094(domain: LocalRetailENUM): LocalRetail094ApiInterface {
        switch (domain) {
            case LocalRetailENUM.RETAIL094:
                return new RetailService094();
            default:
                throw new DomainNotFoundException();
        }
    }

    get110(domain: LocalRetailENUM): LocalRetail110ApiInterface {
        switch (domain) {
            case LocalRetailENUM.RETAIL110:
                return new RetailService110();
            default:
                throw new DomainNotFoundException();
        }
    }
}
