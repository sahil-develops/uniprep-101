"use client";

import Image from "next/image";

import CTA from "../CTA/cta";

const testimonials = [
  {
    text: "Going into the courses, I was unsure of what to expect from the classes. I must say it was a really enriching experience as to what freshman-level academics could look like. I have gained a better understanding of the subjects after the rigorous classes and assignments given. As a student, I feel a lot more confident now going off to college.",
    name: "Adhi Daiv",
    university: "Stanford University",
    bootcamp: "STEM Bootcamp",
    bootcampColor: "blue",
    logoSrc: "/Stanford-small.png",
    logoAlt: "Stanford University logo",
  },
  {
    text: "Hello, I am Aneri Shah and I will be attending Arizona State University. The boot camp of StemPrep101 was very nice as it made the subjects lucid and helped me recap and understand further topics which I will be studying in my freshman year. I appreciate the efforts put in by the team.",
    name: "Aneri S.",
    university: "Arizona State University",
    bootcamp: "BUSINESS Bootcamp",
    bootcampColor: "orange",
    logoSrc: "/asu.png",
    logoAlt: "Arizona State University logo",
  },
  {
    text: "Despite the inherent challenges of online classes, I found them engaging and beginner-friendly, even though I lacked prior knowledge in physics. Professors Adam and Bassem were patient and always available to clarify any confusion. The systematic uploads of lecture videos, notes, and assignments were helpful for my review. If you pay attention, keep asking questions, review material, and do the assignments, you will be on an awesome track with holistic support from the professors.",
    name: "Sophia C.",
    university: "Purdue University",
    bootcamp: "BUSINESS Bootcamp",
    bootcampColor: "blue",
    logoSrc: "/purdue.png",
    logoAlt: "Purdue University logo",
  },
  {
    text: "StemPrep101 has greatly helped with my confidence going to university. Through my experience with this camp, I have learned many new skills and concepts with the assistance of awesome teachers and resources. A big thank you to the hardworking coordinators and instructors of StemPrep101 for making such a wonderful program for aspiring STEM students possible.",
    name: "Bokai H.",
    university: "McMaster University, Canada",
    bootcamp: "STEM Bootcamp",
    bootcampColor: "orange",
    logoSrc: "/images.png",
    logoAlt: "McMaster University logo",
  },
];

interface TestimonialsProps {
  withBackground?: boolean;
}

const Testimonials = ({ withBackground = false }: TestimonialsProps) => {
  return (
    <div className={`relative ${withBackground ? "overflow-hidden pt-10" : "bg-[#F7F3E3] "} `}>
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

      <section className={`relative ${withBackground ? "bg-transparent " : "bg-white"}  py-5 sm:py-12 lg:py-12 px-4 sm:px-6 lg:px-12`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[28px] lg:text-[32px] sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-8 sm:mb-12">
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
    logoSrc?: string;
    logoAlt?: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const bootcampBgColor =
    testimonial.bootcampColor === "orange" ? "#FF6600" : "#0000FF";

  return (
    <div className="bg-white rounded-[20px] border border-[#D9D9D9] shadow-lg p-4 sm:p-5">
      {/* Testimonial Text */}
      <p className="text-base sm:text-lg text-neutral-800 mb-6 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Student Info and Bootcamp Tag */}
      <div className="flex flex-row items-start justify-between lg:gap-4 gap-2">
        {/* Left: Student Info */}
        <div className="flex items-start gap-3">
          <div>
            <h3 className="text-xs sm:text-base font-bold text-neutral-900 mb-0">
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-base text-nowrap text-neutral-600">
                Student: {testimonial.university}
              </p>
              {testimonial.logoSrc && (
                <div className="relative w-5 h-5 sm:w-7 sm:h-7 shrink-0">
                  <Image
                    src={testimonial.logoSrc}
                    alt={testimonial.logoAlt ?? testimonial.university}
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Bootcamp Tag */}
        {/* {testimonial.bootcamp && (
          <div className="shrink-0">
            <span
              className="inline-block px-2 lg:px-3 py-1.5 lg:py-2 rounded-full text-white text-[9px] lg:text-sm sm:text-baseline font-semibold whitespace-nowrap"
              style={{ backgroundColor: bootcampBgColor }}
            >
              {testimonial.bootcamp}
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Testimonials;

