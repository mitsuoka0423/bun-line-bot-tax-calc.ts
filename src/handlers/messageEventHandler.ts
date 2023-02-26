import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";

import { payAmountCalculatorService } from "../services";

export const handleMessageEvent = async (
  event: MessageEvent
): Promise<Message[]> => {
  console.log("[START] handleMessageEvent");
  console.log({ event });

  let messages: Message[];
  if (event.message.type === "text") {
    const textEventMessage = event.message as TextEventMessage;

    // メッセージの内容によって、サービスを振り分ける
    if (Number.isSafeInteger(textEventMessage.text)) {
      messages = await payAmountCalculatorService({
        price: Number(textEventMessage.text),
      });
    } else {
      messages = [
        {
          type: "text",
          text: "対応していないメッセージです。",
        },
      ];
    }
  }

  console.log({ message: messages });
  console.log("[END  ] handleMessageEvent");

  return messages;
};
