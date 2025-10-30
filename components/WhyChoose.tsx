'use client'
import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
  const features = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/12129/12129611.png',
      title: 'One-on-One Guidance:',
      desc: 'Personalized strategies by top-ranking mentors.',
    },
    {
      icon: 'https://cdn-icons-png.freepik.com/256/6172/6172187.png',
      title: 'Mock Tests & Feedback',
      desc: 'Real exam simulation + analysis = higher scores.',
    },
    {
      icon: 'https://i.pinimg.com/474x/8d/91/0b/8d910b975dafba471817885c7c42a074.jpg',
      title: 'Constant Doubt Support',
      desc: 'Get answers instantly from your junior mentor.',
    },
    {
      icon: 'https://images.squarespace-cdn.com/content/v1/60f666771a1d004a9ae4f8b2/f0119414-15af-4c3e-9fc7-a8b5d3ebd75f/Untitled+design+(8).png',
      title: 'Progress Tracking',
      desc: 'Regular reviews with your senior mentor keep you aligned.',
    },
    {
      icon: 'https://cdn-icons-png.freepik.com/256/9119/9119185.png?semt=ais_white_label',
      title: 'Time Mastery',
      desc: 'Practice managing every second in the exam hall.',
    },
    {
      icon: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfZF2RZVh9HKfg8BRzbux4zHSER1LVRbpE-ljTcbkJKqN8GNYz',
      title: 'Stress-Free Prep',
      desc: 'Build confidence and mental resilience for exam day.',
    },
    {
      icon: 'https://i.pinimg.com/736x/74/60/97/7460972c7293167cfb4d746526d10d44.jpg',
      title: 'Dual Support System',
      desc: 'Senior mentor sets your roadmap, junior mentor ensures you follow it daily.',
    },
    {
      icon: 'https://cdn-icons-png.freepik.com/512/4447/4447946.png',
      title: 'Proven Shortcuts & Techniques',
      desc: 'Learn to solve smarter, faster, and with accuracy.',
    },
    {
      icon: 'https://static.vecteezy.com/system/resources/previews/020/082/588/non_2x/creative-design-icon-of-notepad-vector.jpg',
      title: 'Notes & Resources',
      desc: 'Expert-curated, precise, and effective study material.',
    },
  ]

  const itemsPerRow = 3
  const rowCount = Math.ceil(features.length / itemsPerRow)

  return (
    <section className="bg-white py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0F7CDC] mb-12">
          Why Choose <span className="text-[#3DCF30]">JEET</span>{' '}
          <span className="text-[#0F7CDC]">SARTHI Mentorship?</span>
        </h2>

        {/* ✅ Desktop grid layout (unchanged, only shows from lg and above) */}
        <div className="hidden lg:grid grid-cols-3 mb-10">
          {features.map((item, index) => {
            const currentRow = Math.floor(index / itemsPerRow) + 1
            const isLastRow = currentRow === rowCount
            const isLastCol = index % itemsPerRow === itemsPerRow - 1

            const lastRowClass = isLastRow ? 'feature--no-bottom' : ''
            const lastColClass = isLastCol ? 'feature--no-right' : ''

            return (
              <div
                key={index}
                className={`feature relative flex justify-between items-start px-6 py-7 bg-white ${lastRowClass} ${lastColClass}`}
              >
                <div className="pr-4 w-[75%] text-left">
                  <h3 className="font-semibold text-[#1a1a1a] text-[18px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-12 h-12 flex-shrink-0 ml-3 flex items-center justify-center hover:scale-90 transition-transform duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* ✅ Mobile stacked layout (icon left, text right) */}
        <div className="flex flex-col lg:hidden divide-y divide-gray-300 mb-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-4 py-5 px-2"
            >
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-base text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-[#0F7CDC] hover:bg-[#3DCF30] text-white font-semibold px-8 py-3 rounded-md transition">
          Enroll For Mentorship
        </button>
      </div>

      {/* ✅ Line separators only for desktop grid */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .feature {
            position: relative;
            box-sizing: border-box;
          }
          .feature::after {
            content: '';
            position: absolute;
            left: 16px;
            right: 16px;
            bottom: 0;
            height: 1px;
            background: #343432;
          }
          .feature::before {
            content: '';
            position: absolute;
            top: 10px;
            bottom: 10px;
            right: 0;
            width: 1px;
            background: #343432;
          }
          .feature--no-bottom::after {
            display: none;
          }
          .feature--no-right::before {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
