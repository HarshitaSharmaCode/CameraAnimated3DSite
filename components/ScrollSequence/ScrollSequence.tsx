"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Heading } from "@/components/Heading/Heading";
import { getFrameSrc } from "@/lib/frameUrl";
import styles from "./ScrollSequence.module.scss";

export type CaptionTone =
  | "tangerine"
  | "azure"
  | "chili"
  | "sunset"
  | "spring";

export interface ScrollCaption {
  eyebrow: string;
  title: React.ReactNode;
  tone?: CaptionTone;
}

interface ScrollSequenceProps {
  /** Desktop / default sequence length */
  frameCount: number;
  /** When `frameFolderMobile` is set, length on narrow viewports (<768px). */
  frameCountMobile?: number;
  frameFolder: string;
  frameFolderMobile?: string;
  ariaLabel: string;
  caption?: ScrollCaption;
}

export function ScrollSequence({
  frameCount,
  frameCountMobile,
  frameFolder,
  frameFolderMobile,
  ariaLabel,
  caption,
}: ScrollSequenceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(0);
  const allLoadedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [targetCount, setTargetCount] = useState(frameCount);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;

    const isMobile = window.innerWidth < 768;
    const activeFolder =
      isMobile && frameFolderMobile ? frameFolderMobile : frameFolder;
    const activeCount =
      isMobile && frameFolderMobile && frameCountMobile != null
        ? frameCountMobile
        : frameCount;

    setTargetCount(activeCount);

    loadedRef.current = 0;
    allLoadedRef.current = false;
    setReady(false);
    setLoadProgress(0);
    imagesRef.current = [];

    const currentFrameIndex = (): number => {
      const rect = section.getBoundingClientRect();
      const scrollSpan = section.offsetHeight - window.innerHeight;
      // Guard against zero/negative spans (section shorter than viewport) which
      // would otherwise produce NaN/Infinity here.
      const progress =
        scrollSpan > 0
          ? Math.max(0, Math.min(1, -rect.top / scrollSpan))
          : 0;
      return Math.min(activeCount - 1, Math.floor(progress * activeCount));
    };

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const x = (cw - iw * scale) / 2;
      const y = (ch - ih * scale) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      if (allLoadedRef.current) drawFrame(currentFrameIndex());
    };

    resize();
    window.addEventListener("resize", resize);

    let firstFramePainted = false;

    const bumpLoaded = (index: number, ok: boolean) => {
      if (cancelled) return;
      loadedRef.current++;
      setLoadProgress(loadedRef.current);

      // Paint as soon as the first usable frame arrives so the canvas isn't
      // blank while the rest of the sequence streams in.
      if (ok && !firstFramePainted && index === 0) {
        firstFramePainted = true;
        drawFrame(0);
      }

      if (loadedRef.current === activeCount) {
        allLoadedRef.current = true;
        setReady(true);
        drawFrame(currentFrameIndex());
      }
    };

    imagesRef.current = Array.from({ length: activeCount }, (_, i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = getFrameSrc(activeFolder, i);
      img.onload = () => bumpLoaded(i, true);
      img.onerror = () => bumpLoaded(i, false);
      return img;
    });

    const handleScroll = () => {
      if (tickingRef.current || !allLoadedRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        drawFrame(currentFrameIndex());
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelled = true;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, [frameCount, frameCountMobile, frameFolder, frameFolderMobile]);

  const toneClass =
    caption?.tone === "azure"
      ? styles.toneAzure
      : caption?.tone === "chili"
        ? styles.toneChili
        : caption?.tone === "sunset"
          ? styles.toneSunset
          : caption?.tone === "spring"
            ? styles.toneSpring
            : styles.toneTangerine;

  return (
    <section
      ref={sectionRef}
      className={styles.scrollSequence}
      aria-label={ariaLabel}
      style={
        {
          ["--grid-area-xsmall"]: "315",
          ["--grid-area-small"]: "480",
          ["--grid-area-medium"]: "600",
        } as CSSProperties
      }
    >
      <div className={styles.stickyContainer}>
        {caption ? (
          <div className={styles.caption}>
            <span className={`${styles.eyebrow} ${toneClass}`}>
              {caption.eyebrow}
            </span>
            <Heading sectionRef={sectionRef}>{caption.title}</Heading>
          </div>
        ) : null}
        {!ready ? (
          <div className={styles.loader} aria-live="polite">
            Loading sequence… {loadProgress}/{targetCount}
          </div>
        ) : null}
        <canvas ref={canvasRef} className={styles.canvas} />
        <span className={styles.gradientTopBottom} aria-hidden />
      </div>
    </section>
  );
}
