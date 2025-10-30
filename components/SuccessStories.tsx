"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

const QuoteIcon = ({ color }: { color: string }) => (
  <div
    className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12"
    style={{
      backgroundColor: color,
      WebkitMask:
        "url('https://cdn-icons-png.flaticon.com/512/6314/6314225.png') no-repeat center / contain",
      mask: "url('https://cdn-icons-png.flaticon.com/512/6314/6314225.png') no-repeat center / contain",
    }}
  />
);

const SuccessStories = () => {
  const stories = [
    {
      text: `I’m so grateful to my JEET SARTHI mentors. They didn’t just guide me academically — they treated my success as their own. My senior mentor gave me the right strategy, while my junior mentor checked on me daily and kept me disciplined. It felt like having a support system that truly cared, and my preparation level has improved tremendously.`,
      name: "Ruchir Bansal",
    },
    {
      text: `The one-on-one mentorship at JEET SARTHI helped me balance school with NEET prep. My mentor taught me how to study smarter, attempt tests strategically, and stay consistent. With constant check-ins and motivation, I could see my scores improve. Every aspirant should have this kind of personalized mentorship.`,
      name: "Amaiya Singhal",
    },
    {
      text: `JEET SARTHI mentors helped me solve problems faster and manage my time better. I loved how my junior mentor kept me on track with regular tasks, while my senior mentor showed me exam strategies that really worked. Their constant guidance and motivation made me feel confident and stress-free about my preparation.`,
      name: "Namrata Jha",
    },
    {
      text: `Before joining JEET SARTHI, I was overwhelmed with too many books and no clear direction. My mentors simplified everything — senior mentor guided me with proven study strategies, and my junior mentor kept me consistent with daily follow-ups. This constant push and personal attention made me more disciplined, confident, and ready for the exam.`,
      name: "Mayank Goyal",
    },
    {
      text: `I struggled with managing time during NEET prep, but JEET SARTHI’s structured approach helped me immensely. My mentors helped me track daily progress and focus on weak areas. Their mentorship completely changed my mindset toward preparation.`,
      name: "Aditi Sharma",
    },
    {
      text: `Joining JEET SARTHI was the best decision I made. The mentors genuinely cared about my success. Their consistent support and strategies helped me stay motivated throughout my preparation journey.`,
      name: "Rohan Mehta",
    },
  ];

  // Pagination dots styling
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        background: #dbeafe; /* light blue */
        opacity: 1;
        margin: 0 6px !important;
      }
      .swiper-pagination-bullet-active {
        background: #74C043 !important; /* green active dot */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="py-16 w-full px-6 md:px-16 bg-white text-center">
      <h2 className="text-[32px] md:text-[36px] font-bold mb-12 text-[#005EB8]">
        Success{" "}
        <span className="text-[#74C043] hover:text-[#005EB8] cursor-pointer">
          Stories
        </span>
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-[#EAF5EB] rounded-xl shadow-sm p-8 flex flex-col justify-between h-[420px] text-center">
              <div>
                {/* Quote Icon with hover color change */}
                <div className="relative inline-block">
                  <QuoteIcon color="#005EB8" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <QuoteIcon color="#74C043" />
                  </div>
                </div>

                {/* Story text */}
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {story.text}
                </p>
              </div>
            </div>
            <h4 className="mt-6 mb-6 font-semibold text-[#001B48] text-[16px]">
              {story.name}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination (left aligned) */}
      <div className="custom-pagination mt-8 pl-6 md:pl-20 flex justify-start"></div>
    </section>
  );
};

export default SuccessStories;
