import Image from "next/image";

import img1 from "@/public/gallery/athletic-girl-does-exercises-using-sports-equipment-gym.webp";
import img2 from "@/public/gallery/muscular-man-looking-dumbbell.webp";
import img3 from "@/public/gallery/muscular-man-training-back-with-resistance-band.webp";
import img4 from "@/public/gallery/muscular-shirtless-athlete-doing-exercise-with-dumbbells-while-sits-bench-gym.webp";
import img5 from "@/public/gallery/strong-man-training-gym.webp";
import img6 from "@/public/gallery/woman-helping-man-gym.webp";
import img7 from "@/public/gallery/woman-training-with-barbell-shoulders.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];
export default function Gallery() {
  return (
    <section
      className="section-lazy max-w-wide mx-auto mt-40 px-10 2xl:px-0"
      id="gallerySection"
    >
      <p className="text-primary mb-20 text-5xl">&#47;&#47;&#47; Gallery</p>
      <div className="wrapper columns-2 md:columns-3 lg:columns-4 [&>img]:mt-10 [&>img]:rounded-sm">
        {images.map((img, idx) => {
          return (
            <Image
              key={idx}
              src={img}
              alt="image from gym"
              quality={75}
              loading="lazy"
              className="gallery__image size-full"
              width={500}
              height={500}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4ehHgAGuQI8M1McSAAAAABJRU5ErkJggg=='
            />
          );
        })}
      </div>
    </section>
  );
}
