import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

const preset =
  process.env.NETLIFY
    ? "netlify"
    : process.env.VERCEL
      ? "vercel"
      : undefined;

export default defineConfig({
  plugins: [
    netlify(),
  ],

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