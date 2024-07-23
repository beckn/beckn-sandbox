import { DomainNotFoundException } from "../common/exception/domain-notfound.exception";
import { PharmacyApiService } from "../pharmacy/pharmacy-api.service";
import { ConsultationApiService } from "../consultation/consultation-api.service";
import { AmbulanceService } from "./ambulance/ambulance.service";
import { BloodbankService } from "./bloodbank/bloodbank.service";
import { Injectable } from "@nestjs/common";
import { DHPApiInterface } from "./dhp-api.interface";
import { DHPTypeEnum } from "./dhp-type.enum";
import { DiagnosticsApiService } from "../diagnostics/diagnostics-api.service";

@Injectable()
export class DHPService {
    get(domain: string): DHPApiInterface {
        switch (domain) {
            case DHPTypeEnum.DHPPHARMACY:
                return new PharmacyApiService();
            case DHPTypeEnum.DHPCONSULTATION:
                return new ConsultationApiService();
            case DHPTypeEnum.DHPDIAGNOSTICS:
                return new DiagnosticsApiService();
            case DHPTypeEnum.DHPAMBULANCE:
                return new AmbulanceService();
            case DHPTypeEnum.DHPBLOODBANK:
                return new BloodbankService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
