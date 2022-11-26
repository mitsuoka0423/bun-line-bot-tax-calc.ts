import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";
import { SalesTaxAmount } from "./SalesTaxAmount";

export class SalesAmountWithoutSalesTax {
  private readonly salesAmountWithSalesTax: SalesAmountWithSalesTax;
  private readonly salesTaxAmount: SalesTaxAmount;

  constructor(
    salesAmountWithSalesTax: SalesAmountWithSalesTax,
    salesTaxAmount: SalesTaxAmount
  ) {
    this.salesAmountWithSalesTax = salesAmountWithSalesTax;
    this.salesTaxAmount = salesTaxAmount;
  }
  
  get amount(): Amount {
    return this.salesAmountWithSalesTax.amount.subtract(this.salesTaxAmount.amount);
  }
}
