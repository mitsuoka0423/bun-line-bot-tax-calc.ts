import { Context } from "hono";
import { WebhookRequestBody } from '@line/bot-sdk';

import { handleMessageEvent } from './messageEventHandler';

export const handleWebhookEvent = async (context: Context): Promise<Response> => {
  const webhookRequestBody: WebhookRequestBody = await context.req.json();
  
  const promises = webhookRequestBody.events.map((event) => {
    switch (event.type) {
      case "message":
        return handleMessageEvent(event);
      default:
        return Promise.resolve();
    }
  });
  
  return Promise
    .all(promises)
    .then(() => context.json({ message: "ok!" }));
};

