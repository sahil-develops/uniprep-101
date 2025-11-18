"use client";

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

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

const groupedSlides = [slides.slice(0, 2), slides.slice(2)];

const SlideCard = ({ title, description }: { title: string; description: string }) => (
  <article className="mx-auto flex h-full max-w-[340px] flex-col justify-center px-1 sm:max-w-[380px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[560px]">
    <div className="card-gradient-wrapper relative isolation-auto rounded-[28px] p-[3px] sm:rounded-[36px] sm:p-[4px]">
      <div className="h-full rounded-[24px] bg-white px-6 py-8 text-center shadow-[0_18px_45px_-28px_rgba(10,20,49,0.45)] sm:rounded-[32px] sm:px-8 sm:py-10">
        <h3 className="text-xl font-semibold text-[#0A1431] sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#35436B] sm:mt-6 sm:text-lg sm:leading-7">
          {description}
        </p>
      </div>
    </div>
  </article>
);

export default function AboutBootcamps() {
  return (
    <section className="bg-[#F7F3E3] lg:py-20 py-5">
      <div className="mx-auto flex max-w-7xl flex-col lg:gap-12 gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-balance text-2xl font-bold text-[#0A1431] sm:text-4xl lg:text-5xl">
            How Our Bootcamps Work
          </h2>
     
        </div>

        <div className="relative lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true, el: '.about-bootcamps-pagination' }}
            spaceBetween={24}
            slidesPerView={1.15}
            centeredSlides
            centeredSlidesBounds
            grabCursor
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 28,
              },
              768: {
                slidesPerView: 1.35,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 1.45,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 1.4,
                spaceBetween: 10,
              },
            }}
            className="about-bootcamps-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title} className="h-auto!">
                <SlideCard title={slide.title} description={slide.description} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="about-bootcamps-pagination mt-10 flex items-center justify-center gap-3" />
        </div>

        <div className="relative hidden lg:block">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true, el: '.about-bootcamps-pagination-desktop' }}
            spaceBetween={32}
            slidesPerView={1}
            grabCursor
            className="about-bootcamps-swiper-desktop"
          >
            {groupedSlides
              .filter((group) => group.length > 0)
              .map((group, index) => (
              <SwiperSlide key={`group-${index}`} className="h-auto!">
                <div className="flex items-stretch justify-center gap-6">
                  {group.map((slide) => (
                    <SlideCard key={slide.title} title={slide.title} description={slide.description} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="about-bootcamps-pagination-desktop mt-12 flex items-center justify-center gap-3" />
        </div>
      </div>

      <style jsx global>{`
        .about-bootcamps-swiper {
          padding-bottom: 1.25rem;
        }

        .about-bootcamps-swiper-desktop {
          padding-bottom: 4rem;
        }

        .about-bootcamps-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .about-bootcamps-swiper .swiper-slide {
          display: flex;
          justify-content: center;
        }

        .about-bootcamps-swiper-desktop .swiper-wrapper {
          align-items: stretch;
        }

        .about-bootcamps-swiper-desktop .swiper-slide {
          display: flex;
          justify-content: center;
        }

        .about-bootcamps-pagination .swiper-pagination-bullet {
          height: 10px;
          width: 10px;
          border-radius: 9999px;
          background: #cdd3e6;
          opacity: 1;
          transition: transform 0.2s ease, background-color 0.2s ease,
            width 0.2s ease;
        }

        .about-bootcamps-pagination .swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #000;
          transform: translateY(-1px);
        }

        .about-bootcamps-pagination-desktop .swiper-pagination-bullet {
          height: 10px;
          width: 10px;
          border-radius: 9999px;
          background: #cdd3e6;
          opacity: 1;
          transition: transform 0.2s ease, background-color 0.2s ease,
            width 0.2s ease;
        }

        .about-bootcamps-pagination-desktop .swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #000;
          transform: translateY(-1px);
        }

        .card-gradient-wrapper {
          background: conic-gradient(
            from 120deg at 50% 50%,
            #ff8a00 0deg,
            #ff5e5e 120deg,
            #3f5efb 240deg,
            #ff8a00 360deg
          );
        }

        @media (min-width: 768px) {
          .about-bootcamps-swiper {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 1280px) {
          .about-bootcamps-swiper-desktop {
            padding-bottom: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
}


