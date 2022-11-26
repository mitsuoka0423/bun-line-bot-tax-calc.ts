import { MessageEvent, TextEventMessage } from "@line/bot-sdk";

import { taxIncludedPriceService } from "../services";

export const handleMessageEvent = async (
  event: MessageEvent
): Promise<void> => {
  if (event.message.type === "text") {
    const textEventMessage = event.message as TextEventMessage;

    // メッセージの内容によって、サービスを振り分ける
    if (Number.isInteger(textEventMessage.text)) {
      await taxIncludedPriceService({
        price: Number(textEventMessage.text),
        replyToken: event.replyToken,
      });
    }
  }
};
