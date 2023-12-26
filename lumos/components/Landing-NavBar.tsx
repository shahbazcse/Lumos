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
    // <nav className="p-4 bg-transparent flex items-center justify-between">
    //   <Link href="/" className="flex items-center">
    //     <div className="relative h-8 w-8 mr-3">
    //       <Image fill alt="Logo" src="/logo.png" />
    //     </div>
    //     <h1 className={cn("text-2xl font-bold text-white", font.className)}>
    //       Lumos AI
    //     </h1>
    //   </Link>
    //   <div className="flex items-center gap-x-2">
    //     <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
    //       <Button variant="outline" className="rounded-full">
    //         Sign In
    //       </Button>
    //     </Link>
    //   </div>
    // </nav>
    <nav className="px-12 py-6 bg-transparent flex items-center justify-between text-white border-b-[1px] border-gray-800 sticky top-0 bg-blur z-10">
      <div>
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-3">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
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