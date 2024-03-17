"use client";

import React from "react";

import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { RxDashboard } from "react-icons/rx";
import { LuMessagesSquare } from "react-icons/lu";
import { LuImage } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { LuMusic } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";

type UserProp = {
  email: string;
  name: string;
};

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard-new",
    color: "text-sky-300",
  },
  {
    label: "Conversation",
    icon: LuMessagesSquare,
    href: "/conversation",
    color: "text-violet-400",
  },
  {
    label: "Image",
    icon: LuImage,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video",
    icon: LuVideo,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music",
    icon: LuMusic,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code",
    icon: LuCode2,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "History",
    icon: LuHistory,
    href: "/history",
    color: "text-amber-500",
  },
  {
    label: "Settings",
    icon: LuSettings,
    href: "/settings",
  },
];

const SideBar = ({ email, name }: UserProp) => {
  const pathname = usePathname();
  return (
    <div className="hidden justify-between items-center h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 border-r border-gray-800">
      <div className="flex flex-col items-center">
        <div className="py-8">
          <Link href="/dashboard-new" className="flex items-center">
            <div className="relative w-7 h-7 mr-3">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>
              Lumos AI
            </h1>
          </Link>
        </div>
        <div className="flex flex-col px-3 w-full h-full mt-4">
          <div className="flex flex-col space-y-6">
            <p className="ml-4 text-lg font-[raleway] tracking-wide">Create</p>
            <div className="flex flex-col space-y-4 px-4 items-start justify-center">
              {routes.slice(0, 6).map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-md group flex px-5 py-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-blue-400/10 rounded-full transition",
                    pathname === route.href
                      ? "text-white bg-gradient-to-r from-indigo-700 to-indigo-600"
                      : "text-zinc-300"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-6 w-6 mr-4", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Separator className="my-8 w-56 mx-auto bg-gray-800" />
          <div className="flex flex-col space-y-6">
            <p className="ml-4 text-lg font-[raleway] tracking-wide">Manage</p>
            <div className="flex flex-col space-y-4 px-4 items-start justify-center">
              {routes.slice(6, 8).map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-md group flex px-5 py-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-blue-400/10 rounded-full transition",
                    pathname === route.href
                      ? "text-white bg-gradient-to-r from-indigo-700 to-indigo-600"
                      : "text-zinc-300"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-6 w-6 mr-4", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <Separator className="my-8 w-56 mx-auto bg-gray-800" />
        <div className="flex items-center justify-start w-full gap-4">
          <div className="w-7">
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <div>{name}</div>
            <div className="text-gray-400 text-sm">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
