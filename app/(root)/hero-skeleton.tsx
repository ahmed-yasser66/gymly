export default function HeroSkeleton() {
  return (
    <section className="max-w-wide mx-auto mt-20 flex flex-col items-start justify-between px-10 lg:mt-32 lg:flex-row 2xl:px-0">
      <div className="info order-2 lg:order-1">
        {/* Text lines skeleton */}
        <div className="relative">
          <div className="mb-4 h-24 w-full max-w-2xl animate-pulse rounded-lg bg-gray-800 lg:h-32"></div>
          <div className="h-24 w-full max-w-2xl animate-pulse rounded-lg bg-gray-800 lg:h-32"></div>
        </div>

        {/* Description skeleton */}
        <div className="mt-14 max-w-4xl space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-800"></div>
          <div className="h-4 w-full animate-pulse rounded bg-gray-800"></div>
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-800"></div>
        </div>

        {/* Button skeleton */}
        <div className="mt-14 h-16 w-52 animate-pulse rounded-2xl bg-gray-800"></div>
      </div>

      {/* Image skeleton */}
      <div className="order-1 h-96 w-full animate-pulse rounded-md bg-gray-800 lg:order-2 lg:h-[600px] lg:max-w-1/2"></div>
    </section>
  );
}
