"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { animatePageOut } from "./animations";
import { PropsWithChildren } from "react";

export interface TransitionLinkProps extends PropsWithChildren {
  href: string;
  className: string;
}

export default function TransitionLink({
  href,
  children,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
