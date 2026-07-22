import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const preset =
  process.env.NETLIFY
    ? "netlify"
    : process.env.VERCEL
      ? "vercel"
      : undefined;

export default defineConfig({
  nitro: preset
    ? {
        preset,
      }
    : true,

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});