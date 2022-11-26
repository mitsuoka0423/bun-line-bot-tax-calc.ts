import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";
import { WithholdingIncomeTaxAmount } from "./WithholdingIncomeTaxAmount";

export class PaymentAmount {
  private salesAmountWithSalesTax: SalesAmountWithSalesTax;
  private withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount;

  constructor(
    salesAmountWithSalesTax: SalesAmountWithSalesTax,
    withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount
  ) {
    this.salesAmountWithSalesTax = salesAmountWithSalesTax;
    this.withholdingIncomeTaxAmount = withholdingIncomeTaxAmount;
  }

  amount(): Amount {
    return this.salesAmountWithSalesTax.amount().subtract(this.withholdingIncomeTaxAmount.amount());
  }
}