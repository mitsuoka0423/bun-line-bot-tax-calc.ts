import { Amount } from "./Amount";

export class SalesAmountWithSalesTax extends Amount {
	constructor(salesAmountWithSalesTax: number) {
		super(salesAmountWithSalesTax);
	}
}
