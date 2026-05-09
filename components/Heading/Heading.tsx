"use client";

import { useEffect, useRef } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement | null>;
  level?: 1 | 2 | 3;
}

export function Heading({
  children,
  sectionRef,
  level = 2,
}: HeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headingRef.current) return;
      const el = sectionRef.current;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (el.offsetHeight - window.innerHeight)),
      );
      const pos = progress * 200 - 100;
      headingRef.current.style.setProperty(
        "--background-position",
        String(pos),
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  const Tag = level === 1 ? "h1" : level === 3 ? "h3" : "h2";
  return (
    <Tag ref={headingRef} className={styles.heading}>
      {children}
    </Tag>
  );
}
