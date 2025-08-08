
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#15171f] text-[#001d3d] py-16 px-6 md:px-20">
      {/* Top Row: About + Text + Image */}
      <div className="bg-[#e6f1fb] text-[#2e6ef7] text-sm font-semibold px-4 py-1 mb-5 rounded-full w-fit">
             ABOUT US
           </div>
        <div className="flex gap-20 space-y-5 mb-5 justify-between">
          <h2 className="text-3xl text-white md:text-4xl font-bold">
            Trusted By Hundreds <br /> Of Happy Homes
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md">
            We believe a clean home creates space for a better life. From standard upkeep to detailed deep cleaning, we handle every corner with care, precision, and eco-friendly solutions.
          </p>
        </div>
      <div className="max-w-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Right Image with Play Button */}
        <div className="flex-1 relative">
          <img
            src="/cleaning-kitchen.jpg" // Replace with actual image path
            alt="Cleaners working"
            className="rounded-xl shadow-md w-full"
          />
          {/* Play Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15171f] text-blue-600 rounded-full p-4 shadow-md hover:scale-105 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 bg-[#15171f] sm:grid-cols-4 gap-6 text-center mt-16">
        <div>
          <h3 className="text-2xl font-bold text-[#2e6ef7]">1,200+</h3>
          <p className="text-sm text-gray-600 mt-1">Homes Cleaned</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2e6ef7]">98%</h3>
          <p className="text-sm text-gray-600 mt-1">Customer Satisfaction</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2e6ef7]">4.9/5</h3>
          <p className="text-sm text-gray-600 mt-1">Average Rating</p>
        </div>
        {/* <div>
          <h3 className="text-2xl font-bold text-[#2e6ef7]">5+</h3>
          <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
