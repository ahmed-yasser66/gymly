"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { animatePageIn } from "@/components/animations";
export default function Loading() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add your navigation logic here
          // Example: window.location.href = '/home';
          return 100;
        }
        const increment = Math.random() * 10;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    animatePageIn();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Floating weight decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute top-[10%] left-[10%] h-10 w-10 rounded bg-yellow-400 opacity-10"></div>
        <div className="animate-float-delayed-1 absolute top-[80%] left-[20%] h-10 w-10 rounded bg-yellow-400 opacity-10"></div>
        <div className="animate-float-delayed-2 absolute top-[20%] right-[15%] h-10 w-10 rounded bg-yellow-400 opacity-10"></div>
        <div className="animate-float-delayed-3 absolute right-[10%] bottom-[15%] h-10 w-10 rounded bg-yellow-400 opacity-10"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="animate-pulse-scale mx-auto mb-8 h-24 w-24">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>

        {/* Loading text */}
        <div className="mb-8 text-2xl font-light tracking-[0.2em] text-white">
          LOADING
        </div>

        {/* Progress bar */}
        <div className="mx-auto h-1 w-80 overflow-hidden rounded-full bg-zinc-900">
          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
