import React from "react";

const Services = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-8 scroll-smooth">
      <div className="bg-[#e6f1fb] text-[#2e6ef7] text-sm font-semibold px-4 py-1 mb-5 rounded-full w-fit mx-auto">
        Services
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center border-white pb-4">
          Our Cleaning Services
        </h2>
        <p className="text-gray-600 font-bold mb-12 text-center border-white pb-4">Discover a range designed to bring comfort and cleanliness into every corner of your home.</p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-[#15171f] hover:bg-[#f87559] text-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSl50UiaOipImx_MtPjWZfCUnOzSUHYOXCv63UCKq7-qzj_bfFR"
              alt="Residential Cleaning"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Residential Cleaning</h3>
                <p className="text-gray-700">
                  Thorough cleaning for your home with eco-friendly products.
                </p>
              </div>
              <div>
                <button className="bg-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#15171f] hover:bg-[#f87559] text-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOLXKm7d8oF7v-3ms6qzDYnY-Fjda5RAMAojnkaa6qE_AIc5G"
              alt="Office Cleaning"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Office Cleaning</h3>
                <p className="text-gray-700">
                  Keep your workspace clean and professional at all times.
                </p>
              </div>
              <div>
                <button className="bg-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          <div className="bg-[#15171f] hover:bg-[#f87559] text-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbKKMBZdPVJ8rXhJKrKMc5o5VrVeCTzkeQADpowFi7AnmqNGHb"
              alt="Deep Cleaning"
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Deep Cleaning</h3>
                <p className="text-gray-700">
                  Ideal for move-ins, move-outs, and spring cleaning tasks.
                </p>
              </div>
              <div>
                <button className="bg-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

