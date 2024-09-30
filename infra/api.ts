export const api = new sst.aws.Function("api", {
  url: true,
  handler: "packages/functions/src/index.handler",
});

export const outputs = {
  api: api.url,
};
