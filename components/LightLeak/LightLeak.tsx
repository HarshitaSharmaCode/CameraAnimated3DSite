"use client";

import { useEffect, useRef } from "react";
import styles from "./LightLeak.module.scss";

interface LightLeakProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function LightLeak({ sectionRef }: LightLeakProps) {
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !leftRef.current || !rightRef.current) return;
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (el.offsetHeight - window.innerHeight)),
      );
      const xLeft = progress * -10;
      const yLeft = progress * 5;
      const xRight = 20 + progress * 10;
      const yRight = progress * -5;
      const rotate = progress * 15;
      leftRef.current.style.transform =
        `translateX(${xLeft}%) translateY(${yLeft}%) rotate(${rotate}deg) translateZ(0)`;
      rightRef.current.style.transform =
        `translateX(${xRight}%) translateY(${yRight}vh) rotate(${-rotate}deg) translateZ(0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <div className={styles.lightLeakContainer}>
      <span ref={leftRef} className={styles.lightLeakLeft} />
      <span ref={rightRef} className={styles.lightLeakRight} />
    </div>
  );
}
