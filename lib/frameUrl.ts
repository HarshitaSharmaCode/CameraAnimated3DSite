const FRAME_ORIGIN = "https://i2-camera.polaroid.com";

/**
 * Direct URL for a sequence frame.
 *
 * We deliberately do NOT route these through Next.js' `/_next/image` optimizer:
 * each `ScrollSequence` mounts dozens-to-hundreds of frames at once, and
 * funnelling them through the dev optimizer triggers upstream-fetch storms
 * that abort with `TimeoutError` (DOMException code 23). The upstream JPEGs
 * are already correctly sized, so a direct fetch is both faster and stable.
 */
export function getFrameSrc(folder: string, index: number): string {
  const name = `${String(index).padStart(5, "0")}.jpg`;
  return `${FRAME_ORIGIN}/images/discover/${folder}/${name}`;
}
