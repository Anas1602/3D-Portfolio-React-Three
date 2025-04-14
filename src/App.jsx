import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
    </>
  );
};

export default App;
