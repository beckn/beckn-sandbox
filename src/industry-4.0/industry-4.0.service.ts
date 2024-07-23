import { Injectable } from "@nestjs/common";
import { Industry4_0ENUM } from "./industry-4.0-modules.enum";
import { Three_D_PrintingService } from "./3D-printing/3D-printing.service";
import { Industry4_0ApiInterface } from "./industry-4.0-api.interface";
import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { AssemblyService } from "./assembly/assembly.service";
@Injectable()
export class Industry40Service {
    get(domain: Industry4_0ENUM): Industry4_0ApiInterface {
        switch (domain) {
            case Industry4_0ENUM.THREE_D_PRINITING:
                return new Three_D_PrintingService();
            case Industry4_0ENUM.ASSEMBLY:
                return new AssemblyService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
