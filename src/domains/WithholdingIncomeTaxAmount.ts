import { Amount } from "./Amount";
import { SalesAmountWithoutSalesTax } from "./SalesAmountWithoutSalesTax";

export class WithholdingIncomeTaxAmount extends Amount {
	constructor(
		salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax,
		rate: number,
	) {
		super(salesAmountWithoutSalesTax.value * rate);
	}
}
