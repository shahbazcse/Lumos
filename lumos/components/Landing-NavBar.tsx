"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="px-4 md:px-12 py-6 bg-transparent flex items-center justify-between text-white border-b-[1px] border-gray-800">
      <div>
        <Link href="/" className="flex items-center">
          <div className="relative h-5 w-5 md:h-8 md:w-8 mr-2.5">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              "text-md md:text-2xl font-bold text-white tracking-wide",
              font.className
            )}
          >
            Lumos AI
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-evenly gap-4">
        <div className="flex items-center gap-x-2 text-sm font-semibold">
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button className="rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold">
              Sign In
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-x-2 text-sm font-semibold">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button className="rounded-lg bg-transparent hover:bg-white hover:text-black border border-gray-400 font-semibold">
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
