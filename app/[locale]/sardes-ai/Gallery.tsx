"use client";

import { useCallback, useEffect, useRef } from "react";

type Props = { shots: string[]; prev: string; next: string };

const INTERVAL_MS = 3200;

export default function Gallery({ shots, prev, next }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const size = card ? card.getBoundingClientRect().width + 16 : 276;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && el.scrollLeft <= 8) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * size, behavior: "smooth" });
    }
  }, []);

  // Auto-advance only on devices with a real pointer (desktop); touch users swipe.
  useEffect(() => {
    const desktop = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reduced.matches) return;
    const id = window.setInterval(() => {
      if (!paused.current && !document.hidden) step(1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [step]);

  return (
    <div
      className="sa-gal-wrap"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <button type="button" className="sa-arrow l" aria-label={prev} onClick={() => step(-1)}>
        ‹
      </button>
      <div className="sa-gal" ref={track}>
        {shots.map((src) => (
          <figure key={src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" width={620} height={1342} loading="lazy" draggable={false} />
          </figure>
        ))}
      </div>
      <button type="button" className="sa-arrow r" aria-label={next} onClick={() => step(1)}>
        ›
      </button>
    </div>
  );
}
