import { Amount } from "./Amount";

export class SalesAmountWithSalesTax {
  private salesAmountWithSalesTax: Amount;

  constructor(salesAmountWithSalesTax: number) {
    this.salesAmountWithSalesTax = new Amount(salesAmountWithSalesTax);
  }

  amount(): Amount {
    return this.salesAmountWithSalesTax;
  }
}
