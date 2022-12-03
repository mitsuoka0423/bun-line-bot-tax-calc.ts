import { Hono } from "hono";
import { getCallback, postCallback } from "./routes";
import { prettyJSON } from 'hono/pretty-json';

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
