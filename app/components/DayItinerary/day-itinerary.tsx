"use client";

import { useState } from 'react';
import Image from 'next/image';

interface DayItineraryItem {
  dayTitle: string;
  time: string;
  location: string;
  activities: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const dayItineraryData: DayItineraryItem[] = [
  {
    dayTitle: "Day 1: Arrival and Welcome",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
     "Ice-breaking activities with cohort",
      "Singapore city orientation walk"
    ],
    imageSrc: "/detailed-itenary-1.png",
    imageAlt: "Students in hands-on workshop",
    imagePosition: "right"
  },
  {
    dayTitle: "Day 2: Academic Foundation",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",
        "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-2.webp",
    imageAlt: "Students in industry exposure session",
    imagePosition: "left"
  },
  {
    dayTitle: "Day 3: Hands on Workshop",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-3.webp",
    imageAlt: "Students in hands-on workshop",
    imagePosition: "right"
  },
  {
    dayTitle: "Day 4: Industry Exposure",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-4.webp",
    imageAlt: "Students in industry exposure session",
    imagePosition: "left"
  },
  {
    dayTitle: "Day 5: Hands on Workshop",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-5.webp",
    imageAlt: "Students in hands-on workshop",
    imagePosition: "right"
  },
  {
    dayTitle: "Day 6: Industry Exposure",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-6.webp",
    imageAlt: "Students in industry exposure session",
    imagePosition: "left"
  },
  {
    dayTitle: "Day 7: Hands on Workshop",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",  
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-7.webp",
    imageAlt: "Students in industry exposure session",
    imagePosition: "left"
  },
  {
    dayTitle: "Day 8: Industry Exposure",
    time: "9am - 6pm",
    location: "University Campus",
    activities: [
     
      "Airport Pickup and Checkin",
      "Welcome ceremony and program overview",
      "Campus tour and facility introduction",
      "Ice-breaking activities with cohort",  
      "Singapore city orientation walk"
    ],
    imageSrc: "/Itenary-8.webp",
    imageAlt: "Students in industry exposure session",
    imagePosition: "left"
  }
];

const DayItinerary = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null); // Accordion closed by default on mobile

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <section className="relative bg-[#F7F3E3] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6">
            Detailed Day Itinerary
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Every day is carefully planned to maximize learning and cultural immersion
          </p>
        </div>

        {/* Itinerary Cards */}
        <div className="space-y-6 sm:space-y-8">
          {dayItineraryData.map((day, index) => (
            <DayCard
              key={index}
              day={day}
              index={index}
              isExpanded={expandedDay === index}
              onToggle={toggleDay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DayCardProps {
  day: DayItineraryItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const DayCard = ({ day, index, isExpanded, onToggle }: DayCardProps) => {
  const imageOnLeft = day.imagePosition === 'left';
  
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden ">
      {/* Mobile Accordion Header */}
      <button
        onClick={() => onToggle(index)}
        className="w-full lg:hidden flex items-center justify-between gap-3 p-0 text-left hover:bg-neutral-50 transition-colors"
      >
        {/* Image on Left */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-l-xl rounded-r-none overflow-hidden">
          <Image 
            src={day.imageSrc} 
            alt={day.imageAlt} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>
        
        {/* Text Content in Middle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5 leading-tight">
            {day.dayTitle}
          </h3>
          <div className="flex flex-row gap-1.5 text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="truncate">{day.time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="truncate">{day.location}</span>
            </div>
          </div>
        </div>
        
        {/* Chevron on Right */}
        <div className='pr-2'>

        <svg
          className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
            />
        </svg>
            </div>
      </button>

      {/* Mobile Accordion Content */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4">

          <div>
            <h4 className="text-lg font-bold text-navy mb-4">Daily Activities</h4>
            <ul className="space-y-3">
              {day.activities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5  flex items-center justify-center mt-0.5">
                  <svg className='w-5 h-5' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.833333" y="0.833333" width="18.3333" height="18.3333" rx="9.16667" stroke="#FF6600" strokeWidth="1.66667"/>
<path d="M14.1666 6.66663L8.43742 12.5L5.83325 9.84844" stroke="#FF6600" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  </div>
                  <span className="text-base text-neutral-700 flex-1">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row w-full gap-0">
        {/* Image Section */}
        {imageOnLeft && (
          <div className="relative w-full h-full min-h-full lg:w-4/5 bg-white ">
          <div className="h-full w-full">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
              <div className={`relative w-full h-64 sm:h-80 lg:h-96  overflow-hidden ${!imageOnLeft ? 'rounded-r-xl rounded-l-none' : 'rounded-l-xl rounded-r-none'}`}>
              <div className={`relative w-full h-full  overflow-hidden `}>
                <Image
                  src={day.imageSrc}
                  alt={day.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
        )}

        {/* Content Section */}
        <div className="p-8 lg:p-0 lg:pl-5 lg:my-0 flex lg:w-2/5 flex-col justify-center bg-white">
        <div className='py-2'>

          <h3 className="text-lg lg:text-xl font-bold text-navy mb-2">
            {day.dayTitle}
          </h3>
          
          <div className="flex flex-row gap-x-4 text-base lg:text-lg text-neutral-600">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
              </svg>
              <span className='text-lg'>{day.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
              </svg>
              <span className='text-lg'>{day.location}</span>
            </div>
  
          </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-navy mb-2">Daily Activities</h4>
            <ul className="space-y-3">
              <li className='text-base lg:text-sm text-black'>Ice-breaking activities with cohort</li>
              {day.activities.map((activity, idx) => (
                
                <li key={idx} className="flex items-start justify-start gap-3">
                  
                  <div className="shrink-0 w-5 h-5 rounded-full  flex items-start justify-start mt-0.5">
                    
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.833333" y="0.833333" width="22.3333" height="22.3333" rx="11.1667" stroke="#E35F30" strokeWidth="1.66667"/>
<path d="M17 8L10.125 15L7 11.8182" stroke="#E35F30" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  </div>
                  <span className="text-base lg:text-sm text-neutral-700 flex-1">{activity}</span>
                </li>
                
              ))}
            </ul>
          </div>
        </div>

        {/* Image Section (Right Side) */}
        {!imageOnLeft && (
          <div className="relative w-full h-full min-h-full lg:w-3/5 bg-white ">
            <div className="h-full w-full">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div className={`relative w-full h-64 sm:h-80 lg:h-96  overflow-hidden ${imageOnLeft ? 'rounded-l-xl rounded-r-none' : 'rounded-r-xl rounded-l-none'}`}>
                <div className={`relative w-full h-full  overflow-hidden `}>
                  <Image
                    src={day.imageSrc}
                    alt={day.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayItinerary;
