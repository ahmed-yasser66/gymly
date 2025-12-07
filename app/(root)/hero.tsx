import Image from "next/image";
import photo1 from "@/public/photo1.webp";
import Head from "next/head";
export default function Hero() {
  return (
    <section className="max-w-wide mx-auto mt-20 flex flex-col items-start justify-between px-10 lg:mt-32 lg:flex-row 2xl:px-0">
      <Head>
        <link rel="preload" as="image" href={'/photo1.webp'} fetchPriority="high" />
      </Head>
      <div className="info order-2 lg:order-1">
        <p className="relative text-[6rem] lg:text-[8.7rem] lg:leading-44">
          <span className=" font-bold">make your</span>
          <br />
          <span className=" font-bold">BODY SHAPE</span>
        </p>
        <p className=" mt-14 max-w-4xl">
          Being physically active enhances brain health, supports weight
          management, lowers the risk of various diseases, strengthens bones and
          muscles, and boosts your ability to perform daily activities.
        </p>
        <button className="bg-primary mt-14 rounded-2xl px-10 py-5 text-[2rem] font-semibold text-black">
          Get Started
        </button>
      </div>
      <Image
        src={photo1}
        alt="background lifting weights"
        className="order-1 w-full rounded-md object-cover lg:order-2 lg:max-w-1/2"
        fetchPriority="high"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={85}
        placeholder="blur"
      />
    </section>
  );
}
