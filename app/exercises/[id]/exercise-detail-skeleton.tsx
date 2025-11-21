export default function ExerciseDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative h-[50rem] bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute right-0 bottom-0 left-0 p-6">
          <div className="max-w-wide mx-auto">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-8 w-32 rounded-full bg-zinc-700"></div>
              <div className="h-8 w-40 rounded-full bg-zinc-700"></div>
            </div>
            <div className="mb-2 h-12 w-3/4 rounded-lg bg-zinc-700"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Video Player Section Skeleton */}
        <div className="mb-8 rounded-lg bg-zinc-900 p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-7 w-7 rounded-full bg-zinc-700"></div>
            <div className="h-8 w-48 rounded-lg bg-zinc-700"></div>
          </div>
          <div className="aspect-video rounded-lg bg-zinc-800"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Instructions & Tips Skeleton */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description Skeleton */}
            <div className="rounded-lg bg-zinc-900 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-7 w-7 rounded-full bg-zinc-700"></div>
                <div className="h-10 w-40 rounded-lg bg-zinc-700"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-700"></div>
                <div className="h-4 w-full rounded bg-zinc-700"></div>
                <div className="h-4 w-3/4 rounded bg-zinc-700"></div>
              </div>
            </div>

            {/* Instructions Skeleton */}
            <div className="rounded-lg bg-zinc-900 p-6">
              <div className="mb-8 h-10 w-64 rounded-lg bg-zinc-700"></div>
              <ol className="space-y-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <li key={index} className="my-10 flex items-start gap-3">
                    <div className="size-14 flex-shrink-0 rounded-full bg-zinc-700"></div>
                    <div className="flex-1 space-y-2 pt-1">
                      <div className="h-4 w-full rounded bg-zinc-700"></div>
                      <div className="h-4 w-5/6 rounded bg-zinc-700"></div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right Column - Target Muscles Skeleton */}
            <div className="space-y-8">
              <div className="rounded-lg bg-zinc-900 p-6">
                <div className="mb-4 h-6 w-40 rounded-lg bg-zinc-700"></div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-12 w-32 rounded-lg bg-zinc-700"></div>
                  <div className="h-12 w-28 rounded-lg bg-zinc-700"></div>
                  <div className="h-12 w-36 rounded-lg bg-zinc-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
