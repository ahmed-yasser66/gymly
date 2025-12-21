import { Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ExerciseCard({
  name,
  id,
  difficulty,
  gifUrl,
  description,
  target,
}: {
  [key: string]: string;
}) {
  return (
    <div className="flex w-full items-center justify-center bg-black lg:min-h-fit">
      <Link
        href={`/exercises/${id}`}
        className="w-full overflow-hidden rounded-2xl border-2 border-yellow-400 bg-black transition-all duration-300 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
            <div className="absolute top-4 left-4 z-10 rounded-lg bg-yellow-400 px-5 py-2 text-2xl font-bold text-black">
              {name}
            </div>
            <div className="relative flex h-full min-h-[300px] w-full items-center justify-center">
              <Image
                src={gifUrl}
                alt={name}
                className="max-h-full max-w-full object-contain"
                width={300}
                height={300}
                quality={75}
                fetchPriority="auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4ehHgAGuQI8M1McSAAAAABJRU5ErkJggg=="
                unoptimized
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between bg-black p-6 sm:p-8 lg:p-10">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-bold text-yellow-400">{name}</h2>
                <span className="rounded-full bg-yellow-400 px-4 py-2 text-2xl font-bold text-black">
                  {difficulty}
                </span>
              </div>

              <p className="mb-6 text-4xl leading-relaxed text-gray-300">
                {description}
              </p>

              {/* Target Muscle */}
              <div className="mb-6 rounded-lg border border-yellow-400 bg-gray-900 p-4">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-yellow-400" />
                  <div>
                    <p className="mb-1 text-4xl font-bold text-yellow-400">
                      Target Muscle
                    </p>
                    <p className="text-3xl font-bold text-white">{target}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full rounded-lg bg-yellow-400 py-3 font-bold text-black transition-colors duration-300 hover:bg-yellow-300 sm:py-4">
              Start Exercise
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
