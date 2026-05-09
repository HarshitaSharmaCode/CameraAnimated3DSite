"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CameraModes.module.scss";

export interface CameraModeItem {
  id: string;
  name: string;
  image: string;
}

interface CameraModesProps {
  modes: CameraModeItem[];
}

export function CameraModes({ modes }: CameraModesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = modes.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (el.offsetHeight - window.innerHeight)),
      );
      setActiveIndex(Math.min(n - 1, Math.floor(progress * n)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [n]);

  const cardClass = (i: number) => {
    if (i === activeIndex) return styles.active;
    if (i === activeIndex + 1) return styles.below;
    if (i > activeIndex + 1) return styles.further;
    return styles.hidden;
  };

  return (
    <section ref={sectionRef} id="modes" className={styles.section}>
      <div className={styles.stickyContainer}>
        <div className={styles.stack}>
          {modes.map((mode, i) => (
            <div
              key={mode.id}
              className={`${styles.modeCard} ${cardClass(i)}`}
              aria-hidden={i !== activeIndex}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mode.image} alt="" />
              <span
                className={`${styles.label} ${i === activeIndex ? styles.visible : ""}`}
              >
                {mode.name}
              </span>
            </div>
          ))}
        </div>
        <p className={styles.caption}>Scroll through modes</p>
      </div>
    </section>
  );
}
