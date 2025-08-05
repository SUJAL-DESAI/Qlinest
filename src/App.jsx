import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import Services from "./components/Services";
import StatsIcons from "./components/StatsIcon";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PromotionSection from "./components/PromotionSection";
import FAQSection from "./components/FAQSection";
import BlogAndFooter from "./components/BlogAndFooter";

const App = () => {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <StatsIcons />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <PromotionSection />
      <FAQSection />
      <BlogAndFooter />
    </>
  );
};

export default App;