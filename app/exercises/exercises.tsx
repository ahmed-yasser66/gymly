"use client";

import { Filter, Search } from "lucide-react";
import ExerciseCardTiny from "../../components/ui/exercise-card.-tiny";
import ExerciseCardTinySkeleton from "../../components/skeletons/exercise-card-tiny-skeleton";
import { useState, useMemo, useTransition, useEffect } from "react";

// ============================================================================
// TYPES
// ============================================================================

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

interface Category {
  id: string;
  name: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const CATEGORIES: Category[] = [
  { id: "all", name: "All Exercises" },
  { id: "chest", name: "Chest" },
  { id: "back", name: "Back" },
  { id: "upper legs", name: "Upper Legs" },
  { id: "waist", name: "Waist" },
  { id: "upper arms", name: "Upper Arms" },
  { id: "cardio", name: "Cardio" },
  { id: "neck", name: "Neck" },
  { id: "lower arms", name: "Lower Arms" },
  { id: "lower legs", name: "Lower Legs" },
];

const SKELETON_COUNT = 12;

// ============================================================================
// COMPONENTS
// ============================================================================

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}) {
  return (
    <section className="my-16 text-3xl sm:text-4xl">
      <div className="mb-8 flex items-center gap-2">
        <Filter className="text-yellow-400" size={30} />
        <h2 className="text-4xl font-semibold text-white">
          Filter by Category
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
              selectedCategory === cat.id
                ? "bg-yellow-400 text-black"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
            aria-pressed={selectedCategory === cat.id}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
}

function SearchBar({
  searchQuery,
  onSearchChange,
}: {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search
          className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
          size={24}
        />
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 py-3 pr-4 pl-20 text-xl text-white placeholder-gray-400 focus:outline-2 focus:outline-yellow-400"
        />
      </div>
    </div>
  );
}

function ExerciseGrid({
  exercises,
  isLoading,
}: {
  exercises: Exercise[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
          <ExerciseCardTinySkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-2xl text-gray-400">No exercises found.</p>
        <p className="mt-2 text-lg text-gray-500">
          Try a different category or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {exercises.map((exercise) => (
        <ExerciseCardTiny
          {...exercise}
          difficulty={exercise.difficulty || "beginner"}
          key={exercise.id}
        />
      ))}
    </div>
  );
}

function ResultsCount({
  count,
  isFiltered,
}: {
  count: number;
  isFiltered: boolean;
}) {
  if (!isFiltered) return null;

  return (
    <div className="mb-6 text-lg text-gray-400">
      Showing <span className="font-semibold text-yellow-400">{count}</span>{" "}
      exercise
      {count !== 1 && "s"}
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Exercises({
  initialExercises,
}: {
  initialExercises: Exercise[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState(""); // Local input state for debouncing
  const [visibleCount, setVisibleCount] = useState(12); // Pagination state
  const [isPending, startTransition] = useTransition();

  const data = initialExercises;
  const isLoading = false;

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setSearchQuery(inputValue);
        setVisibleCount(12); // Reset pagination on search
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  // Memoized filtering for performance
  const filteredExercises = useMemo(() => {
    let filtered = data;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((exercise) =>
        exercise.name.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [data, selectedCategory, searchQuery]);

  // Slice exercises for pagination
  const visibleExercises = filteredExercises.slice(0, visibleCount);
  const hasMore = visibleCount < filteredExercises.length;

  // Handle category change with transition
  const handleCategoryChange = (categoryId: string) => {
    startTransition(() => {
      setSelectedCategory(categoryId);
      setVisibleCount(12); // Reset pagination on category change
    });
  };

  // Handle search input change
  const handleSearchChange = (query: string) => {
    setInputValue(query);
  };

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const isFiltered = selectedCategory !== "all" || searchQuery.trim() !== "";

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl">
          Exercise Library
        </h1>
        <p className="text-xl text-gray-400">
          Browse through our collection of exercises to build your perfect
          workout routine.
        </p>
      </header>

      {/* Search Bar */}
      <SearchBar searchQuery={inputValue} onSearchChange={handleSearchChange} />

      {/* Category Filter */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Results Count */}
      <ResultsCount count={filteredExercises.length} isFiltered={isFiltered} />

      {/* Exercise Grid */}
      <ExerciseGrid
        exercises={visibleExercises}
        isLoading={isLoading || isPending}
      />

      {/* Load More Button */}
      {hasMore && !isLoading && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-yellow-500 active:scale-95"
          >
            Load More Exercises
          </button>
        </div>
      )}
    </div>
  );
}
