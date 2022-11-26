import { Amount } from "./Amount";
import { SalesAmountWithoutSalesTax } from './SalesAmountWithoutSalesTax';

export class WithholdingIncomeTaxAmount {
  private salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax;
  private rate: number;

  constructor(salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax, rate: number) {
    this.salesAmountWithoutSalesTax = salesAmountWithoutSalesTax;
    this.rate = rate;
  }

  amount(): Amount {
    return new Amount(this.salesAmountWithoutSalesTax.amount().amount() * this.rate);
  }
}
