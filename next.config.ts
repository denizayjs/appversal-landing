import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);

// Initialize OpenNext for Cloudflare development
initOpenNextCloudflareForDev();
