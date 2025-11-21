import ExerciseCard from "@/components/ui/exercise-card";

export default async function FetchedExercises() {
  const data = await getData();
  return (
    <>
      {data.map((item: { [key: string]: string }) => (
        <ExerciseCard {...item} key={item.id} />
      ))}
    </>
  );
}

async function getData() {
  const res = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=10",
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
    throw new Error("something went wrong");
  }

  return res.json();
}
