"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import styles from "./Imperfectionists.module.scss";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const artists = [
  {
    name: "Coco Capitán",
    role: "Imperfectionist",
    blurb:
      "A breaker of forms — craft moored in chaos and unexpected beauty.",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    name: "Max Siedentopf",
    role: "Imperfectionist",
    blurb:
      "Celebrates the accidental, the unconventional, and the imperfect.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    name: "Kotori Kawashima",
    role: "Imperfectionist",
    blurb: "Finds poetry and beauty in the everyday.",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
];

export function Imperfectionists() {
  return (
    <section
      className={styles.section}
      style={
        {
          ["--grid-area-medium"]: "600",
        } as CSSProperties
      }
    >
      <motion.div
        className={styles.header}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p className={styles.eyebrow} variants={reveal}>
          Meet I-2 photographers
        </motion.p>
        <motion.h2 className={styles.title} variants={reveal}>
          The Imperfectionists
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {artists.map((a) => (
          <motion.article key={a.name} className={styles.card} variants={reveal}>
            <div className={styles.photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.photo} alt="" />
            </div>
            <h3 className={styles.name}>{a.name}</h3>
            <p className={styles.role}>{a.role}</p>
            <p className={styles.blurb}>{a.blurb}</p>
            <a className={styles.link} href={a.href}>
              See their I-2 story
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
