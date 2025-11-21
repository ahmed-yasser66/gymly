export default function GallerySkeleton() {
  return (
    <section
      className="max-w-wide mx-auto mt-40 px-10 2xl:px-0"
      id="gallerySection"
    >
      <p className="text-primary mb-20 text-5xl">&#47;&#47;&#47; Gallery</p>
      <div className="wrapper columns-2 md:columns-3 lg:columns-4 [&>div]:mt-10 [&>div]:rounded-sm">
        {/* Image skeleton placeholders with varying heights for masonry effect */}
        <div className="h-64 w-full animate-pulse bg-gray-800"></div>
        <div className="h-80 w-full animate-pulse bg-gray-800"></div>
        <div className="h-72 w-full animate-pulse bg-gray-800"></div>
        <div className="h-96 w-full animate-pulse bg-gray-800"></div>
        <div className="h-64 w-full animate-pulse bg-gray-800"></div>
        <div className="h-88 w-full animate-pulse bg-gray-800"></div>
        <div className="h-80 w-full animate-pulse bg-gray-800"></div>
      </div>
    </section>
  );
}
