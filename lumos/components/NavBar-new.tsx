import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { LuSearch } from "react-icons/lu";
import { FaBarsProgress } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import ShareButton from "./ShareButton";

const NavBar = () => {
  const isLimit = true;
  return (
    <div className="h-24 flex items-center justify-between px-10 w-full border-b border-gray-800">
      <div className="relative h-12 w-fit">
        <LuSearch className="absolute h-5 w-5 left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
        <input
          type="text"
          placeholder="Search"
          className="pl-12 bg-transparent w-[24rem] pr-3 py-3 text-md text-gray-400 rounded-full shadow-sm border-gray-800 focus:ring-0 border focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-evenly gap-5">
        <ShareButton />
        <HoverCard>
          <HoverCardTrigger asChild>
            <div
              className={
                "relative flex text-sm font-semibold items-center gap-3 px-3.5 py-2.5 rounded-md bg-indigo-950 cursor-default"
              }
            >
              Free Limit {!isLimit && "Exhausted"}
              <FaBarsProgress
                className={cn(
                  "h-5 w-5",
                  isLimit ? "text-green-500" : "text-red-600"
                )}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="absolute -left-48 mt-2 bg-indigo-950 border-0">
            <div className="space-y-1.5">
              <p className="text-sm font-semibold tracking-wide text-white">
                Free Limit: 10/10
              </p>
              {!isLimit ? (
                <div className="text-[13.5px] text-gray-300">
                  Free limit has exhausted. Upgrade now to continue using Lumos
                  AI.
                </div>
              ) : (
                <p className="text-[13.5px] text-gray-300">
                  Boost your limit, Upgrade to Pro.
                </p>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="group relative ml-4">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <button className="relative rounded-lg bg-black px-3.5 py-2.5 text-white">
            Upgrade to Pro ⚡
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
