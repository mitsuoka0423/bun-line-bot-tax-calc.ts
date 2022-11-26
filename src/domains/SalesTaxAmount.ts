import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";

export class SalesTaxAmount {
  private readonly salesAmountWithSalesTax: Amount;

  constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax, rate: number) {
    this.salesAmountWithSalesTax = new Amount(salesAmountWithSalesTax.amount.value * (rate / (1 + rate)));
  }

  get amount(): Amount {
    return this.salesAmountWithSalesTax;
  }
}
