import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Use bunx to call next build directly, bypassing package.json scripts
  // This prevents OpenNext from detecting and calling the build script recursively
  buildCommand: "bunx next build",
});
