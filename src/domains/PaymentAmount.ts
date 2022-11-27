import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";
import { WithholdingIncomeTaxAmount } from "./WithholdingIncomeTaxAmount";

export class PaymentAmount extends Amount {
  constructor(
    salesAmountWithSalesTax: SalesAmountWithSalesTax,
    withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount
  ) {
    super(salesAmountWithSalesTax.subtract(withholdingIncomeTaxAmount).value);
  }
}
