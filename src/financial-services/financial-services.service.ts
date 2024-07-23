import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { CreditPersonalApiService } from "src/personal-credit/credit-personal-api.service";
import { CreditInvoiceApiService } from "src/invoice-based-credit/credit-invoice-api.service";

import { Injectable } from "@nestjs/common";

import { FinancialServicesApiInterface } from "./financial-services-api.interface";
import { FinancialServicesTypeEnum } from "./financial-services-type.enum";
import { HealthInsuranceApiService } from "src/health-insurance/health-insurance-api.service";
import { MutualFundsApiService } from "src/mutual-funds/mutual-funds-api.service";

@Injectable()
export class FinancialServicesService {
    get(domain: string): FinancialServicesApiInterface {
        switch (domain) {
            case FinancialServicesTypeEnum.CREDITPERSONAL:
                return new CreditPersonalApiService();
            case FinancialServicesTypeEnum.CREDITINVOICE:
                return new CreditInvoiceApiService();
            case FinancialServicesTypeEnum.HEALTHINSURANCE:
                return new HealthInsuranceApiService();
            case FinancialServicesTypeEnum.MUTUALFUNDS:
                return new MutualFundsApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
