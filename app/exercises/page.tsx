import Exercises, { Exercise } from "./exercises";

async function fetchExercises() {
  const res = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=20",
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
    return [];
  }

  return res.json();
}

export default async function Page() {
  const exercises: Exercise[] = await fetchExercises();

  return (
    <div className="mt-20 mb-40 min-h-screen overflow-clip border-t border-zinc-800 bg-black">
      {/* Main Content */}
      <main className="max-w-wide mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Exercises initialExercises={exercises} />
      </main>
    </div>
  );
}
