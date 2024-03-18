import React from "react";

import { LuSearch } from "react-icons/lu";
import { LuShare2 } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { FaBarsProgress } from "react-icons/fa6";
import { cn } from "@/lib/utils";

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
        <div className="group relative mr-3">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <button className="relative rounded-lg bg-black px-3.5 py-2.5 text-white">
            Upgrade to Pro ⚡
          </button>
        </div>
        <div
          className={
            "flex text-sm font-semibold items-center gap-3 px-3.5 py-2.5 rounded-md bg-indigo-950 cursor-default"
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
        <div className="p-3 rounded-full bg-indigo-950 hover:bg-blue-950 cursor-pointer duration-500">
          <LuShare2 className="h-5 w-5" />
        </div>
        <div className="p-3 rounded-full bg-indigo-950 hover:bg-blue-950 cursor-pointer duration-500">
          <LuBell className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
