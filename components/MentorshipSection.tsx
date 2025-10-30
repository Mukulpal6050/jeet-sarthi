"use client";

import Image from "next/image";
import React from "react";

interface Step {
  title: string;
  desc: string;
  img: string;
}

const MentorshipSection: React.FC = () => {
  const topSteps: Step[] = [
    {
      title: "Onboarding",
      desc: "Understand your goals & challenges.",
      img: "https://jeetsarthi.com/wp-content/uploads/2025/09/onboarding.svg",
    },
    {
      title: "Daily Support",
      desc: "Junior mentor checks in regularly.",
      img: "https://jeetsarthi.com/wp-content/uploads/2025/09/progress2.svg",
    },
    {
      title: "Result",
      desc: "Consistency + confidence = success.",
      img: "https://jeetsarthi.com/wp-content/uploads/2025/09/result.svg",
    },
  ];

  const bottomSteps: Step[] = [
    {
      title: "Personal Roadmap",
      desc: "Senior mentor sets your plan.",
      img: "https://jeetsarthi.com/wp-content/uploads/2025/09/roadmap.svg",
    },
    {
      title: "Review & Adjust",
      desc: "Senior mentor tracks performance weekly.",
      img: "https://jeetsarthi.com/wp-content/uploads/2025/09/review.svg",
    },
  ];

  return (
    <section className="w-full py-16 bg-white text-center font-[Poppins] relative overflow-hidden">
      {/* ✅ Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-16 leading-snug text-[#005EB8]">
        How{" "}
        <span className="text-[#74C043] font-bold hover:text-[#005EB8]">
          JEET
        </span>{" "}
        SARTHI Mentorship Works?
      </h2>

      {/* ✅ Desktop Layout */}
      <div className="hidden md:flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex justify-between w-full px-8 md:px-12 mb-20">
          {topSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-48 text-center"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={120}
                height={120}
                className="mb-3"
              />
              <h3 className="text-[#00A651] font-semibold mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Horizontal timeline with extended line */}
        <div className="relative w-[115%] h-[3px] bg-[#00A651] mb-20 rounded-full -mx-[7.5%]">
          {[0, 25, 50, 75, 100].map((pos, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `calc(${pos}%)` }}
            >
              <div className="w-5 h-5 rounded-full bg-[#00A651] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005EB8]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-around w-[80%] md:w-[70%] mx-auto">
          {bottomSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-56 text-center"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={120}
                height={120}
                className="mb-3"
              />
              <h3 className="text-[#00A651] font-semibold mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Vertical Timeline — perfect alignment */}
      <div className="md:hidden relative flex flex-col items-start pl-8 mt-10">
        {/* Vertical green line passing through dots */}
        <div className="absolute left-[22px] top-[-20px] bottom-[-20px] w-[3px] bg-[#00A651]" />

        {[...topSteps, ...bottomSteps].map((step, index) => (
          <div key={index} className="relative flex items-start mb-10">
            {/* Dot centered on the line */}
            <div className="absolute left-[15px] top-4 w-5 h-5 rounded-full bg-[#00A651] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#005EB8]" />
            </div>

            {/* Step content */}
            <div className="ml-12 flex flex-col items-start text-left">
              <Image
                src={step.img}
                alt={step.title}
                width={120}
                height={120}
                className="mb-3"
              />
              <h3 className="text-[#00A651] font-semibold text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ CTA Button */}
      <button className="mt-16 bg-[#0F7CDC] hover:bg-[#0d6bc2] text-white font-semibold px-8 py-3 rounded-md shadow-md transition">
        Enroll For Mentorship
      </button>
    </section>
  );
};

export default MentorshipSection;
