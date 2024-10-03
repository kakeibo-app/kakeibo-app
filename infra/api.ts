import { secret } from "./secret";

export const api = new sst.aws.Function("api", {
  url: true,
  handler: "packages/functions/src/index.handler",
  link: [secret.NeonDatabaseUrl],
});

export const outputs = {
  api: api.url,
};
