import { Metadata } from "next";

import Hero from "./hero";
import Merch from "./merch";
import Gallery from "./gallery";
import Exercise from "./exercise";
import { Suspense } from "react";
import ExerciseCardSkeleton from "./exercise-skeleton";

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
    <main>
      <Hero />
      <Merch />
      <Gallery />
      <Suspense fallback={<section
        className="section-lazy max-w-wide mx-auto mt-40 mb-40 px-10 2xl:px-0 space-y-20"
        id="exercises"
      >
        {Array.from({ length: 10 }, (_, idx) => (
          <ExerciseCardSkeleton key={idx} />
        ))}
      </section>}>
        <Exercise />
      </Suspense>
    </main>
  );
}
