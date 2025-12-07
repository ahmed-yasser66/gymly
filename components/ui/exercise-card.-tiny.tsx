import Image from "next/image";
import TransitionLink from "../transition-link";
import Head from "next/head";

// ============================================================================
// TYPES
// ============================================================================

interface ExerciseCardTinyProps {
  id: string;
  difficulty: string;
  gifUrl: string;
  bodyPart: string;
  name: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const DIFFICULTY_COLORS = {
  beginner: "bg-green-800",
  intermediate: "bg-yellow-800",
  advanced: "bg-red-800",
} as const;

// ============================================================================
// UTILITIES
// ============================================================================

const getDifficultyColor = (difficulty: string): string => {
  const key = difficulty.toLowerCase() as keyof typeof DIFFICULTY_COLORS;
  return DIFFICULTY_COLORS[key] || "bg-gray-800";
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function ExerciseCardTiny(props: ExerciseCardTinyProps) {
  const { id, difficulty, gifUrl, bodyPart, name } = props;

  return (
    <TransitionLink
      href={`/exercises/${id}`}
      className="group block cursor-pointer overflow-hidden rounded-lg bg-zinc-900 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20"
    >
      <Head>
        <link rel="preload" as="image" href={gifUrl} fetchPriority="high" />
      </Head>
      {/* Image Container - Fixed height to prevent CLS */}
      <div className="relative h-80 w-full overflow-hidden bg-zinc-800">
        <Image
          src={gifUrl}
          alt={`${name} exercise demonstration`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4ehHgAGuQI8M1McSAAAAABJRU5ErkJggg=='
        />

        {/* Difficulty Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`${getDifficultyColor(difficulty)} rounded-full px-3 py-1 text-sm font-bold text-white capitalize shadow-lg sm:text-base`}
          >
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content - Fixed heights to prevent CLS */}
      <div className="p-5">
        {/* Title - Fixed height with line clamp */}
        <h3 className="mb-2 line-clamp-2 h-20 text-2xl font-bold text-white sm:text-3xl">
          {name}
        </h3>

        {/* Body Part Badge */}
        <div className="mb-4 flex items-center">
          <span className="rounded-md bg-zinc-800 px-3 py-1 text-xl font-semibold tracking-wider text-yellow-400 uppercase sm:text-2xl">
            {bodyPart}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-4 h-16 w-full">
          <span className="flex h-full w-full items-center justify-center rounded-lg bg-yellow-400 font-bold text-black transition-colors duration-300 group-hover:bg-yellow-500">
            View Details
          </span>
        </div>
      </div>
    </TransitionLink>
  );
}
