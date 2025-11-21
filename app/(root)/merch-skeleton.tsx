export default function MerchSkeleton() {
  return (
    <section
      className="max-w-wide mx-auto mt-40 px-10 lg:mt-32 2xl:px-0"
      id="merchSection"
    >
      <p className="text-primary mb-20 text-4xl">
        &#47;&#47;&#47; GET OUR MERCH
      </p>
      <div className="wrapper grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16 lg:grid-cols-4">
        {/* Product Card 1 */}
        <div className="relative h-fit">
          <div className="aspect-square w-full animate-pulse rounded bg-gray-800"></div>
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <div className="absolute bottom-8 left-1/2 h-4 w-20 -translate-x-1/2 animate-pulse rounded bg-gray-700"></div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative h-fit">
          <div className="aspect-square w-full animate-pulse rounded bg-gray-800"></div>
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <div className="absolute bottom-8 left-1/2 h-4 w-20 -translate-x-1/2 animate-pulse rounded bg-gray-700"></div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative h-fit">
          <div className="aspect-square w-full animate-pulse rounded bg-gray-800"></div>
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <div className="absolute bottom-8 left-1/2 h-4 w-20 -translate-x-1/2 animate-pulse rounded bg-gray-700"></div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative h-fit">
          <div className="aspect-square w-full animate-pulse rounded bg-gray-800"></div>
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <div className="absolute bottom-8 left-1/2 h-4 w-20 -translate-x-1/2 animate-pulse rounded bg-gray-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
