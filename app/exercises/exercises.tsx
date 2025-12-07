"use client";

import { Filter, Search } from "lucide-react";
import { useState, useMemo, useTransition, useEffect } from "react";
import ExerciseCardTiny from "../../components/ui/exercise-card.-tiny";
import ExerciseCardTinySkeleton from "../../components/skeletons/exercise-card-tiny-skeleton";

export interface Exercise {
  id: string;
  bodyPart: string;
  name: string;
  gifUrl: string;
  target: string;
  equipment: string;
  secondaryMuscles: string[];
  instructions: string[];
  difficulty?: string;
  [key: string]: any;
}

const CATEGORIES = [
  { id: "all", name: "All Exercises" },
  { id: "chest", name: "Chest" },
  { id: "back", name: "Back" },
  { id: "upper legs", name: "Upper Legs" },
  { id: "waist", name: "Waist" },
  { id: "upper arms", name: "Upper Arms" },
  { id: "cardio", name: "Cardio" },
  { id: "neck", name: "Neck" },
  { id: "lower arms", name: "Lower Arms" },
  { id: "lower legs", name: "Lower Legs" }
];

const PAGE_SIZE = 12;

export default function Exercises({ initialExercises }: { initialExercises: Exercise[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [debounced, setDebounced] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [data] = useState(initialExercises);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setDebounced(searchValue);
        setVisible(PAGE_SIZE);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const filtered = useMemo(() => {
    let result = data;

    if (selectedCategory !== "all") {
      result = result.filter(e => e.bodyPart.toLowerCase() === selectedCategory);
    }

    if (debounced.trim()) {
      const q = debounced.toLowerCase();
      result = result.filter(e => e.name.toLowerCase().includes(q));
    }

    return result;
  }, [data, selectedCategory, debounced]);

  const visibleItems = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const loadMore = () => setVisible(v => v + PAGE_SIZE);

  const isFiltered = selectedCategory !== "all" || debounced.trim() !== "";

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl">
          Exercise Library
        </h1>
        <p className="text-xl text-gray-400">
          Browse through our collection of exercises.
        </p>
      </header>

      {/* search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="w-full rounded-lg bg-zinc-900 py-3 pr-4 pl-20 text-xl text-white placeholder-gray-400 focus:outline-2 focus:outline-yellow-400"
          />
        </div>
      </div>

      {/* category */}
      <section className="my-16 text-3xl sm:text-4xl">
        <div className="mb-8 flex items-center gap-2">
          <Filter className="text-yellow-400" size={30} />
          <h2 className="text-4xl font-semibold text-white">Filter by Category</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                startTransition(() => {
                  setSelectedCategory(cat.id);
                  setVisible(PAGE_SIZE);
                });
              }}
              aria-pressed={selectedCategory === cat.id}
              className={`rounded-full px-6 py-2 font-medium transition-all ${selectedCategory === cat.id
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* results count */}
      {isFiltered && (
        <div className="mb-6 text-lg text-gray-400">
          Showing
          <span className="font-semibold text-yellow-400"> {filtered.length} </span>
          exercises
        </div>
      )}

      {/* grid */}
      {pending ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
            <ExerciseCardTinySkeleton key={idx} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-2xl text-gray-400">No exercises found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map(ex => (
            <ExerciseCardTiny key={ex.id} {...ex} difficulty={ex.difficulty || "beginner"} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            className="rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95"
          >
            Load More Exercises
          </button>
        </div>
      )}
    </div>
  );
}
