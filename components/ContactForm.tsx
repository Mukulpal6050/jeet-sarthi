"use client";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

const ContactForm = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20"
            style={{
                backgroundImage:
                    "url('https://jeetsarthi.com/wp-content/uploads/2025/09/insian-student-web-3-scaled.webp')",
            }}
        >
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#005EB8]/65"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-white">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Start Your Success Journey With{" "}
                    <span className="text-[#74C043]">JEET SARTHI</span>
                </h2>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">
                            Name <span className="text-[#ff0000]">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-sm px-4 py-2 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">
                            Email <span className="text-[#ff0000]">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-sm px-4 py-2 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">
                            Phone Number <span className="text-[#ff0000]">*</span>
                        </label>
                        <div className="relative py-[10px]">
                            <input
                                type="tel"
                                placeholder="+91"
                                className="w-full rounded-sm px-4 py-2 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                            />
                            <span className="absolute left-0 right-3 bottom-[-20px] text-[#D91A60] text-sm font-medium">
                                Send OTP
                            </span>
                        </div>
                    </div>

                    {/* Student Class */}
                    <div className="flex flex-col relative">
                        <label className="text-sm font-semibold mb-1">
                            Student Class <span className="text-[#ff0000]">*</span>
                        </label>
                        <select className="appearance-none w-full rounded-sm px-4 py-2 pr-10 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]">
                            <option>Dropper</option>
                            <option>12th</option>
                            <option>11th</option>
                            <option>10th</option>
                            <option>9th</option>
                        </select>
                        {/* Custom Icon */}
                        <GoTriangleDown
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#333] h-6 w-6"
                        />
                    </div>

                    {/* Exam Type */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">
                            Exam Type <span className="text-[#ff0000]">*</span>
                        </label>
                        <div className="relative">
                            <select className="appearance-none w-full rounded-sm px-4 py-2 pr-10 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]">
                                <option>NEET</option>
                                <option>IIT-JEE</option>
                                <option>Boards + NEET</option>
                                <option>Boards + IIT + JEE</option>
                            </select>
                            <GoTriangleDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#333] h-6 w-6" />
                        </div>
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full rounded-sm px-4 py-2 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                        />
                    </div>

                    {/* Help */}
                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-sm font-semibold mb-1">
                            How Can We Help?
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none w-full rounded-sm px-4 py-2 pr-10 text-[#333] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005EB8]"
                                defaultValue="Backlog Management"
                            >
                                <option>Backlog Management</option>
                                <option>Balancing Health and Study</option>
                                <option>Consistency in Revision</option>
                                <option>Droppers Issues</option>
                                <option>Exam Stress and Anxiety</option>
                                <option>Handling Mock Tests and Analysis</option>
                                <option>How to Prepare for Exams</option>
                                <option>Motivation and Burnout</option>
                                <option>Paper Strategy</option>
                                <option>Peer Pressure and Expectations</option>
                                <option>Subject-Wise Problems</option>
                                <option>Time Management</option>
                                <option>Others</option>
                            </select>
                            <GoTriangleDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#333] h-6 w-6" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#74C043] hover:bg-[#66b239] text-white font-semibold py-3 rounded-sm transition-all"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
