import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";

import { taxIncludedPriceService } from "../services";

export const handleMessageEvent = async (
  event: MessageEvent
): Promise<Message[]> => {
  console.log("[START] handleMessageEvent");
  console.log({ event });

  let messages: Message[];
  if (event.message.type === "text") {
    const textEventMessage = event.message as TextEventMessage;

    // メッセージの内容によって、サービスを振り分ける
    const parsed = Number.parseInt(textEventMessage.text);
    if (Number.isSafeInteger(parsed)) {
      messages = await taxIncludedPriceService({
        price: Number(textEventMessage.text),
      });
    }
  }

  console.log({ message: messages });
  console.log("[END  ] handleMessageEvent");

  return messages;
};
