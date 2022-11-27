import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";

import { taxIncludedPriceService } from "../services";

export const handleMessageEvent = async (
  event: MessageEvent
): Promise<Message> => {
  console.log("[START] handleMessageEvent");
  console.log({ event });

  let message: Message;
  if (event.message.type === "text") {
    const textEventMessage = event.message as TextEventMessage;

    // メッセージの内容によって、サービスを振り分ける
    const parsed = Number.parseInt(textEventMessage.text);
    if (Number.isSafeInteger(parsed)) {
      message = await taxIncludedPriceService({
        price: Number(textEventMessage.text),
      });
    }
  }

  console.log({ message });
  console.log("[END  ] handleMessageEvent");

  return message;
};
