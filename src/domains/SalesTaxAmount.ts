import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";

export class SalesTaxAmount {
  private salesAmountWithSalesTax: Amount;

  constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax, rate: number) {
    this.salesAmountWithSalesTax = new Amount(salesAmountWithSalesTax.amount().amount() * (rate / (1 + rate)));
  }

  amount(): Amount {
    return this.salesAmountWithSalesTax;
  }
}
