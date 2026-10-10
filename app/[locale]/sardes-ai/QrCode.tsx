"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QrCode({ path, label }: { path: string; label: string }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    QRCode.toString(`${window.location.origin}${path}`, {
      type: "svg",
      margin: 1,
      color: { dark: "#0a0a0b", light: "#ffffff" },
    })
      .then(setSvg)
      .catch(() => setSvg(""));
  }, [path]);

  return (
    <div
      className="sa-qr"
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
