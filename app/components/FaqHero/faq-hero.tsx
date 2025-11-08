'use client';

import Image from 'next/image';
import { type ReactNode, useState } from 'react';

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: 'How long is the program?',
    answer: (
      <p>
        Both the StemPrep101 and the BizPrep101 programs are 9 days long, inclusive of one weekend in between.
        They start on a Monday and conclude on the Tuesday of the following week.
      </p>
    ),
  },
  {
    question: 'Who issues the certifications?',
    answer: (
      <>
        <p>
          The certifications for the workshops are issued directly by the respective universities themselves.
          SUTD for the StemPrep101 and SMU for the BizPrep101.
        </p>
        <p className="mt-4">
          This is a great value booster to the student’s personal profile that lets them stand apart from their peers when
          applying to universities.
        </p>
      </>
    ),
  },
  {
    question: 'What does the price include?',
    answer: (
      <>
        <p>The fee covers the full program experience:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Accommodation (residential)</li>
          <li>Meals as specified in the daily programs*</li>
          <li>Tuition</li>
          <li>Academic materials (students are required to bring their own laptops)</li>
          <li>Social activities and events</li>
          <li>All standard excursions including admission costs</li>
          <li>Graduation certificate and academic progress report</li>
        </ul>
        <p className="mt-4 text-sm italic">
          * Vegetarian and non-vegetarian options will be available. We will be unable to cater to specific dietary restrictions beyond this.
        </p>
      </>
    ),
  },
  {
    question: 'What equipment are students expected to bring?',
    answer: (
      <p>
        Students must bring their own laptops, personal essentials, and any additional items specified in the pre-departure checklist
        that will be shared closer to the program start date.
      </p>
    ),
  },
  {
    question: 'What is the booking process?',
    answer: (
      <p>
        Booking is done through our website. Once you have selected the program you wish to join, you will be redirected to a booking page where you can complete the payment and confirm your booking.
      </p>
    ),
  },
  {
    question: 'Is there a booking deadline?',
    answer: (
      <p>
        Yes, there is a booking deadline. The deadline for booking is 1 week before the program start date.
      </p>
    ),
  },
  {
    question: 'Is there an entrance test to assess eligibility?',
    answer: (
      <p>
        Yes, there is an entrance test to assess eligibility. The entrance test is a multiple choice test that is designed to assess the student's knowledge of the program.
      </p>
    ),
  },
  {
    question: 'What is the level of proficiency needed?',
    answer: (
      <p>
        There is no specific level of proficiency needed. However, students should have a basic understanding of the topics covered in the program.
      </p>
    ),
  },
  {
    question: 'What about accommodation?',
    answer: (
      <p>
        Accommodation is included in the price of the program. Students will be accommodated in a dormitory on the university campus.
      </p>
    ),
  },
  {
    question: 'Are boys and girls housed separately?',
    answer: (
      <p>
        Yes, boys and girls are housed separately.
      </p>
    ),
  },
  {
    question: 'Who looks after the students?',
    answer: (
      <p>
        The program is run by the university itself. The university will provide a coordinator to look after the students.
      </p>
    ),
  },
  {
    question: 'What about travel insurance? ',
    answer: (
      <p>
        Yes, the students will be able to attend the university classes.
      </p>
    ),
  }
];

export default function FaqHero() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden py-16 md:py-24">
      <Image
        src="/bg-faq.png"
        alt="FAQ background pattern"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 -z-10 bg-[#03163E]/70" />
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#101E46]/40 via-transparent to-[#03091B]/20" /> */}

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 text-white sm:px-6 lg:px-8">
        <header className="text-center">
        
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
  FAQ
          </h1>
      
        </header>

        {/* Desktop / Tablet Cards */}
        <div className="hidden grid-cols-1 gap-6 md:grid">
          {faqs.map((item, index) => (
            <article
              key={item.question}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/95 p-8 text-left text-slate-900 shadow-xl shadow-black/10"
            >
              <h3 className="text-xl font-semibold md:text-2xl border-b border-dashed pb-2">{item.question}</h3>
              <div className="space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                {item.answer}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="space-y-4 md:hidden">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/95 text-slate-900 shadow-lg shadow-black/10 transition duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full  items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold"
                >
                  <span className='font-bold '>{item.question}</span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center  transition-transform ${
                      isOpen ? 'rotate-180 ' : 'bg-transparent'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-8 h-8"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className={`overflow-hidden px-5 ${isOpen ? 'pb-5' : 'pb-0'} text-base leading-relaxed text-[#0A2342]`}>
                    <div className="space-y-4 border-t border-dashed pt-2">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


