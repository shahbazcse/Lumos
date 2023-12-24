import LandingContent from "@/components/Landing-Content";
import LandingHero from "@/components/Landing-Hero";
import LandingNavbar from "@/components/Landing-NavBar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent/>
    </div>
  );
};

export default LandingPage;
