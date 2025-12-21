import Link from "next/link";
import ExerciseCard from "@/components/ui/exercise-card";

export default async function Exercise() {
  const res = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises?limit=10",
    {
      headers: {
        "x-rapidapi-key": process.env.API_KEY as string,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
      cache: "no-store",
    },
  );
  const data = await res.json();
  return (
    <section
      className="section-lazy max-w-wide mx-auto mt-40 mb-40 px-10 2xl:px-0"
      id="exercises"
    >
      <p className="text-primary mb-20 text-5xl">&#47;&#47;&#47; Exercises</p>
      <div className="wrapper grid gap-16">
        {data.map((item: { [key: string]: string }) => (
          <ExerciseCard {...item} key={item.id} />
        ))}
      </div>
      <p className="text-text-dim hover:text-primary mt-10 cursor-pointer text-center">
        <Link href={"/exercises"}>More Exercises</Link>
      </p>
    </section>
  );
}
