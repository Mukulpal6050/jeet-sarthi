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
      className="w-full py-20 px-6"
      style={{
        background: 'linear-gradient(90deg, #0F7CDC 0%, #3DCF30 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-14">
          Our Experience = Your Results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mb-12">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-[50px] p-8 flex flex-col items-center justify-center shadow-md transition-transform duration-300 hover:scale-95"
            >
              <div className="w-16 h-16 mb-5 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-lg leading-relaxed text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <button className="bg-white text-[#3DCF30] hover:text-[#0F7CDC] font-semibold px-8 py-3 rounded-md transition">
          Enroll For Mentorship
        </button>
      </div>
    </section>
  )
}
