export const web = new sst.aws.StaticSite("web", {
  path: "packages/web",
  build: { command: "pnpm run build", output: "dist" },
});

export const outputs = {
  web: web.url,
};
