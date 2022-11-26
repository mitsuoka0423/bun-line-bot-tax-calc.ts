import { Context } from "hono";
import { WebhookRequestBody } from "@line/bot-sdk";

import { handleMessageEvent } from "./messageEventHandler";

export const handleWebhookEvent = async (
  context: Context
): Promise<Response> => {
  console.log('[START] handleWebhookEvent');

  const webhookRequestBody: WebhookRequestBody = await context.req.json();

  const promises = webhookRequestBody.events.map((event) => {
    switch (event.type) {
      case "message":
        return handleMessageEvent(event);
      default:
        return Promise.resolve();
    }
  });

  let response: Response;
  try {
    await Promise.all(promises);
    response = context.json({ message: "ok!" });
  } catch(e) {
    console.error(e);
    response = context.json({ message: "Internal Server Error" }, 500);
  }

  console.log('[END ] handleWebhookEvent');

  return response;
};
