import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";
import { SalesTaxAmount } from "./SalesTaxAmount";

export class SalesAmountWithoutSalesTax extends Amount {
	constructor(
		salesAmountWithSalesTax: SalesAmountWithSalesTax,
		salesTaxAmount: SalesTaxAmount,
	) {
		super(salesAmountWithSalesTax.subtract(salesTaxAmount).value);
	}
}
