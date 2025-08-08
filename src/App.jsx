import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import StatsIcons from "./components/StatsIcon";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PromotionSection from "./components/PromotionSection";
import FAQSection from "./components/FAQSection";
import BlogAndFooter from "./components/BlogAndFooter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <StatsIcons />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      {/* <Testimonials /> */}
      <PromotionSection />
      <FAQSection />
      <BlogAndFooter />
    </>
  );
};

export default App;