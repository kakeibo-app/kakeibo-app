import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { User } from "@kakeibo-app/core/user/index";

const app = new Hono();

app.get("/", async (c) => {
  const data = await User.list();

  return c.json(data);
});

export const handler = handle(app);
