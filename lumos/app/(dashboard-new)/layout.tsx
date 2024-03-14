import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative bg-[#090C2A] text-white">
      <div className="hidden items-center h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 border-r border-gray-800">
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
        <div></div>
      </div>
      <main className="md:pl-72">
        <div className="h-24 w-full border-b border-gray-800"></div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
