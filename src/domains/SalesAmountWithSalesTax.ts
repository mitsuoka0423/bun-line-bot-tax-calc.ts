import { Amount } from "./Amount";

export class SalesAmountWithSalesTax {
  private readonly salesAmountWithSalesTax: Amount;

  constructor(salesAmountWithSalesTax: number) {
    this.salesAmountWithSalesTax = new Amount(salesAmountWithSalesTax);
  }

  get amount(): Amount {
    return this.salesAmountWithSalesTax;
  }
}
