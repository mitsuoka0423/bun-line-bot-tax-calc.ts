import { Amount } from "./Amount";
import { SalesAmountWithoutSalesTax } from './SalesAmountWithoutSalesTax';

export class WithholdingIncomeTaxAmount {
  private readonly salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax;
  private readonly rate: number;

  constructor(salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax, rate: number) {
    this.salesAmountWithoutSalesTax = salesAmountWithoutSalesTax;
    this.rate = rate;
  }

  get amount(): Amount {
    return new Amount(this.salesAmountWithoutSalesTax.amount.value * this.rate);
  }
}
