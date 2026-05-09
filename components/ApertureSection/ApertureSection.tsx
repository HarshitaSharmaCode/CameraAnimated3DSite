"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import styles from "./ApertureSection.module.scss";

const FRAME =
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80";

export function ApertureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current) return;
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (el.offsetHeight - window.innerHeight)),
      );
      const scale = 3.6 - progress * 2.6;
      const blur = 5 - progress * 5;
      imgRef.current.style.transform = `scale(${scale})`;
      imgRef.current.style.filter = `blur(${blur}px)`;
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
        <span className={styles.eyebrow}>Aperture up to f8</span>
        <h2 className={styles.title}>
          Control aperture to craft with light — seven f-stops from largest to f64.
        </h2>
        <div className={styles.frame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={imgRef} src={FRAME} alt="" />
        </div>
      </div>
    </section>
  );
}
