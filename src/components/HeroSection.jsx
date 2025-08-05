import React from "react";

const HeroSection = () => {
  return (
   <section className="m-2 bg-[#1f78d6] text-[#001d3d] py-12 px-6 md:px-12  rounded-lg">
  {/* Left Text Section */}
  <div className="max-w-7xl mx-auto gap-20 flex flex-col-reverse md:flex-row items-center justify-between">
  <div className="md:w-1/2 text-center md:text-left space-y-6">
  <button class="bg-[#e6f1fb] text-blue-500 text-base font-medium px-6 py-2 rounded-full shadow-sm">
    A Cleaner Home, A Happier You
  </button>

    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-blue-200">Sparkling</span> <span className="text-white">Homes</span><br />
      <span className="text-white">Start With</span> <span className="text-blue-200">Qlinest</span>
    </h1>
    <p className="text-base md:text-lg text-white">
      We offer professional, reliable, and eco-friendly cleaning solutions tailored to your lifestyle and designed to create a healthier home.
    </p>

    {/* Book Button and Avatars */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
      <a
        href="#"
        className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 transition duration-300 rounded-full"
      >
        Book Your First Cleaning
      </a>

      <div className="flex items-center">
        {/* Avatars */}
        <img
          src="/avatar1.png"
          alt="customer"
          className="w-40 h-15"
        />
        <span className="text-sm text-white">More than 10k+ satisfied customers</span>
      </div>
    </div>

    {/* Trust Logos */}
    <div className="flex space-x-6 mt-6">
      <img src="/logo1.png" alt="logo1" className="h-6" />
      <img src="/logo2.png" alt="logo2" className="h-6" />
      <img src="/logo3.png" alt="logo3" className="h-6" />
      <img src="/logo4.png" alt="logo4" className="h-6" />
    </div>
  </div>

  {/* Right Image Section */}
  <div className="md:w-1/2 mb-8 md:mb-0">
    <img
      src="hero.png"
      alt="Cleaning Service"
      className="w-full rounded-xl shadow-lg"
    />
  </div>
  </div>
</section>

  );
};

export default HeroSection;