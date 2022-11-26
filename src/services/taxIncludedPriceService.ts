import { Client } from "@line/bot-sdk";
import { TaxIncludedPrice } from "../domains/TaxIncludedPrice";

interface TaxIncludedPriceServiceProps {
  price: number;
  replyToken: string;
}

const client = new Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

export const taxIncludedPriceService = async ({
  price,
  replyToken,
}: TaxIncludedPriceServiceProps) => {
  const taxIncludedPrice = new TaxIncludedPrice(price);

  const texts = [
    `内税：${taxIncludedPrice.price}`,
    `外税：${taxIncludedPrice.priceExcludedSalesTax}`,
    `源泉徴収税：${taxIncludedPrice.priceExcludeWithholdingIncomeTax}`,
    `振り込み金額：${taxIncludedPrice.priceExcludeWithholdingIncomeTax}`,
  ];

  return await client.replyMessage(replyToken, {
    type: "text",
    text: texts.join("\n"),
  });
};
