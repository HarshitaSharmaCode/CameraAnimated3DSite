"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { LightLeak } from "@/components/LightLeak/LightLeak";
import styles from "./QuoteSection.module.scss";

interface QuoteSectionProps {
  quote: string;
  attribution: string;
}

export function QuoteSection({ quote, attribution }: QuoteSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={
        {
          ["--grid-area-medium"]: "640",
        } as CSSProperties
      }
    >
      <LightLeak sectionRef={sectionRef} />
      <div className={styles.inner}>
        <blockquote className={styles.quote}>{quote}</blockquote>
        <cite className={styles.attribution}>{attribution}</cite>
      </div>
    </section>
  );
}
