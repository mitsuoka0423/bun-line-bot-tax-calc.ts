import { Context } from "hono";

export const getCallback = async (context: Context): Promise<Response> => {
  return context.json({ message: "Hello World!" });
};

export const postCallback = async (context: Context): Promise<Response> => {
  return context.json({ message: "Hello World!" });
};
