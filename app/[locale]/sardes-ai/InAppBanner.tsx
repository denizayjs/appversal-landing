"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  hint: string;
  open: string;
  copy: string;
  copied: string;
  close: string;
};

const IN_APP =
  /TikTok|musical_ly|Bytedance|trill|Instagram|FBAN|FBAV|FB_IAB|Snapchat|LinkedInApp|MicroMessenger|Line\//i;

function isIosInAppBrowser(ua: string) {
  if (!/iPhone|iPad|iPod/i.test(ua)) return false;
  if (IN_APP.test(ua)) return true;
  return !/Safari|CriOS|FxiOS|EdgiOS/i.test(ua);
}

export default function InAppBanner(p: Props) {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isIosInAppBrowser(navigator.userAgent)) return;

    // Escape chain: Safari scheme -> Chrome scheme -> show the manual banner.
    // Leaving the page (visibility hidden / pagehide) means an attempt worked.
    const url = window.location.href;
    const timers: number[] = [];
    let left = false;

    const cancel = () => {
      left = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
    const onHide = () => {
      if (document.visibilityState === "hidden") cancel();
      else if (left) setShow(true); // came back: automatic attempt did not stick
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", cancel);

    timers.push(
      window.setTimeout(() => {
        window.location.href = `x-safari-${url}`;
      }, 300),
      window.setTimeout(() => {
        window.location.href = url.replace(/^https?:\/\//, "googlechromes://");
      }, 1500),
      window.setTimeout(() => setShow(true), 2800),
    );

    return () => {
      cancel();
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", cancel);
    };
  }, []);

  if (!show) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setDone(true);
    } catch {
      /* clipboard blocked: the steps above still work */
    }
  };

  return (
    <div className="sa-inapp" role="dialog" aria-label={p.title}>
      <div className="sa-inapp-in">
        <div>
          <b>{p.title} <span aria-hidden="true">↗</span></b>
          <p>{p.hint}</p>
        </div>
        <div className="sa-inapp-actions">
          <a href={`x-safari-${typeof window !== "undefined" ? window.location.href : ""}`}>{p.open}</a>
          <button type="button" onClick={copyLink}>{done ? p.copied : p.copy}</button>
          <button type="button" aria-label={p.close} onClick={() => setShow(false)}>✕</button>
        </div>
      </div>
    </div>
  );
}
