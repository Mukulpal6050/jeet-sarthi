"use client";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20">
      {/* Left Image with Blue Circle */}
      <div className="relative flex justify-center items-center mb-12 md:mb-0 md:mr-12">
        <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] bg-[#005EB8] rounded-full"></div>
        <Image
          src="https://jeetsarthi.com/wp-content/uploads/2025/09/indian-student-web.webp"
          alt="Student"
          width={400}
          height={480}
          className="relative z-10 object-contain w-[250px] sm:w-[300px] md:w-[370px] lg:w-[400px] h-auto"
        />
      </div>

      {/* Right Content Section */}
      <div className="max-w-[540px] text-center md:text-left flex flex-col items-center md:items-start">
        {/* Title */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#005EB8] leading-tight mb-8">
          Exclusive{" "}
          <span className="group cursor-pointer">
            <span className="text-[#005EB8]">J</span>
            <span className="text-[#74C043] group-hover:text-[#005EB8] transition-colors duration-300">
              EET
            </span>{" "}
            SARTHI
          </span>{" "}
          Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full">
          {/* Daily Routine Guidance */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/daily-schedule.svg"
              alt="Daily Routine Guidance"
              width={80}
              height={80}
              className="w-[70px] sm:w-[45px] h-auto mb-2 sm:mb-0"
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

          {/* Tips & Tricks from Toppers */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/tips-tricks.svg"
              alt="Tips & Tricks from Toppers"
              width={45}
              height={45}
            />
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Tips & Tricks from Toppers
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Learn what actually works in the exam.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 my-10"></div>

        {/* Bottom Two Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full mb-10">
          {/* Interactive Sessions */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/interactive.svg"
              alt="Interactive Sessions"
              width={45}
              height={45}
            />
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-[15px] text-[#1F1F1F]">
                Interactive Sessions
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Insights on exam patterns and preparation hacks.
              </p>
            </div>
          </div>

          {/* Dedicated Mentorship */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Image
              src="https://jeetsarthi.com/wp-content/uploads/2025/09/one-one-one-3.svg"
              alt="Dedicated One-on-One Mentorship"
              width={45}
              height={45}
            />
            <div className="text-center sm:text-left">
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
        <button className="bg-[#005EB8] hover:bg-[#3DCF30] text-white font-semibold px-8 py-3 rounded-md transition-all">
          Enroll For Mentorship
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
