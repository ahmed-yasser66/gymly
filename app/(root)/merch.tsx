"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import shakerMockup from "@/public/shaker.png";
import bagMockup from "@/public/bag.png";
import whiteTshirtMockup from "@/public/white-tshirt.png";
import blackTshirtMockup from "@/public/black-tshirt.png";

gsap.registerPlugin(ScrollTrigger);

export default function Merch() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#merchSection",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.fromTo(
      "#merchSection",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );

    return () => tl.kill(); // cleanup on unmount
  }, []);

  return (
    <section
      className="section-lazy max-w-wide mx-auto mt-40 px-10 lg:mt-32 2xl:px-0"
      id="merchSection"
    >
      <p className="text-primary mb-20 text-4xl">
        &#47;&#47;&#47; GET OUR MERCH
      </p>
      <div className="wrapper grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16 lg:grid-cols-4">
        <div className="relative h-fit">
          <Image
            src={shakerMockup}
            alt="shaker"
            className="aspect-square object-contain"
            loading="lazy"
          />
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2">
              Shaker
            </p>
          </div>
        </div>
        <div className="relative h-fit">
          <Image
            src={whiteTshirtMockup}
            alt="shaker"
            className="aspect-square object-contain"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2">
              T-shirt
            </p>
          </div>
        </div>
        <div className="relative h-fit">
          <Image
            src={bagMockup}
            alt="shaker"
            className="aspect-square object-contain"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2">Bag</p>
          </div>
        </div>
        <div className="relative h-fit">
          <Image
            src={blackTshirtMockup}
            alt="shaker"
            className="aspect-square object-contain"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div className="absolute -bottom-20 -z-10 h-1/2 w-full bg-[#3b3b3b]">
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2">
              T-shirt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
