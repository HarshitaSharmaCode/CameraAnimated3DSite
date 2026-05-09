import localFont from "next/font/local";

export const siteFont = localFont({
  src: [
    { path: "../public/fonts/RealHeadOFFC-Regular.woff2",  weight: "400", style: "normal" },
    { path: "../public/fonts/RealHeadOFFC-Book.woff2",     weight: "350", style: "normal" },
    { path: "../public/fonts/RealHeadOFFC-Medium.woff2",   weight: "500", style: "normal" },
    { path: "../public/fonts/RealHeadOFFC-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--real-head-offc",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
