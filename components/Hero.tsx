"use client";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://jeetsarthi.com/wp-content/uploads/2025/09/hero-image-web.webp')`,
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#005EB8]/65"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full flex flex-col lg:flex-row items-center justify-between gap-10 py-12 sm:py-16 lg:py-24">
        {/* Left Text Section */}
        <div className="text-white max-w-xl text-center lg:text-left px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Secure Your Dream Rank in <br />
            <span className="text-white">NEET & JEE with JEET SARTHI</span>
          </h1>

          <p className="text-lg font-medium mb-2">
            Powered by <span className="font-semibold">Shiksha Nation</span>
          </p>

          <div className="mx-auto lg:mx-0 w-2/3 h-[1px] bg-white mb-4"></div>

          <p className="text-base font-medium leading-relaxed">
            Personalized One-on-One Mentorship from IITians & Doctors Who’ve
            Already Cracked It
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-transparent p-6 sm:p-8 md:p-10 w-full max-w-xl rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Book your FREE First Session
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-[#333]">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                Name <span className="text-[#ff0000]">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-sm px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                Email <span className="text-[#ff0000]">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-sm px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                Phone Number <span className="text-[#ff0000]">*</span>
              </label>
              <div className="relative py-[10px]">
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full rounded-sm px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                />
                <span className="absolute left-0 right-3 bottom-[-20px] text-[#D91A60] text-sm font-medium">
                  Send OTP
                </span>
              </div>
            </div>

            {/* Student Class */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                Student Class <span className="text-[#ff0000]">*</span>
              </label>
              <div className="relative flex items-center">
                <select className="appearance-none w-full rounded-sm px-4 py-2 pr-10 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]">
                  <option>Dropper</option>
                  <option>12th</option>
                  <option>11th</option>
                  <option>10th</option>
                  <option>9th</option>
                </select>
                <GoTriangleDown className="absolute right-3 text-[#333] h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Exam Type */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                Exam Type <span className="text-[#ff0000]">*</span>
              </label>
              <div className="relative flex items-center">
                <select className="appearance-none w-full rounded-sm px-4 py-2 pr-10 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]">
                  <option>NEET</option>
                  <option>IIT-JEE</option>
                  <option>Boards + NEET</option>
                  <option>Boards + IIT + JEE</option>
                </select>
                <GoTriangleDown className="absolute right-3 text-[#333] h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-sm px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
              />
            </div>

            {/* Help */}
            <div className="sm:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-1 text-white">
                How Can We Help?
              </label>
              <div className="relative flex items-center">
                <select className="appearance-none w-full rounded-sm px-4 py-2 pr-10 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]">
                  <option>Backlog Management</option>
                  <option>Balancing Health and Study</option>
                  <option>Consistency in Revision</option>
                  <option>Droppers Issues</option>
                  <option>Exam Stress and Anxiety</option>
                  <option>Handling Mock Tests and Analysis</option>
                  <option>Motivation and Burnout</option>
                  <option>Paper Strategy</option>
                  <option>Peer Pressure and Expectations</option>
                  <option>Subject-Wise Problems</option>
                  <option>Time Management</option>
                  <option>Others</option>
                </select>
                <GoTriangleDown className="absolute right-3 text-[#333] h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-[#74C043] hover:bg-white hover:text-[#74C043] text-white font-semibold py-3 rounded-sm transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
