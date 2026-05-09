"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { Heading } from "@/components/Heading/Heading";
import styles from "./IntroHeading.module.scss";

interface IntroHeadingProps {
  onWatchFilm?: () => void;
}

export function IntroHeading({ onWatchFilm }: IntroHeadingProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="discover"
      className={styles.section}
      style={
        {
          ["--grid-area-medium"]: "720",
        } as CSSProperties
      }
    >
      <div className={styles.inner}>
        <p className={styles.kicker}>Built-in manual controls</p>
        <Heading sectionRef={sectionRef} level={1}>
          Master your craft with 6 camera modes
        </Heading>
        <div className={styles.ctaRow}>
          <a className={styles.cta} href="#modes">
            Explore all modes
          </a>
          <button
            type="button"
            className={`${styles.cta} ${styles.ghost}`}
            onClick={onWatchFilm}
          >
            Watch I-2 movie
          </button>
        </div>
      </div>
    </section>
  );
}
