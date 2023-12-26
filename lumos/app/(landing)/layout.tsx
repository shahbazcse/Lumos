import React from "react";
import LandingNavbar from "@/components/Landing-NavBar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-black overflow-auto">
      <LandingNavbar />
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;