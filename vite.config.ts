import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const preset =
  process.env.VERCEL
    ? "vercel"
    : undefined;

export default defineConfig({
  plugins: [],

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