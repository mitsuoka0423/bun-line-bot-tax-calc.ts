import { Amount } from "./Amount";
import { SalesAmountWithSalesTax } from "./SalesAmountWithSalesTax";

export class SalesTaxAmount extends Amount {
	constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax, rate: number) {
		super(salesAmountWithSalesTax.value * (rate / (1 + rate)));
	}
}
