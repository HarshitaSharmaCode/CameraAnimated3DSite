"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroVideo } from "@/components/HeroVideo/HeroVideo";
import { SiteNav } from "@/components/SiteNav/SiteNav";
import styles from "./Hero.module.scss";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface HeroProps {
  onWatchFilm?: () => void;
}

export function Hero({ onWatchFilm }: HeroProps) {
  const titleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end end"],
  });

  // Stays dim until scroll reaches mid-point of the paragraph, then fades to full
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.1, 1]);

  return (
    <header className={styles.hero}>
      <div className={styles.videoSection}>
        <SiteNav />
        <div className={styles.videoWrap}>
          <HeroVideo />
          <div className={styles.overlay} aria-hidden />
        </div>
      </div>
      <motion.div
        className={styles.content}
        variants={{
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.div ref={titleRef} style={{ opacity: titleOpacity }}>
          <motion.h1 className={styles.title} variants={reveal}>
            Introducing the Polaroid I-2. Engineered and designed for craft, it's the first analog instant camera with built-in manual controls. Pair it with the sharpest-ever Polaroid lens and the unique chemistry of Polaroid film, and you have an instant craft tool made for the tactile, creative pursuit of analog photography.
          </motion.h1>
        </motion.div>
        <motion.div className={styles.ctaRow} variants={reveal}>
          <a className={styles.ctaPrimary} href="#buy">
            Buy now €699.99
          </a>
          <button type="button" className={styles.ctaGhost} onClick={onWatchFilm}>
            Watch I-2 movie
          </button>
        </motion.div>
      </motion.div>
    </header>
  );
}
