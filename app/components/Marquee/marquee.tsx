"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const universities = [
  { name: "Harvard", logo: "/Harvard.png" },
  { name: "Stanford", logo: "/Stanford.png" },
  { name: "Columbia", logo: "/Columbia.png" },
  { name: "UCLA", logo: "/UCLA.png" },
  { name: "Illinois", logo: "/illinois.svg" },
  { name: "Harvard", logo: "/Harvard.png" },
  { name: "Stanford", logo: "/Stanford.png" },
  { name: "Columbia", logo: "/Columbia.png" },
  { name: "UCLA", logo: "/UCLA.png" },
  { name: "Illinois", logo: "/illinois.svg" },
  { name: "Harvard", logo: "/Harvard.png" },
  { name: "Stanford", logo: "/Stanford.png" },
  { name: "Columbia", logo: "/Columbia.png" },
  { name: "UCLA", logo: "/UCLA.png" },
  { name: "Illinois", logo: "/illinois.svg" },
  { name: "Harvard", logo: "/Harvard.png" },
  { name: "Stanford", logo: "/Stanford.png" },
  { name: "Columbia", logo: "/Columbia.png" },
  { name: "UCLA", logo: "/UCLA.png" },
  { name: "Illinois", logo: "/illinois.svg" },
];

const Marquee = () => {
  return (
    <section className="relative bg-white ">
      {/* Blue strip at the top */}
      <div className="h-1 w-full" style={{ backgroundColor: '#081B34' }}></div>
      
      {/* Header with yellow highlight */}
      <div className="py-4 sm:py-12 px-4">
      <h2 className="text-left text-xl  max-w-7xl mx-auto sm:text-3xl md:text-4xl lg:text-[32px] font-medium text-neutral-900 mb-0 sm:mb-0">
          <span className="relative inline-block font-bold">
            <span className="relative z-10"> Our Alumni Are Now Studying At.</span>
            <span className="absolute bottom-0.5 left-0 right-0 lg:h-5 h-2 z-0 bg-[#FDEC04] sm:-bottom-0.5 "></span>
          </span>
         
        </h2>
       
        
        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <div className="flex">
            <TranslateWrapper>
              <LogoItems />
            </TranslateWrapper>
            <TranslateWrapper>
              <LogoItems />
            </TranslateWrapper>
            <TranslateWrapper>
              <LogoItems />
            </TranslateWrapper>
          </div>
        </div>
      </div>
<hr className="border-t-2 border-[#D9D9D9] w-11/12 mx-auto"/>
      {/* Statistics Section */}
      <div className="">
        <div className="py-4 sm:py-12 px-1 lg:px-4 max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Statistic 
                number="250+" 
                description="Students Graduated" 
                color="orange" 
              />
              <Statistic 
                number="10+" 
                description="Universities Attended by Alumni" 
                color="blue" 
              />
              <Statistic 
                number="9" 
                description="Intensive Days" 
                color="blue" 
              />
              <Statistic 
                number="100%" 
                description="Student Support" 
                color="orange" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Statistic = ({ 
  number, 
  description, 
  color 
}: { 
  number: string; 
  description: string; 
  color: 'blue' | 'orange' 
}) => {
  const numberColor = color === 'blue' ? '#2962FF' : '#FF7043';
  
  return (
    <div className="text-center px-2 sm:px-0">
      <div 
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide"
        style={{ color: numberColor }}
      >
        {number}
      </div>
      <p className="text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-neutral-800 font-normal leading-tight mx-auto">
        {description === "Universities Attended by Alumni" ? (
          <>
            Universities Attended by<br />Alumni
          </>
        ) : (
          description
        )}
      </p>
    </div>
  );
};

const TranslateWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-8 md:gap-12 px-4"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ name, logo }: { name: string; logo: string }) => {
  return (
      <div className="flex items-center justify-center gap-3 md:gap-4 shrink-0">
      <div className="relative h-20 w-20 sm:h-16 sm:w-16 md:h-36 md:w-36 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          fill
          className="w-full h-full object-contain"
          sizes="(max-width: 768px) 256px, 512px"
        />
      </div>
    </div>
  );
};

const LogoItems = () => (
  <>
    {universities.map((uni, index) => (
      <LogoItem key={`${uni.name}-${index}`} name={uni.name} logo={uni.logo} />
    ))}
  </>
);

export default Marquee;

