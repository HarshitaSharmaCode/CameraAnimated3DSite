"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import styles from "./FilmSection.module.scss";

const FILM =
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80";

export function FilmSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current || !overlayRef.current) return;
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (el.offsetHeight - window.innerHeight)),
      );
      const y = (1 - progress) * 30;
      imgRef.current.style.transform = `translateY(${y}rem)`;
      overlayRef.current.style.opacity = String(1 - progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={
        {
          ["--grid-area-medium"]: "560",
        } as CSSProperties
      }
    >
      <div className={styles.sticky}>
        <span className={styles.eyebrow}>Polaroid Film</span>
        <p className={styles.copy}>
          Get the best out of our unique chemistry — next-level clarity on square frame
          film.
        </p>
        <div className={styles.frameWrap}>
          <div className={styles.frame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={imgRef} src={FILM} alt="" />
          </div>
          <div ref={overlayRef} className={styles.overlay} aria-hidden />
        </div>
      </div>
    </section>
  );
}
