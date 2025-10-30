'use client'
import Image from 'next/image'

export default function HeroSection() {
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
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-10 py-20">

                {/* Left Text Section */}
                <div className="text-white max-w-xl">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                        Secure Your Dream Rank in <br />
                        <span className="text-white">NEET & JEE with JEET SARTHI</span>
                    </h1>

                    <p className="text-lg font-medium mb-2">
                        Powered by <span className="font-semibold">Shiksha Nation</span>
                    </p>

                    <div className="w-2/3 h-[1px] bg-white mb-4"></div>

                    <p className="text-base font-medium leading-relaxed">
                        Personalized One-on-One Mentorship from IITians & Doctors
                        Who’ve Already Cracked It
                    </p>
                </div>

                {/* Right Form Section */}
                <div className="bg-transparent p-8 w-full max-w-xl">
                    <h2 className="text-2xl font-bold text-center text-white mb-8">
                        Book your FREE First Session
                    </h2>

                    <form className="space-y-5">
                        {/* Row 1 */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="+91"
                                    className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none"
                                />
                                <span className="text-xs text-red-600 cursor-pointer hover:underline ml-1">
                                    Send OTP
                                </span>
                            </div>
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    Student Class <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none">
                                    <option>Dropper</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    Exam Type <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none">
                                    <option>NEET</option>
                                    <option>JEE</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-white font-semibold mb-1 text-sm">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none"
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label className="block text-white font-semibold mb-1 text-sm">
                                How Can We Help?
                            </label>
                            <select className="w-full rounded-md border border-gray-300 bg-white text-gray-800 px-3 py-2 focus:ring-2 focus:ring-[#00a8ff] outline-none">
                                <option>Backlog Management</option>
                                <option>Doubt Solving</option>
                                <option>Test Preparation</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#28c244] hover:bg-[#22a73c] text-white font-semibold py-3 rounded-md mt-3 transition-all"
                        >
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
