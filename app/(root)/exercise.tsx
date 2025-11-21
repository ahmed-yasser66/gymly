import Link from "next/link";
import FetchedExercises from "./fetched-exercises";
import { Suspense } from "react";
import ExerciseCardSkeleton from "./exercise-skeleton";

export default function Exercise() {
  return (
    <section
      className="section-lazy max-w-wide mx-auto mt-40 mb-40 px-10 2xl:px-0"
      id="exercises"
    >
      <p className="text-primary mb-20 text-5xl">&#47;&#47;&#47; Exercises</p>
      <div className="wrapper grid gap-16">
        <Suspense
          fallback={
            <>
              {[...Array(10)].map((_, index) => (
                <ExerciseCardSkeleton key={index} />
              ))}
            </>
          }
        >
          <FetchedExercises />
        </Suspense>
      </div>
      <p className="text-text-dim hover:text-primary mt-10 cursor-pointer text-center">
        <Link href={"/exercises"}>More Exercises</Link>
      </p>
    </section>
  );
}
