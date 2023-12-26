import LandingContent from "@/components/Landing-Content";
import LandingHero from "@/components/Landing-Hero";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingHero />
      <LandingContent/>
    </div>
  );
};

export default LandingPage;
