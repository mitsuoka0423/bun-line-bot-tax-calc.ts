import { Message } from "@line/bot-sdk";
import { PaymentAmount } from "../domains/PaymentAmount";
import { SalesAmountWithSalesTax } from "../domains/SalesAmountWithSalesTax";
import { SalesAmountWithoutSalesTax } from "../domains/SalesAmountWithoutSalesTax";
import { SalesTaxAmount } from "../domains/SalesTaxAmount";
import { WithholdingIncomeTaxAmount } from "../domains/WithholdingIncomeTaxAmount";

interface PayAmountCalculatorServiceProps {
	price: number;
}

export const payAmountCalculatorService = async ({
	price,
}: PayAmountCalculatorServiceProps): Promise<Message[]> => {
	console.log("[START] payAmountCalculatorService");
	console.log({ price });

	const {
		salesAmountWithSalesTax,
		salesTaxAmount,
		salesAmountWithoutSalesTax,
		withholdingIncomeTaxAmount,
		paymentAmount,
	} = calculatePayAmountWithTaxIncludedAmount(price);

	const messages: Message[] = [
		{
			type: "text",
			text: [
				`内税　　　：${salesAmountWithSalesTax.value}`,
				`消費税　　：${salesTaxAmount.value}`,
				`外税　　　：${salesAmountWithoutSalesTax.value}`,
				`源泉徴収税：${withholdingIncomeTaxAmount.value}`,
				`振込金額　：${paymentAmount.value}`,
			].join("\n"),
		},
	];

	console.log({ message: messages });
	console.log("[END  ] payAmountCalculatorService");

	return messages;
};

const calculatePayAmountWithTaxIncludedAmount = (
	price,
): {
	salesAmountWithSalesTax: SalesAmountWithSalesTax;
	salesTaxAmount: SalesTaxAmount;
	salesAmountWithoutSalesTax: SalesAmountWithoutSalesTax;
	withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount;
	paymentAmount: PaymentAmount;
} => {
	const salesAmountWithSalesTax = new SalesAmountWithSalesTax(price);
	const salesTaxAmount = new SalesTaxAmount(salesAmountWithSalesTax, 0.1);
	const salesAmountWithoutSalesTax = new SalesAmountWithoutSalesTax(
		salesAmountWithSalesTax,
		salesTaxAmount,
	);
	const withholdingIncomeTaxAmount = new WithholdingIncomeTaxAmount(
		salesAmountWithoutSalesTax,
		0.1021,
	);
	const paymentAmount = new PaymentAmount(
		salesAmountWithSalesTax,
		withholdingIncomeTaxAmount,
	);

	return {
		salesAmountWithSalesTax,
		salesTaxAmount,
		salesAmountWithoutSalesTax,
		withholdingIncomeTaxAmount,
		paymentAmount,
	};
};
