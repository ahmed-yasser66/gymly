import { redirect } from "next/navigation";
import { PlayCircle, Info } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { Metadata } from "next";
import ExerciseDetailSkeleton from "./exercise-detail-skeleton";
import LiteYouTube from "@/components/ui/lite-youtube";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const { data } = await fetchExerciseData(id);

  if (!data) {
    return {
      title: "Exercise Not Found",
    };
  }

  return {
    title: `${data.name} - Exercise Guide`,
    description:
      data.description ||
      `Learn how to properly perform ${data.name}. Target: ${data.target}. Difficulty: ${data.difficulty}.`,
    openGraph: {
      title: `${data.name} - Exercise Guide`,
      description:
        data.description ||
        `Learn how to properly perform ${data.name}. Target: ${data.target}.`,
      images: [
        {
          url: data.gifUrl || "/default-exercise.gif",
          width: 800,
          height: 600,
          alt: data.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} - Exercise Guide`,
      description: `Target: ${data.target} | Difficulty: ${data.difficulty}`,
      images: [data.gifUrl || "/default-exercise.gif"],
    },
  };
}

// ============================================================================
// TYPES
// ============================================================================
interface IData {
  difficulty?: string;
  gifUrl?: string;
  name?: string;
  bodyPart?: string;
  instructions?: string[];
  description?: string;
  target?: string;
}

// ============================================================================
// UTILS
// ============================================================================
async function fetchExerciseData(id: string) {
  let data: IData = {};
  const res = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    {
      headers: {
        "x-rapidapi-key": process.env.API_KEY as string,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
      next: {
        revalidate: 3600,
      },
    },
  );
  if (!res.ok) {
    return redirect("/");
  }
  const json = await res.json();
  data = json;
  return { data };
}

export const RenderExerciseDetails = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  const { data } = await fetchExerciseData(id);
  const ytRes = await fetch(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${data.name}`,
    {
      headers: {
        "X-RapidAPI-Key": "d9914f36b8msh855006784bd0acep12f8bcjsn96d4bb066ba1",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
      next: {
        revalidate: 86400,
      },
    },
  );
  const ytVideo = await ytRes.json();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-400";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      {/* Hero Image Section */}
      <div className="relative h-[50rem]">
        <Image
          src={data.gifUrl!}
          alt={data.name!}
          fill
          className="h-full w-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute right-0 bottom-0 left-0 p-6">
          <div className="max-w-wide mx-auto">
            <div className="mb-3 flex items-center gap-3">
              <span
                className={`${getDifficultyColor(data.difficulty!)} rounded-full px-3 py-1 text-2xl font-bold text-white`}
              >
                {data.difficulty}
              </span>
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-2xl font-bold text-yellow-400 uppercase">
                {data.bodyPart}
              </span>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {data.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Video Player Section */}
        <div className="mb-8 rounded-lg bg-zinc-900 p-6">
          <h2 className="mb-4 flex items-center gap-4 text-3xl font-bold text-white">
            <PlayCircle className="text-yellow-400" size={28} />
            Video Tutorial
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
            <LiteYouTube
              videoId={ytVideo.contents[0]?.video.videoId}
              title={ytVideo.contents[0]?.video.title || data.name!}
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Instructions & Tips */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <div className="rounded-lg bg-zinc-900 p-6">
              <h2 className="mb-4 flex items-center gap-4 text-4xl font-bold text-white">
                <Info className="text-yellow-400" size={28} />
                Description
              </h2>
              <p className="leading-relaxed text-gray-300">
                {data.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="rounded-lg bg-zinc-900 p-6">
              <h2 className="mb-8 text-4xl font-bold text-white">
                How to Perform
              </h2>
              <ol className="space-y-3">
                {data.instructions!.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="my-10 flex items-start gap-3 text-gray-300"
                    >
                      <span className="flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-4xl font-bold text-black">
                        {index + 1}
                      </span>
                      <span className="pt-1">{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
            {/* Right Column - Target Muscles & Equipment */}
            <div className="space-y-8">
              {/* Target Muscles */}
              <div className="rounded-lg bg-zinc-900 p-6">
                <h2 className="mb-4 font-bold text-white">Target Muscles</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg bg-zinc-800 px-3 py-2 text-3xl font-semibold text-yellow-400">
                    {data.target}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="mt-20 mb-40 min-h-screen bg-black">
        <Suspense fallback={<ExerciseDetailSkeleton />}>
          <RenderExerciseDetails params={params} />
        </Suspense>
      </div>
    </div>
  );
}
