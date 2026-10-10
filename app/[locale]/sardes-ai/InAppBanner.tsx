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
    setShow(true);
    // Best effort: some iOS webviews honour this scheme and jump straight to Safari.
    const t = window.setTimeout(() => {
      window.location.href = `x-safari-${window.location.href}`;
    }, 600);
    return () => window.clearTimeout(t);
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
