import { MessageEvent, TextEventMessage, Message, Client } from "@line/bot-sdk";

import { taxIncludedPriceService } from "../services";

const line = new Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

export const handleMessageEvent = async (
  event: MessageEvent
): Promise<void> => {
  console.log('[START] handleMessageEvent');
  console.log({event});

  let message: Message;
  if (event.message.type === "text") {
    const textEventMessage = event.message as TextEventMessage;

    // メッセージの内容によって、サービスを振り分ける
    if (Number.isInteger(textEventMessage.text)) {
      message = await taxIncludedPriceService({
        price: Number(textEventMessage.text),
      });
    }
  }

  await line.replyMessage(event.replyToken, message);

  console.log({message});
  console.log('[END  ] handleMessageEvent');
};
