"use client";

import { useEffect, useRef } from "react";

const HERO_POSTER =
  "https://i2-camera.polaroid.com/images/discover/intro-poster.jpg";

const HERO_MP4 =
  "https://cdn.sanity.io/files/66aqnbcn/staging/0afe541fae27e7fa9dce8195192062bc99cb7de3.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={HERO_MP4}
      muted
      loop
      playsInline
      poster={HERO_POSTER}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
