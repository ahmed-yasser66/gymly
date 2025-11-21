import { Dumbbell, Home } from "lucide-react";
import Link from "next/link";
export default function NotFound() {
  return (
    <section className="my-20 flex min-h-screen items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="animate-pulse rounded-full bg-yellow-400 p-3">
            <Dumbbell className="h-8 w-8 text-black sm:h-10 sm:w-10" />
          </div>
          <span className="text-2xl font-bold text-yellow-400 sm:text-5xl">
            GYMLY
          </span>
        </div>

        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="mb-4 text-8xl leading-none font-bold tracking-tight text-yellow-400 sm:text-9xl lg:text-[200px]">
            404
          </h1>
          <div className="mx-auto mb-6 h-1 w-32 bg-yellow-400 sm:w-40"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            PAGE <span className="text-yellow-400">NOT FOUND</span>
          </h2>
          <p className="mx-auto max-w-5xl leading-relaxed text-gray-300">
            Looks like this page skipped leg day and disappeared! The page
            you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Suggestions Box */}
        <div className="mx-auto mb-8 max-w-4xl rounded-xl border-2 border-yellow-400 bg-black p-6 sm:mb-12 sm:p-8">
          <h3 className="mb-4 text-xl font-bold text-yellow-400 sm:text-5xl">
            Don&apos;t Give Up! Try This:
          </h3>
          <ul className="space-y-3 text-left">
            <li className="flex items-center gap-3 text-gray-300">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400"></div>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400"></div>
              <span>Return to the homepage</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400"></div>
              <span>Use the search function</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400"></div>
              <span>Contact us if you need help</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={"/"}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-8 py-3 font-bold text-black transition-all duration-300 hover:bg-yellow-300 sm:w-auto sm:py-4"
          >
            <Home className="size-10 transition-transform group-hover:scale-110" />
            Back to Home
          </Link>
        </div>

        {/* Fun Fitness Quote */}
        <div className="mt-12 sm:mt-16">
          <p className="font-bold text-yellow-400 italic">
            &quot;The only bad workout is the one that didn&apos;t happen...
            just like this page!&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
