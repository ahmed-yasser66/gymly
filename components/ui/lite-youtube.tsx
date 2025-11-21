"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

export default function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-full w-full rounded-lg"
      />
    );
  }

  return (
    <div
      className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      onClick={() => setIsPlaying(true)}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Play Button Overlay */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/90 text-black transition-transform duration-300 group-hover:scale-110">
        <Play fill="currentColor" className="ml-1 h-8 w-8" />
      </div>

      {/* YouTube Logo/Branding (Optional, adds authenticity) */}
      <div className="absolute top-4 left-4 z-10 text-sm font-medium text-white drop-shadow-md">
        {title}
      </div>
    </div>
  );
}
