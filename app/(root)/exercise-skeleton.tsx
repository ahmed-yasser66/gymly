export default function ExerciseCardSkeleton() {
  return (
    <div className="flex w-full items-center justify-center bg-black lg:min-h-fit">
      <div className="w-full overflow-hidden rounded-2xl border-2 border-gray-800 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section Skeleton */}
          <div className="relative flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
            {/* Name badge skeleton */}
            <div className="absolute top-4 left-4 z-10 h-10 w-32 animate-pulse rounded-lg bg-gray-300"></div>

            {/* Image placeholder */}
            <div className="flex h-full min-h-[300px] w-full items-center justify-center sm:min-h-[300px]">
              <div className="h-64 w-64 animate-pulse rounded-lg bg-gray-200"></div>
            </div>
          </div>

          {/* Content Section Skeleton */}
          <div className="flex flex-col justify-between bg-black p-6 sm:p-8 lg:p-10">
            <div>
              {/* Header skeleton */}
              <div className="mb-6 flex items-center justify-between">
                <div className="h-8 w-40 animate-pulse rounded bg-gray-800"></div>
                <div className="h-10 w-24 animate-pulse rounded-full bg-gray-800"></div>
              </div>

              {/* Description skeleton */}
              <div className="mb-6 space-y-3">
                <div className="h-6 w-full animate-pulse rounded bg-gray-800"></div>
                <div className="h-6 w-5/6 animate-pulse rounded bg-gray-800"></div>
                <div className="h-6 w-4/6 animate-pulse rounded bg-gray-800"></div>
              </div>

              {/* Target Muscle skeleton */}
              <div className="mb-6 rounded-lg border border-gray-800 bg-gray-900 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 animate-pulse rounded bg-gray-800"></div>
                  <div className="flex-1">
                    <div className="mb-2 h-5 w-32 animate-pulse rounded bg-gray-800"></div>
                    <div className="h-5 w-24 animate-pulse rounded bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button skeleton */}
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-800 sm:h-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
