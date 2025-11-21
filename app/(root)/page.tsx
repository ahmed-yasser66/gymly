import { Metadata } from "next";

import Hero from "./hero";
import dynamic from "next/dynamic";
import GallerySkeleton from "./gallery-skeleton";
import MerchSkeleton from "./merch-skeleton";

const Exercise = dynamic(() => import("./exercise"));
const Merch = dynamic(() => import("./merch"), {
  loading: () => <MerchSkeleton />,
});
const Gallery = dynamic(() => import("./gallery"), {
  loading: () => <GallerySkeleton />,
});

export const metadata: Metadata = {
  title: "GYMLY",
  description:
    "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body. Join GYMLY today and unlock your best self with a supportive gym community, group fitness classes, and science-based training programs.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GYMLY",
    description:
      "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body.",
    url: "http://localhost:3000",
    siteName: "GYMLY",
    images: [
      {
        url: "http://localhost:3000/opengraph.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://ahmed-yasser.vercel.app"),
  keywords: ["GYMLY", "Gym", "workout", "exercises"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Merch />
      <Gallery />
      <Exercise />
    </>
  );
}
