import { Filter } from "lucide-react";

export default function ExercisesSkeleton() {
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Skeleton */}
      <header className="mb-12">
        <div className="mb-4 h-14 w-96 animate-pulse rounded-lg bg-zinc-800" />
        <div className="h-7 w-80 animate-pulse rounded-lg bg-zinc-800" />
      </header>

      {/* Filter Section Skeleton */}
      <section className="my-16">
        <div className="mb-8 flex items-center gap-2">
          <Filter className="text-zinc-700" size={30} />
          <div className="h-10 w-64 animate-pulse rounded-lg bg-zinc-800" />
        </div>

        {/* Category Pills Skeleton */}
        <div className="flex flex-wrap gap-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-11 animate-pulse rounded-full bg-zinc-800"
              style={{ width: `${80 + Math.random() * 60}px` }}
            />
          ))}
        </div>
      </section>

      {/* Results Count Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-48 animate-pulse rounded bg-zinc-800" />
      </div>

      {/* Exercise Cards Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg"
          >
            {/* Image Skeleton */}
            <div className="aspect-square w-full animate-pulse bg-zinc-800" />

            {/* Content Skeleton */}
            <div className="p-4">
              {/* Title */}
              <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-zinc-800" />

              {/* Target Muscle */}
              <div className="mb-3 h-4 w-1/2 animate-pulse rounded bg-zinc-800" />

              {/* Tags Row */}
              <div className="flex gap-2">
                <div className="h-6 w-20 animate-pulse rounded-full bg-zinc-800" />
                <div className="h-6 w-24 animate-pulse rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button Skeleton */}
      <div className="mt-12 flex justify-center">
        <div className="h-14 w-64 animate-pulse rounded-full bg-zinc-800" />
      </div>
    </div>
  );
}