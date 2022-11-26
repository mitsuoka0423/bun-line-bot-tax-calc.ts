import { Context } from "hono";

import { handleWebhookEvent } from "../handlers";

export const getCallback = async (context: Context): Promise<Response> => {
  return context.json({ message: "Hello World!" });
};

export const postCallback = async (context: Context): Promise<Response> => {
  console.log(context);
  return handleWebhookEvent(context);
};
