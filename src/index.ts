import { Hono } from "hono";
import { getCallback, postCallback } from "./routes";

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.get("/", getCallback);
app.post("/", postCallback);

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
