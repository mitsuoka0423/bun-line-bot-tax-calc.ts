import { Context } from "hono";
import { WebhookRequestBody, Message, WebhookEvent } from "@line/bot-sdk";

import { handleMessageEvent } from "./messageEventHandler";
import { postReplyMessage } from "../api/MessagingApi";

export const handleWebhookEvent = async (
  context: Context
): Promise<Response> => {
  console.log("[START] handleWebhookEvent");
  console.log({ context });

  let response: Response;
  try {
    const webhookRequestBody: WebhookRequestBody = await context.req.json();

    const promises = webhookRequestBody.events.map(
      async (event: WebhookEvent) => {
        let messages: Message[];
        if (event.type === "message") {
          messages = await handleMessageEvent(event);

          return postReplyMessage({
            replyToken: event.replyToken,
            messages,
            channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
          });
        }
        return Promise.resolve();
      }
    );

    await Promise.all(promises);
    response = context.json({ message: "ok!" });
  } catch (e) {
    console.error(e);
    response = context.json({ message: "Internal Server Error" }, 500);
  }

  console.log({ response });
  console.log("[END ] handleWebhookEvent");

  return response;
};
