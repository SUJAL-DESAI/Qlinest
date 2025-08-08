import React from "react";

const promotions = [
  {
    title: "Let Your Home Shine Brighter Than Ever",
    subtitle:
      "Experience top-tier cleaning backed by trusted professionals.",
    buttonText: "Schedule a Free Consultation",
    image: "/images/cleaner-portrait.jpg", 
    reverse: false,
  },
  {
    title: "Get 20% Off Your First Cleaning!",
    subtitle:
      "This exclusive deal is reserved for new customers and is available for a limited time.",
    buttonText: "Claim Your Discount",
    image: "/images/cleaning-supplies.jpg", 
    reverse: false,
  },
];

const PromotionCard = ({ title, subtitle, buttonText, image }) => {
  return (
    <div className="flex-1 min-w-[280px] bg-gradient-to-r from-[#e0edff] to-[#f0f8ff] rounded-2xl p-6 flex flex-col justify-between shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Text */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
          <button className="bg-yellow-400 text-[#1f2d3a] font-semibold px-5 py-2 rounded-lg shadow hover:brightness-105 transition">
            {buttonText}
          </button>
        </div>
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-balck shadow">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PromotionSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#15171f]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="inline-block bg-[#e6f1fb] text-[#2563EB] text-xs font-semibold px-4 py-1 rounded-full mb-1 shadow">
          PROMOTION
        </div>
        <h2 className="text-3xl text-white sm:text-4xl font-bold text-center">
          Get A Sparkling Clean Home <br /> At A Special Price!
        </h2>
        <p className="text-gray-600 text-center max-w-xl">
          Enjoy our limited-time offer on professional home cleaning services.
        </p>

        <div className="w-full mt-10 flex flex-col lg:flex-row gap-8">
          {promotions.map((p, idx) => (
            <PromotionCard
              key={idx}
              title={p.title}
              subtitle={p.subtitle}
              buttonText={p.buttonText}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
