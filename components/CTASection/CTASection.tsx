"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import styles from "./CTASection.module.scss";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function CTASection() {
  return (
    <motion.section
      className={styles.section}
      style={
        {
          ["--grid-area-medium"]: "560",
        } as CSSProperties
      }
      variants={{
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className={styles.inner}>
        <motion.p className={styles.kicker} variants={reveal}>
          Made for the Imperfectionists
        </motion.p>
        <motion.h2 className={styles.title} variants={reveal}>
          Buy now €699.99
        </motion.h2>
        <motion.p className={styles.lede} variants={reveal}>
          Greater control with the I-2 app — pair Bluetooth features with manual craft on
          film.
        </motion.p>
        <motion.div className={styles.ctas} variants={reveal}>
          <a className={styles.primary} href="#buy">
            Compare bundles
          </a>
          <a className={styles.secondary} href="#discover">
            Discover more
          </a>
        </motion.div>
        <motion.div variants={reveal}>
          <p className={styles.apps}>I-2 app</p>
          <div className={styles.appLinks}>
            <a href="#">For Apple iOS</a>
            <a href="#">For Android</a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
