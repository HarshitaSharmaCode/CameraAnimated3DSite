import "@/styles/globals.scss";
import "swiper/css";

import type { AppProps } from "next/app";

import { siteFont } from "@/lib/fonts";
import { useVhFix } from "@/hooks/useVhFix";

export default function App({ Component, pageProps }: AppProps) {
  useVhFix();

  return (
    <div className={`${siteFont.variable} ${siteFont.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
