"use client";

import dynamic from "next/dynamic";
import styles from "./ArtistVideoModal.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface ArtistVideoModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtistVideoModal({ url, isOpen, onClose }: ArtistVideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Video"
      onClick={onClose}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose}>
          ×
        </button>
        <ReactPlayer src={url} playing controls width="100%" height="100%" />
      </div>
    </div>
  );
}
