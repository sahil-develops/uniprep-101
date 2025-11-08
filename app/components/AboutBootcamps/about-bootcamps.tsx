"use client";

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Academic Foundation',
    description:
      'We partner with top universities to curate cutting-edge content and state-of-the-art workshops that anchor every bootcamp experience.',
  },
  {
    title: 'Real-World Application',
    description:
      'Students put theory into practice through industry visits, labs, and collaborative challenges designed with our innovation partners.',
  },
  {
    title: 'Mentor-Led Reflection',
    description:
      'Daily debriefs with mentors help learners connect insights, sharpen communication, and elevate their personal narratives.',
  },
  {
    title: 'Admissions Roadmap',
    description:
      'We close each program with tailored admissions strategy sessions so students leave with a clear, actionable plan forward.',
  },
];

export default function AboutBootcamps() {
  return (
    <section className="bg-[#F7F3E3] py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <div>
            <h2 className="text-center text-2xl  font-bold text-[#0A1431] sm:text-4xl">
              How Our Bootcamps Work
            </h2>
       
          </div>
        
        </div>

        <div className="relative lg:ml-0 ml-10">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: '.about-bootcamps-prev',
              nextEl: '.about-bootcamps-next',
            }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides
            centeredSlidesBounds
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 1,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 1,
                centeredSlides: false,
                centeredSlidesBounds: false,
                spaceBetween: 16,
              },
            }}
            grabCursor
            className="about-bootcamps-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title} className="h-auto pb-10 w-auto!">
                <article className="mx-auto h-full w-[207px] max-w-[85vw] px-2 sm:max-w-[75vw] md:w-[260px] md:max-w-[65vw] lg:w-full lg:max-w-2xl lg:px-4">
                  <div className="relative h-full rounded-[24px] bg-linear-to-br from-[#FF8A00] via-[#FF5E5E] to-[#3F5EFB] p-[2px] shadow-lg sm:rounded-[32px] sm:p-[3px]">
                    <div className="h-full rounded-[22px] bg-[#FBFBFF] px-4 py-6 text-center sm:rounded-[30px] sm:px-6 sm:py-10">
                      <h3 className="text-xl font-semibold text-[#0A1431] sm:text-3xl">
                        {slide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#35436B] sm:mt-4 sm:text-lg">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

    
        </div>
      </div>
    </section>
  );
}


