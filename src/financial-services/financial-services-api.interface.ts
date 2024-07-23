import { FinancialServicesRequestDto } from "./dto/request.dto";

export interface FinancialServicesApiInterface {
    search: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    select: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    init: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    confirm: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    status: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    track: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    cancel: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    update: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    rating: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    support: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    cancellationReasons: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
    ratingCategories: (financialServicesRequestDto: FinancialServicesRequestDto) => any;
}
