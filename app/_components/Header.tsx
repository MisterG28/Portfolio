"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 py-4 bg-secondary/90 z-50 shadow-md">
      <nav className="max-w-6xl px-4 m-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-bold text-primary">Killyan Piriou</h1>
        </Link>
        <button
          className="md:hidden flex flex-col items-center justify-center p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-1 bg-primary mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-primary mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-primary rounded"></span>
        </button>
        <ul
          className={cn(
            "absolute md:static top-16 left-0 w-full md:w-auto md:flex md:gap-4 items-center bg-secondary md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 transition-all duration-300",
            isMenuOpen ? "flex flex-col items-center" : "hidden"
          )}
        >
          <li>
            <Link
              href="#stack"
              className="block text-base font-semibold text-primary hover:text-accent py-2"
            >
              STACK
            </Link>
          </li>
          <li>
            <Link
              href="#projets"
              className="block text-base font-semibold text-primary hover:text-accent py-2"
            >
              PROJETS
            </Link>
          </li>
          <li>
            <Link
              href="#experiences"
              className="block text-base font-semibold text-primary hover:text-accent py-2"
            >
              EXPÉRIENCES
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/MisterG28"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/killyan-piriou-093862271/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};