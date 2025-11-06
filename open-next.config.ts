import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // OpenNext Cloudflare configuration
  // Note: To prevent recursion, ensure 'build' script in package.json is 'next build'
  // and use 'build:cloudflare' script for OpenNext builds
});
