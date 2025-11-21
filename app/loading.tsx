"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png"
export default function Loading() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
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

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 min-h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Floating weight decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-10 h-10 bg-yellow-400 opacity-10 rounded animate-float"></div>
                <div className="absolute top-[80%] left-[20%] w-10 h-10 bg-yellow-400 opacity-10 rounded animate-float-delayed-1"></div>
                <div className="absolute top-[20%] right-[15%] w-10 h-10 bg-yellow-400 opacity-10 rounded animate-float-delayed-2"></div>
                <div className="absolute bottom-[15%] right-[10%] w-10 h-10 bg-yellow-400 opacity-10 rounded animate-float-delayed-3"></div>
            </div>

            {/* Main loader content */}
            <div className="text-center relative z-10">
                {/* Logo */}
                <div className="w-24 h-24 mx-auto mb-8 animate-pulse-scale">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>

                {/* Loading text */}
                <div className="text-white text-2xl font-light tracking-[0.2em] mb-8">
                    LOADING
                </div>

                {/* Progress bar */}
                <div className="w-80 h-1 bg-zinc-900 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 ease-out"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}