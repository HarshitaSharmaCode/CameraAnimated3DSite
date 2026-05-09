"use client";

import { useRef } from "react";
import styles from "./BundlesCarousel.module.scss";

export interface BundleItem {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface BundlesCarouselProps {
  bundles: BundleItem[];
}

export function BundlesCarousel({ bundles }: BundlesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const offsetRef = useRef(0);
  const dragging = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startX.current = e.clientX - offsetRef.current;
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !trackRef.current) return;
    const next = e.clientX - startX.current;
    offsetRef.current = next;
    trackRef.current.style.transform = `translateX(${next}px)`;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    try {
      trackRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  return (
    <section id="buy" className={styles.section}>
      <h2 className={styles.title}>Shop I-2 Bundles</h2>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {bundles.map((b) => (
            <article key={b.id} className={styles.card}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt="" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.price}>{b.price}</p>
                <span className={styles.buy}>Buy now</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
