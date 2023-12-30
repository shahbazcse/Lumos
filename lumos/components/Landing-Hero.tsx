"use client";

import { useAuth } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            className="md:text-lg p-4 md:p-6 rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-[0px_0px_9px_3px_#CBD5E0] duration-700 transition delay-600 font-semibold"
          >
            Get Started For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">No credit card required.</div>
    </div>
  );
};

export default LandingHero;
