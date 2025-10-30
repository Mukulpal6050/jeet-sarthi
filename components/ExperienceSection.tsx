'use client'
import Image from 'next/image'
import React from 'react'

export default function ExperienceSection() {
  const experiences = [
    {
      icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_mei7JOvSEvSJf3Zt18m7Y_44uePHFCTbqbSjBx8TbgiQQNvV',
      title: '100+ Years of combined Mentorship Expertise',
    },
    {
      icon: 'https://png.pngitem.com/pimgs/s/236-2366782_registration-for-under-graduate-graduates-icon-png-transparent.png',
      title: 'Thousands of Aspirants Guided by Rankers',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/9204/9204524.png',
      title: 'One-on-One Daily Support to Keep You Disciplined',
    },
    {
      icon: 'https://img.freepik.com/premium-vector/have-eye-this-creative-icon-tactical-planning-trendy-concept_142112-839.jpg',
      title: 'Tailored Plans That Save Time & Maximize Practice',
    },
  ]

  return (
    <section
      className="w-full py-24 px-6 sm:px-10 lg:px-20"
      style={{
        background: 'linear-gradient(90deg, #0670B6 0%, #3DCF30 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16 leading-snug">
          Our Experience = Your Results
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 justify-center mb-16">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-[40px] p-10 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-95 hover:shadow-2xl"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-lg sm:text-xl leading-relaxed text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#3DCF30] hover:text-[#0F7CDC] font-semibold px-10 py-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
          Enroll For Mentorship
        </button>
      </div>
    </section>
  )
}
