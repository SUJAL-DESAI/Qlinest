import React from "react";

const reasons = [
  {
    title: "Trained & Vetted Cleaners",
    subtitle: "Only skilled, background-checked professionals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#2563EB"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.64 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    subtitle: "We work around your time, not the other way around.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#2563EB"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Eco–Conscious Approach",
    subtitle: "Safe for kids, pets, and the environment.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#2563EB"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314l1.414 1.414M16.95 16.95l1.414 1.414"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    subtitle: "Driven by a passion for excellence every day.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#2563EB"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const WhyChoose = () => {
  return (
    <section classname="bg-[#15171f]">
      <section className="bg-[#eaf3fc] rounded-2xl p-8 md:p-12 mx-4 md:mx-8 my-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Text */}
          <div className="flex-1 flex flex-col justify-center">
             <div className="bg-white text-[#2e6ef7] text-sm font-semibold px-4 py-1 mb-5 rounded-full w-fit">
             WHY CHOOSE US
           </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#0f172a]">
              Why Qlinest Is The Right <br /> Choice For Quality
            </h2>
            <p className="text-gray-700 mt-2 max-w-md">
              Discover a range of services designed to bring comfort.
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0">{r.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-[#0f172a]">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{r.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChoose;
