"use client";
import { ReactNode, useEffect } from "react";
import { animatePageIn } from "@/components/animations";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    animatePageIn();
  }, [pathname]);

  return <>{children}</>;
}
