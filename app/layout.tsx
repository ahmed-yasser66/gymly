import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "./(root)/footer";

const outfit = localFont({
  display: "swap",
  preload: true,
  variable: "--font-outfit",
  src: "../public/outfit.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "GYMLY",
    template: "%s | GYMLY",
  },
  description:
    "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body. Join GYMLY today and unlock your best self with a supportive gym community, group fitness classes, and science-based training programs.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GYMLY",
    description:
      "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body.",
    url: "https://gymly-one.vercel.app/",
    siteName: "GYMLY",
    images: [
      {
        url: "https://gymly-one.vercel.app/opengraph.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://gymly-one.vercel.app/"),
  keywords: ["GYMLY", "Gym", "workout", "exercises"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://v2.exercisedb.io" />
        <link rel="dns-prefetch" href="https://v2.exercisedb.io" />
      </head>
      <body className={`${outfit.variable}`}>
        <Navbar />
        <div
          id="banner1"
          className="bg-primary fixed top-0 left-0 z-50 min-h-screen w-1/4"
        ></div>
        <div
          id="banner2"
          className="bg-primary fixed top-0 left-1/4 z-50 min-h-screen w-1/4"
        ></div>
        <div
          id="banner3"
          className="bg-primary fixed top-0 left-2/4 z-50 min-h-screen w-1/4"
        ></div>
        <div
          id="banner4"
          className="bg-primary fixed top-0 left-3/4 z-50 min-h-screen w-1/4"
        ></div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
