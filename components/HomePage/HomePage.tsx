"use client";

import { useState } from "react";

import { ApertureSection } from "@/components/ApertureSection/ApertureSection";
import { ArtistVideoModal } from "@/components/ArtistVideoModal/ArtistVideoModal";
import { BundlesCarousel } from "@/components/BundlesCarousel/BundlesCarousel";
import type { BundleItem } from "@/components/BundlesCarousel/BundlesCarousel";
import {
  CameraModes,
  type CameraModeItem,
} from "@/components/CameraModes/CameraModes";
import { CTASection } from "@/components/CTASection/CTASection";
import { Hero } from "@/components/Hero/Hero";
import { Imperfectionists } from "@/components/Imperfectionists/Imperfectionists";
import { ImperfectionistsGallery } from "@/components/ImperfectionistsGallery/ImperfectionistsGallery";
import { IntroHeading } from "@/components/IntroHeading/IntroHeading";
import { QuoteSection } from "@/components/QuoteSection/QuoteSection";
import { ScrollSequence } from "@/components/ScrollSequence/ScrollSequence";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

const DEMO_CLIP =
  "https://cdn.sanity.io/files/66aqnbcn/staging/0afe541fae27e7fa9dce8195192062bc99cb7de3.mp4";

const cameraModes: CameraModeItem[] = [
  {
    id: "aperture",
    name: "Aperture mode",
    image: "https://picsum.photos/seed/i2mode1/640/780",
  },
  {
    id: "auto",
    name: "Auto mode",
    image: "https://picsum.photos/seed/i2mode2/640/780",
  },
  {
    id: "shutter",
    name: "Shutter mode",
    image: "https://picsum.photos/seed/i2mode3/640/780",
  },
  {
    id: "mode4",
    name: "Manual mode",
    image: "https://picsum.photos/seed/i2mode4/640/780",
  },
  {
    id: "mode5",
    name: "Self‑timer",
    image: "https://picsum.photos/seed/i2mode5/640/780",
  },
  {
    id: "mode6",
    name: "Double exposure",
    image: "https://picsum.photos/seed/i2mode6/640/780",
  },
];

const POLAROID_STATIC = "https://i2-camera.polaroid.com/_next/static/media";

const bundles: BundleItem[] = [
  {
    id: "b1",
    title: "Polaroid I-2 & i-Type Color Film Set",
    price: "€699.99",
    image: `${POLAROID_STATIC}/bundle-type-film.5143d091.png`,
  },
  {
    id: "b2",
    title: "Polaroid I-2 Starter Set",
    price: "€733.97",
    image: `${POLAROID_STATIC}/bundle-film-pack.4f94cb8e.png`,
  },
  {
    id: "b3",
    title: "Polaroid I-2 & Premium Shoulder Strap Set",
    price: "€734.98",
    image: `${POLAROID_STATIC}/bundle-shoulder-strap.90157290.png`,
  },
  {
    id: "b4",
    title: "Polaroid I-2 & Shoulder Holster Set",
    price: "€786.97",
    image: `${POLAROID_STATIC}/bundle-film-shoulder-holster.06abf7c5.png`,
  },
  {
    id: "b5",
    title: "Polaroid I-2 Travel Set",
    price: "€786.97",
    image: `${POLAROID_STATIC}/bundle-type-film-pack.50dafca4.png`,
  },
];

export function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Hero onWatchFilm={() => setVideoOpen(true)} />
      <IntroHeading onWatchFilm={() => setVideoOpen(true)} />
      <ScrollSequence
        frameCount={169}
        frameCountMobile={164}
        frameFolder="control-panel"
        frameFolderMobile="control-panel-mobile"
        ariaLabel="Control panel animation showing the 6 different camera modes"
        caption={{
          eyebrow: "Built-in manual controls",
          tone: "tangerine",
          title: "Dial through craft — six discrete modes on the top plate.",
        }}
      />
      <CameraModes modes={cameraModes} />
      <QuoteSection
        quote="I'm not into perfection. Chaos. Spontaneity. Randomness. That's where reality exists."
        attribution="Coco Capitán, Imperfectionist"
      />
      <ScrollSequence
        frameCount={82}
        frameFolder="lens-animation"
        ariaLabel="Autofocus 3-lens system and integrated Lidar light meter combination"
        caption={{
          eyebrow: "Autofocus 3-lens system",
          tone: "azure",
          title: "The sharpest-ever Polaroid lens — wider apertures and integrated LiDAR ranging.",
        }}
      />
      <ApertureSection />
      <QuoteSection
        quote="Life isn't perfect. Why should art be?"
        attribution="Max Siedentopf, Imperfectionist"
      />
      <ScrollSequence
        frameCount={36}
        frameFolder="viewfinder-animation"
        ariaLabel="Everything you need in one display"
        caption={{
          eyebrow: "Integrated viewfinder",
          tone: "sunset",
          title: "Craft through the viewfinder — distance, shutter, aperture, exposure.",
        }}
      />
      <ScrollSequence
        frameCount={248}
        frameFolder="exploded-animation"
        ariaLabel="Exploded view of the Polaroid Now+"
        caption={{
          eyebrow: "Expertly engineered",
          tone: "spring",
          title: "Designed in-house around manual controls and the Japan-team lens.",
        }}
      />
      <Imperfectionists />
      <ImperfectionistsGallery />
      <CTASection />
      <BundlesCarousel bundles={bundles} />
      <SiteFooter />

      <ArtistVideoModal
        url={DEMO_CLIP}
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
