"use client";

import Image from "next/image";

import CTA from "../CTA/cta";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Yash Mehta",
    university: "Stanford University",
    bootcamp: "STEM Bootcamp",
    bootcampColor: "blue",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Riya Mehta",
    university: "Stanford University",
    bootcamp: "Business Bootcamp",
    bootcampColor: "orange",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Aditya Patel",
    university: "Stanford University",
    bootcamp: "Business Bootcamp",
    bootcampColor: "orange",
  },
];

interface TestimonialsProps {
  withBackground?: boolean;
}

const Testimonials = ({ withBackground = false }: TestimonialsProps) => {
  return (
    <div className={`relative ${withBackground ? "overflow-hidden pt-10" : "bg-[#F7F3E3] "}`}>
      {withBackground && (
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg-testomonials.webp"
            alt="Testimonials background"
            fill
            priority
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-[#fdf9f1]/90" /> */}
        </div>
      )}

      <section className="relative bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-8 sm:mb-12">
            {!withBackground && (
              <>Student{" "}</>
              )}
            <span className="relative inline-block font-bold">
                <span className="relative z-10">Testimonials {" "}</span>
                {!withBackground && (
                  <span className="absolute  left-0 right-0 h-5 z-0 bg-[#FDEC04] -bottom-1 "></span>
                )}
              </span>
            </h1>

          {/* Testimonials Cards */}
          <div className="space-y-6 sm:space-y-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={{
                  ...testimonial,
                  bootcampColor:
                    testimonial.bootcampColor === "blue" || testimonial.bootcampColor === "orange"
                      ? testimonial.bootcampColor
                      : "blue",
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: {
    text: string;
    name: string;
    university: string;
    bootcamp: string;
    bootcampColor: "blue" | "orange";
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const bootcampBgColor =
    testimonial.bootcampColor === "blue" ? "#0000FF" : "#FF6600";

  return (
    <div className="bg-white rounded-[20px] border border-[#D9D9D9] shadow-lg p-4 sm:p-5">
      {/* Testimonial Text */}
      <p className="text-base sm:text-lg text-neutral-800 mb-6 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Student Info and Bootcamp Tag */}
      <div className="flex flex-row items-center justify-between gap-4">
        {/* Left: Student Info */}
        <div className="flex items-start gap-3">
          <div>
            <h3 className="text-sm sm:text-xl font-bold text-neutral-900 mb-1">
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-base text-nowrap text-neutral-600">
                Student: {testimonial.university}
              </p>
              {/* Stanford Logo Icon */}
              <div className="relative w-3 h-3 sm:w-5 sm:h-5 shrink-0">
                <Image
                  src="/Stanford-small.png"
                  alt="Stanford University"
                  fill
                  className="object-contain rounded-full"
                  sizes="28px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bootcamp Tag */}
        <div className="shrink-0">
          <span
            className="inline-block px-3 py-2 rounded-full text-white text-xs sm:text-baseline font-semibold whitespace-nowrap"
            style={{ backgroundColor: bootcampBgColor }}
          >
            {testimonial.bootcamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

