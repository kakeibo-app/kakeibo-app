import { secret } from "./secret";

export const web = new sst.aws.StaticSite("web", {
  path: "packages/web",
  build: { command: "pnpm run build", output: "dist" },
  environment: {
    VITE_CLERK_PUBLISHABLE_KEY: secret.ClerkPublishableKey.value,
  },
});

export const outputs = {
  web: web.url,
};
