import { Module } from "@nestjs/common";

import { CreditInvoiceApiService } from "./credit-invoice-api.service";
import { CreditInvoiceService } from "./credit-invoice.service";

@Module({
    providers: [CreditInvoiceApiService, CreditInvoiceService],
})
export class CreditInvoiceModule {
    /* body */
}
