import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full bg-[#000000]">
      <div className="flex items-center justify-center gap-1.5 relative mb-[44rem]">
        <div className="relative w-8 h-8 mr-3">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1
          className={cn("text-4xl text-white font-bold", montserrat.className)}
        >
          Lumos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            AI
          </span>
        </h1>
      </div>
      <div className="absolute">{children}</div>
    </div>
  );
};

export default AuthLayout;
