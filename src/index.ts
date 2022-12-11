import { Hono } from "hono";
import { getCallback, postCallback } from "./routes";
import { prettyJSON } from 'hono/pretty-json';

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;
if (!channelAccessToken)
  throw new Error("チャンネルアクセストークンを入力してください。");

const channelSecret = process.env.CHANNEL_SECRET;
if (!channelSecret)
  throw new Error("チャンネルシークレットを入力してください。");

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('*', prettyJSON());
app.get("/", getCallback);
app.post("/", postCallback);

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
