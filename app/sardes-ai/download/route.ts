import { NextRequest, NextResponse } from "next/server";

const APP_STORE_URL = "https://apps.apple.com/tr/app/id6754612517";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sardesai.app";

export function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  let target: string | URL;
  if (/iPhone|iPad|iPod/i.test(ua)) {
    target = APP_STORE_URL;
  } else if (/Android/i.test(ua)) {
    target = PLAY_STORE_URL;
  } else {
    // Desktop / unknown: send to the Sardes AI landing page.
    target = new URL("/sardes-ai", request.url);
  }

  const response = NextResponse.redirect(target, 302);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "User-Agent");
  return response;
}
