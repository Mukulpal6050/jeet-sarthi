"use client";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-white">
      {/* Left: Student Image with Blue Circle */}
      <div className="relative flex justify-center items-center mb-10 md:mb-0">
        {/* ⬆️ Circle Bigger */}
        <div className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] bg-[#005EB8] rounded-full"></div>

        {/* ⬆️ Image Slightly Bigger */}
        <Image
          src="https://jeetsarthi.com/wp-content/uploads/2025/09/indian-student-web.webp"
          alt="Student"
          width={380}
          height={460}
          className="relative z-10 object-contain md:w-[370px] md:h-auto"
        />
      </div>

      {/* Right: Benefits Content */}
      <div className="max-w-[520px] text-left md:ml-16">
        <h2 className="text-[30px] md:text-[36px] font-bold leading-tight text-[#005EB8] mb-8">
          Exclusive{" "}
          <span className="group cursor-pointer">
            {/* JE */}
            <span className="text-[#005EB8]">J</span>
            {/* EET hover effect */}
            <span className="text-[#74C043] group-hover:text-[#005EB8] transition-colors duration-300">
              EET
            </span>{" "}
            SARTHI
          </span>{" "}
          Benefits
        </h2>

        {/* Upper Two Items */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 mb-6">
          {/* 1️⃣ Daily Routine Guidance */}
          <div className="flex items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/daily-schedule.svg"
              alt="Daily Routine Guidance"
              width={42}
              height={42}
            />
            <div>
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Daily Routine Guidance
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Stay disciplined and consistent.
              </p>
            </div>
          </div>

          {/* 2️⃣ Tips & Tricks from Toppers */}
          <div className="flex items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/tips-tricks.svg"
              alt="Tips & Tricks from Toppers"
              width={42}
              height={42}
            />
            <div>
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Tips & Tricks from Toppers
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Learn what actually works in the exam.
              </p>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-b border-gray-300 mb-6"></div>

        {/* Lower Two Items */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 mb-10">
          {/* 3️⃣ Interactive Sessions */}
          <div className="flex items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/interactive.svg"
              alt="Interactive Sessions"
              width={42}
              height={42}
            />
            <div>
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Interactive Sessions
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Insights on exam patterns and preparation hacks.
              </p>
            </div>
          </div>

          {/* 4️⃣ Dedicated One-on-One Mentorship */}
          <div className="flex items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/one-one-one-3.svg"
              alt="Dedicated One-on-One Mentorship"
              width={42}
              height={42}
            />
            <div>
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Dedicated One-on-One Mentorship
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Personalized support at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#005EB8] hover:bg-[#004b93] text-white font-semibold px-8 py-3 rounded-md transition-all">
          Enroll For Mentorship
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
