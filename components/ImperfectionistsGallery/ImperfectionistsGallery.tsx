"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./ImperfectionistsGallery.module.scss";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
    label: "In studio — square frame energy",
  },
  {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8e7b?auto=format&fit=crop&w=900&q=80",
    label: "Portrait latitude — I-2 autofocus",
  },
  {
    src: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=900&q=80",
    label: "Film chemistry in daylight",
  },
];

export function ImperfectionistsGallery() {
  return (
    <div className={styles.wrap}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay]}
        slidesPerView={1.15}
        spaceBetween={16}
        centeredSlides
        loop
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2.2, spaceBetween: 24 },
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.label}>
            <div className={styles.slide}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt="" />
            </div>
            <p className={styles.caption}>{s.label}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
