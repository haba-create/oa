"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SlideshowProps = {
  label: string;
  itemLabel: string;
  items: string[];
  mediaType: "image" | "video";
};

export default function Slideshow({ label, itemLabel, items, mediaType }: SlideshowProps) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previous = () => setActive((current) => (current - 1 + items.length) % items.length);
  const next = () => setActive((current) => (current + 1) % items.length);

  useEffect(() => {
    const adjacent = [items[(active + 1) % items.length], items[(active - 1 + items.length) % items.length]];
    adjacent.forEach((src) => { if (/\.(jpe?g|png|webp|avif)$/i.test(src)) { const image = new window.Image(); image.src = src; } });
  }, [active, items]);

  // React omits the muted attribute from server-rendered HTML, so browsers
  // treat the video as unmuted at parse time and block autoplay. Re-assert
  // muted and start playback from the client once the element exists.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, [active, mediaType]);

  return (
    <section className={mediaType === "video" ? "video-slideshow" : "textile-slideshow"} aria-label={label} onKeyDown={(event) => { if (event.key === "ArrowLeft") previous(); if (event.key === "ArrowRight") next(); }} tabIndex={0} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 50) distance > 0 ? previous() : next(); touchStart.current = null; }}>
      <div className="slideshow-heading"><p>{label}</p><p>{String(items.length).padStart(2, "0")} {itemLabel.toUpperCase()}S</p></div>
      <div className={mediaType === "video" ? "video-stage" : "slideshow-stage"}>
        {mediaType === "video" ? (
          <video
            key={items[active]}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            controls
            preload="auto"
            onEnded={next}
          >
            <source src={items[active]} type="video/mp4" />
          </video>
        ) : (
          <Image key={items[active]} src={items[active]} alt={`Full-colour textile sample documented in the AFIA research archive, photograph ${active + 1}`} fill sizes="(max-width: 760px) 100vw, 1016px" unoptimized />
        )}
      </div>
      <div className="slideshow-controls">
        <p><span>{String(active + 1).padStart(2, "0")}</span> / {items.length}</p>
        <div><button type="button" onClick={previous} aria-label={`Previous ${itemLabel}`}>← PREVIOUS</button><button type="button" onClick={next} aria-label={`Next ${itemLabel}`}>NEXT →</button></div>
      </div>
      <p className="sr-only" aria-live="polite">Showing {itemLabel} {active + 1} of {items.length}</p>
    </section>
  );
}
