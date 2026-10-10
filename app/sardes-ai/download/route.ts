import { NextRequest, NextResponse } from "next/server";

const APP_STORE_URL = "https://apps.apple.com/tr/app/id6754612517";
const APP_STORE_NATIVE_URL = "itms-apps://apps.apple.com/tr/app/id6754612517";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sardesai.app";

// In-app browsers (TikTok, Instagram, ...) that block the App Store redirect on iOS.
const IN_APP_BROWSER =
  /TikTok|musical_ly|Bytedance|trill|Instagram|FBAN|FBAV|FB_IAB|Snapchat|LinkedInApp|MicroMessenger|Line\//i;

function isIosInAppBrowser(ua: string) {
  if (!/iPhone|iPad|iPod/i.test(ua)) return false;
  if (IN_APP_BROWSER.test(ua)) return true;
  // Real Safari/Chrome/Firefox/Edge on iOS always carry one of these tokens;
  // a bare WKWebView does not.
  return !/Safari|CriOS|FxiOS|EdgiOS/i.test(ua);
}

const COPY = {
  tr: {
    title: "Sardes AI'ı indir",
    banner: "Safari'de aç",
    lead: "Bu uygulama içi tarayıcı App Store'u açamıyor. Safari'de açman gerekiyor.",
    steps: [
      "Sağ üstteki <b>⋯</b> (veya paylaş) simgesine dokun",
      "<b>Tarayıcıda aç</b> / <b>Safari'de aç</b> seçeneğini seç",
      "App Store otomatik olarak açılacak",
    ],
    open: "App Store'u açmayı dene",
    copy: "Linki kopyala",
    copied: "Kopyalandı ✓",
  },
  en: {
    title: "Get Sardes AI",
    banner: "Open in Safari",
    lead: "This in-app browser can't open the App Store. Please open this page in Safari.",
    steps: [
      "Tap the <b>⋯</b> (or share) icon in the top right",
      "Choose <b>Open in browser</b> / <b>Open in Safari</b>",
      "The App Store will open automatically",
    ],
    open: "Try opening the App Store",
    copy: "Copy link",
    copied: "Copied ✓",
  },
} as const;

function inAppPage(lang: "tr" | "en") {
  const c = COPY[lang];
  return `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex">
<title>${c.title}</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:#000;color:#fafafa;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100vh;display:flex;flex-direction:column}
.bar{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:calc(12px + env(safe-area-inset-top)) 16px 12px;background:#6366f1;font-weight:700}
.bar span:last-child{font-size:28px;line-height:1;animation:nudge 1.2s ease-in-out infinite}
main{flex:1;padding:32px 20px;max-width:480px;margin:0 auto;width:100%}
h1{font-size:30px;letter-spacing:-.03em;margin:0 0 10px}
p{color:#a1a1aa;line-height:1.6;margin:0 0 24px}
ol{list-style:none;margin:0 0 28px;padding:0;counter-reset:s}
li{counter-increment:s;display:flex;gap:14px;align-items:flex-start;background:#0f0f11;border:1px solid #27272a;border-radius:16px;padding:16px;margin-bottom:10px;line-height:1.45}
li::before{content:counter(s);flex:none;width:26px;height:26px;border-radius:50%;background:#6366f133;color:#a5b4fc;font-weight:700;display:grid;place-items:center;font-size:14px}
.btn{display:block;width:100%;text-align:center;padding:16px;border-radius:14px;font-size:17px;font-weight:600;border:0;margin-bottom:12px;text-decoration:none;font-family:inherit}
.p{background:#fff;color:#000}.s{background:#18181b;color:#fff;border:1px solid #3f3f46}
@keyframes nudge{50%{transform:translate(4px,-4px)}}
</style></head><body>
<div class="bar"><span>${c.banner}</span><span aria-hidden="true">↗</span></div>
<main>
<h1>${c.title}</h1>
<p>${c.lead}</p>
<ol>${c.steps.map((s) => `<li><span>${s}</span></li>`).join("")}</ol>
<a class="btn p" id="open" href="${APP_STORE_NATIVE_URL}">${c.open}</a>
<button class="btn s" id="copy" type="button">${c.copy}</button>
</main>
<script>
(function(){
  var url=location.href;
  var b=document.getElementById('copy');
  b.addEventListener('click',function(){
    function done(){b.textContent=${JSON.stringify(c.copied)};}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done,fallback);}else{fallback();}
    function fallback(){var t=document.createElement('textarea');t.value=url;document.body.appendChild(t);t.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(t);}
  });
  setTimeout(function(){location.href=${JSON.stringify(APP_STORE_NATIVE_URL)};},400);
})();
</script>
</body></html>`;
}

export function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  const headers = {
    "Cache-Control": "no-store",
    Vary: "User-Agent, Accept-Language",
  };

  if (isIosInAppBrowser(ua)) {
    const lang = /^tr/i.test(request.headers.get("accept-language") ?? "")
      ? "tr"
      : "en";
    return new NextResponse(inAppPage(lang), {
      headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
    });
  }

  let target: string | URL;
  if (/iPhone|iPad|iPod/i.test(ua)) {
    target = APP_STORE_URL;
  } else if (/Android/i.test(ua)) {
    target = PLAY_STORE_URL;
  } else {
    target = new URL("/sardes-ai", request.url);
  }

  const response = NextResponse.redirect(target, 302);
  Object.entries(headers).forEach(([k, v]) => response.headers.set(k, v));
  return response;
}
