import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clashGrotesk } from "@/utils/fonts";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Beautify – Book Salons Near You | Best Salon Booking App in Pakistan",
    template: "%s | Beautify",
  },

  description:
    "Beautify is Pakistan’s smart salon booking app. Discover nearby salons, compare prices, unlock exclusive discounts, and book appointments instantly in Lahore and beyond.",

  applicationName: "Beautify",

  keywords: [
    "salon booking app Pakistan",
    "book salons near me",
    "best salons in Lahore",
    "beauty salon app Pakistan",
    "hair salon booking Lahore",
    "discounted salon services",
    "doorstep salon services Pakistan",
    "beauty app Pakistan",
    "online salon appointment",
    "Beautify app",
  ],

  authors: [{ name: "Beautify Team" }],
  creator: "Beautify",
  publisher: "Beautify",

  // metadataBase: new URL("https://www.beautify.pk"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Beautify – Book the Best Salons Near You",
    description:
      "Find top-rated salons near you, view services & discounts, and book appointments instantly with Beautify.",
    // url: "https://www.beautify.pk",
    siteName: "Beautify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beautify – Salon Booking App",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beautify – Salon Booking Made Easy",
    description:
      "Discover nearby salons, compare services, and book appointments instantly with Beautify.",
    images: ["/og-image.png"],
    creator: "@beautifyapp",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Beauty & Wellness",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${clashGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
