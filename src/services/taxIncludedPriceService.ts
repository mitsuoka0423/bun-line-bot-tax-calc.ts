import { Message } from "@line/bot-sdk";
import { PaymentAmount } from "../domains/PaymentAmount";
import { SalesAmountWithSalesTax } from "../domains/SalesAmountWithSalesTax";
import { SalesAmountWithoutSalesTax } from "../domains/SalesAmountWithoutSalesTax";
import { SalesTaxAmount } from "../domains/SalesTaxAmount";
import { WithholdingIncomeTaxAmount } from "../domains/WithholdingIncomeTaxAmount";

interface TaxIncludedPriceServiceProps {
  price: number;
}

export const taxIncludedPriceService = async ({
  price,
}: TaxIncludedPriceServiceProps): Promise<Message> => {
  console.log('[START] taxIncludedPriceService');
  console.log({price});

  const salesAmountWithSalesTax = new SalesAmountWithSalesTax(price);
  const salesTaxAmount = new SalesTaxAmount(salesAmountWithSalesTax, 0.1);
  const salesAmountWithoutSalesTax = new SalesAmountWithoutSalesTax(
    salesAmountWithSalesTax,
    salesTaxAmount
  );
  const withholdingIncomeTaxAmount = new WithholdingIncomeTaxAmount(
    salesAmountWithoutSalesTax,
    0.1021
  );
  const paymentAmount = new PaymentAmount(
    salesAmountWithSalesTax,
    withholdingIncomeTaxAmount
  );

  const message: Message = {
    type: "text",
    text: [
      `内税：${salesAmountWithSalesTax.value}`,
      `外税：${salesAmountWithoutSalesTax.amount.value}`,
      `源泉徴収税：${withholdingIncomeTaxAmount.amount.value}`,
      `振り込み金額：${paymentAmount.amount.value}`,
    ].join("\n"),
  };

  console.log({message});
  console.log('[END  ] taxIncludedPriceService');

  return message;
};
