"use client";

import { motion } from "framer-motion";
import styles from "./CTASection.module.scss";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const InfoIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" aria-hidden style={{ fontSize: "inherit" }}>
    <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
    <path d="M9 8v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="9" cy="5.5" r="0.85" fill="currentColor" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden style={{ fontSize: "inherit" }}>
    <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function CTASection() {
  return (
    <motion.section
      className={styles.section}
      variants={{
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Left column */}
      <motion.div className={styles.col} variants={reveal}>
        <h2 className={styles.title}>
          How to use the<br />Polaroid I-2
        </h2>
        <a className={styles.link} href="#">
          <InfoIcon />
          <span>Learn more</span>
        </a>
      </motion.div>

      <div className={styles.divider} aria-hidden />

      {/* Right column */}
      <motion.div className={styles.col} variants={reveal}>
        <h2 className={styles.title}>
          Greater control<br />with the I-2 app
        </h2>
        <div className={styles.appLinks}>
          <a className={styles.link} href="#">
            <DownloadIcon />
            <span>For Apple iOS</span>
          </a>
          <a className={styles.link} href="#">
            <DownloadIcon />
            <span>For Android</span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
