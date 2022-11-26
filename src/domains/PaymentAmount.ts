import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";
import { WithholdingIncomeTaxAmount } from "./WithholdingIncomeTaxAmount";

export class PaymentAmount {
  private readonly salesAmountWithSalesTax: SalesAmountWithSalesTax;
  private readonly withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount;

  constructor(
    salesAmountWithSalesTax: SalesAmountWithSalesTax,
    withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount
  ) {
    this.salesAmountWithSalesTax = salesAmountWithSalesTax;
    this.withholdingIncomeTaxAmount = withholdingIncomeTaxAmount;
  }

  get amount(): Amount {
    return this.salesAmountWithSalesTax.amount.subtract(this.withholdingIncomeTaxAmount.amount);
  }
}