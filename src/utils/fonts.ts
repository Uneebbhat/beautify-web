import localFont from "next/font/local";

const clashGrotesk = localFont({
  variable: "--font-clash",
  src: [
    {
      path: "../../public/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export { clashGrotesk };
