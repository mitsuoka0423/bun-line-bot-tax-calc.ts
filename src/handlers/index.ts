import { Context } from "hono";
import {
  WebhookRequestBody,
  Client,
  Message,
  WebhookEvent,
} from "@line/bot-sdk";

import { handleMessageEvent } from "./messageEventHandler";

// const line = new Client({
//   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
//   channelSecret: process.env.LINE_CHANNEL_SECRET,
// });

export const handleWebhookEvent = async (
  context: Context
): Promise<Response> => {
  console.log("[START] handleWebhookEvent");
  console.log({ context });

  const webhookRequestBody: WebhookRequestBody = await context.req.json();

  const promises = webhookRequestBody.events.map(
    async (event: WebhookEvent) => {
      let message: Message;
      if (event.type === "message") {
        message = await handleMessageEvent(event);
        // return await line.replyMessage(event.replyToken, message);
        return Promise.resolve();
      }
      return Promise.resolve();
    }
  );

  let response: Response;
  try {
    await Promise.all(promises);
    response = context.json({ message: "ok!" });
  } catch (e) {
    console.error(e);
    response = context.json({ message: "Internal Server Error" }, 500);
  }

  console.log("[END ] handleWebhookEvent");

  return response;
};
