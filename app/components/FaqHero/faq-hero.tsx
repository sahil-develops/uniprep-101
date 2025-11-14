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
        Both the StemPrep101 and the BizPrep101 programs are 9 days long, inclusive of one weekend in between. They start on a Monday and conclude on the Tuesday of the following week
      </p>
    ),
  },
  {
    question: 'Who issues the certifications?',
    answer: (
      <>
        <p>
        The certifications for the workshops are issued directly by the respective universities themselves -  SUTD for the StemPrep101 workshop and by SMU for the BizPrep101 workshop. This is a great value booster to the student’s personal profile that lets them stand apart from their peers when applying to universities
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
        Yes, students need to bring their own laptop and chargers for use in the workshops
      </p>
    ),
  },
  {
    question: 'What is the booking process?',
    answer: (
      <p>
    Participants will have to complete the application form (show link to app form in the website) and submit to us. This serves as a confirmation of their participation subject to our checks regarding eligibility based on their age as well as proficiency (see FAQs below on eligibility and proficiency). 

Once this is done, we will send you an email with a payment link for payment by credit / debit card.

      </p>
    ),
  },
  {
    question: 'Is there a booking deadline?',
    answer: (
      <p>
      Yes. February 15, 2026 is the booking deadline for the program starting on June 15, 2026 and March 15, 2026 is the deadline for the program starting on July 6, 2026. 

Registrations and payments have to be submitted by then. Note that cohort sizes are limited to a maximum of 35 students per program and subject to eligibility, places will be allotted on a first come, first serve basis
      </p>
    ),
  },
  {
    question: 'Is there an entrance test to assess eligibility?',
    answer: (
      <p>
        Yes, there is an entrance test to assess eligibility. The entrance test is a multiple choice test that is designed to assess the student&apos;s knowledge of the program.
      </p>
    ),
  },
  {
    question: 'What is the level of proficiency needed?',
    answer: (
      <p>
   A working knowledge of English is a must. Other than that, to maximise the benefit of each program, those applying for the StemPrep101 program should be familiar with Science topics and those registering for the BizPrep101 program should be familiar with basic reasoning and analysis skills
      </p>
    ),
  },
  {
    question: 'What about accommodation?',
    answer: (
      <p>
       The program price includes accommodation on a twin sharing basis at a modern hotel with all amenities.

Is there an option to opt out of the accommodation?

We strongly suggest that the students stay at accommodation provided by us as part of this program. This fosters bonding and networking opportunities with their fellow students. However, participants may have friends or family of their own here in Singapore with whom they may wish to stay or alternatively decide to come with other family members and get accommodation arranged separately. Those opting for that can do so in which case we will be happy to provide a program price without accommodation included.
      </p>
    ),
  },
  {
    question: 'Are boys and girls housed separately?',
    answer: (
      <p>
   Yes, boys and girls will be in separate twin sharing rooms in the hotel
      </p>
    ),
  },
  {
    question: 'Who looks after the students?',
    answer: (
      <p>
      There will be an overall Program Director who will be overseeing both programs and all students will be able to contact him/her through their mobile, WhatsApp and email. Contact details for the Program Director will be shared well in advance of the commencement of each program batch
      </p>
    ),
  },
  {
    question: 'Who will be responsible for procuring the visas? ',
    answer: (
      <p>
Participants are responsible for procuring their visas and the costs thereof. We will be happy to provide a letter to registrants confirming that they wish to travel to Singapore for participating in our program
      </p>
    ),
  },
  {
    question: 'What about travel insurance? ',
    answer: (
      <p>
     All participants will mandatorily have to purchase their own comprehensive travel insurance that covers the duration of the trip including but not limited to accidents, medical issues, repatriation and travel related incidents. We have a preferred provider with whom we have negotiated a discounted cost and will be happy to refer students to them. Proof of travel insurance is required prior to commencement of travel for the programs.
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

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 lg:pt-0 pt-5 text-white sm:px-6 lg:px-8">
        <header className="text-center">
        
          <h1 className="text-balance text-2xl font-bold text-white mb-6 sm:text-4xl lg:text-5xl">
  FAQ
          </h1>
      
        </header>

        {/* Desktop / Tablet Cards */}
        <div className="hidden grid-cols-1 gap-6 md:grid">
          {faqs.map((item) => (
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