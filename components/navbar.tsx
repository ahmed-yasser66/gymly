"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import {
  FacebookIcon,
  MenuIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../public/icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const currentTab = usePathname();
  const activeTabStyles =
    "after:block after:h-0.5 after:w-1/2 after:absolute relative after:bg-white after:-bottom-3 after:left-1/2 after:-translate-x-1/2";
  //hooks
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(currentTab);
  //Effects
  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);
  //Helpers
  //event Listeners
  const handleClick = () => {
    setIsMenuOpen((prev: boolean) => !prev);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  //early returns
  //render logic

  return (
    <nav className="max-w-wide mx-auto mt-16 px-10">
      <div className="wrapper flex w-full items-center justify-between overflow-clip">
        <Link prefetch href={"/"} className="block size-24">
          <Image
            src={Logo}
            alt="logo"
            width={60}
            height={60}
            fetchPriority="high"
            priority
          />
        </Link>
        <div className="menu z-50 block lg:hidden">
          <p onClick={handleClick}>
            <MenuIcon width="35" className="cursor-pointer" />
          </p>
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-screen bg-white/5 backdrop-blur-md"
              onClick={handleCloseMenu}
            />
          )}
          <ul
            className={`[&>li:hover]:text-primary fixed top-0 h-svh w-2/3 bg-black text-3xl transition-all duration-300 [&>li]:cursor-pointer [&>li]:duration-300 ${isMenuOpen ? "right-0" : "-right-full"} space-y-10 py-10 [&>li]:ps-16`}
          >
            <li>
              <Link
                href={"/"}
                prefetch
                className={`${activeTab == "/" ? "text-primary" : ""} `}
              >
                <Image src={Logo} alt="logo" className="size-28" />
              </Link>
            </li>
            <li className="text-text-dim before:bg-text-dim hover:text-text-dim! relative cursor-default! text-2xl before:absolute before:top-1/2 before:left-0 before:block before:h-1 before:w-10 before:-translate-y-1/2">
              Menu
            </li>
            <li>
              <Link
                href={"/"}
                prefetch
                className={`${activeTab == "/" ? "text-primary" : "text-white"}`}
                onClick={handleCloseMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                prefetch
                href={"/about"}
                className={`${activeTab == "/about" ? "text-primary" : "text-white"}`}
                onClick={handleCloseMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                prefetch
                href={"/exercises"}
                className={`${activeTab == "/exercises" ? "text-primary" : "text-white"}`}
                onClick={handleCloseMenu}
              >
                Exercises
              </Link>
            </li>
            <li className="text-text-dim before:bg-text-dim hover:text-text-dim! relative cursor-default! text-2xl before:absolute before:top-1/2 before:left-0 before:block before:h-1 before:w-10 before:-translate-y-1/2">
              Social Media
            </li>
            <li className="flex items-center gap-4 hover:text-white!">
              <FacebookIcon width="25" className="hover:text-primary" />
              <TiktokIcon width="25" className="hover:text-primary" />
              <YoutubeIcon width="40" className="hover:text-primary" />
            </li>
            <li className="text-text-dim before:bg-text-dim hover:text-text-dim! relative cursor-default! text-2xl before:absolute before:top-1/2 before:left-0 before:block before:h-1 before:w-10 before:-translate-y-1/2">
              Need help ?
            </li>
            <li>
              <Link prefetch href={"/contact-us"} onClick={handleCloseMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`hidden gap-10 text-3xl lg:flex`}>
          <li className={`${activeTab == "/" ? activeTabStyles : ""} `}>
            <Link prefetch href={"/"}>
              Home
            </Link>
          </li>
          <li className={`${activeTab == "/about" ? activeTabStyles : ""} `}>
            <Link prefetch href={"/about"}>
              About
            </Link>
          </li>
          <li
            className={`${activeTab == "/exercises" ? activeTabStyles : ""} `}
          >
            <Link prefetch href={"/exercises"}>
              Exercises
            </Link>
          </li>
          <li
            className={`${activeTab == "/contact-us" ? activeTabStyles : ""} `}
          >
            <Link prefetch href={"/contact-us"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
