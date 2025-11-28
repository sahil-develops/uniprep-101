"use client";

import Image from "next/image";
import CampusCollage from "../CampusCollage/campus-collage";
import Link from "next/link";

export interface ProgramCardData {
  title: string;
  description: string;
  imageSrc: string;
  university: {
    name: string;
    icon: string;
  };
  classSize: string;
  eligibility: string;
  includes: string;
  highlights: string[];
  price: string;
  redirectUrl: string;
}

interface ProgramCardProps {
  data: ProgramCardData;
  program?: boolean;

}

const ProgramCard = ({ data,program }: ProgramCardProps) => {
  return (
    <div className=" rounded-[20px]  overflow-hidden w-full">
      {/* Image Section */}
      {/* <div></div> */}

      {!program ? (
        <div className="relative w-full h-64 sm:h-80 rounded-t-[20px] overflow-hidden bg-white">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={data.imageSrc}
              alt={data.title}
              fill
              className="object-cover rounded-t-[20px]"
              style={{ objectPosition: 'bottom left' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      ) : (
        <CampusCollage 
          image1={data.imageSrc}
          image2={data.imageSrc}
          alt1="Singapore University of Technology and Design Campus"
          alt2="Singapore Management University Campus"
        />
 
      )} 


      {/* Content Section */}
      <div className="p-4 bg-white max-w-2xl w-full rounded-b-[20px]  -translate-y-10 h-full ">
        {/* Title */}
        <div className="flex flex-col gap-4">

        <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          {data.title + "101"}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-neutral-700 mb-2 lg:mb-6 leading-relaxed">
          {data.description}
        </p>

        {/* Program Details Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-x-6 sm:gap-y-4 mb-8">
          {/* University */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 shrink-0 mt-1">
              <Image
                src={data.university.icon}
                alt="University"
                fill
                className="object-contain"
                sizes="28px"
                />
            </div>
            <div className="flex-1">
              <p className="text-xs lg:text-sm font-bold text-neutral-800 leading-tight">
                {data.university.name}
              </p>
            </div>
          </div>

          {/* Class Size */}
          <div className="flex items-start gap-3">
            <div className="relative w-7 h-7 shrink-0 mt-1">
              <Image
                src="/users.png"
                alt="Class"
                fill
                className="object-contain"
                sizes="28px"
                />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">
                <span className="block lg:text-sm text-xs font-bold">Class</span>
                <span className="text-sm text-neutral-600">{data.classSize} Students Max</span>
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="flex items-start gap-3">
            <div className="relative w-7 h-7 shrink-0 mt-1">
              <Image
                src="/target.png"
                alt="Eligibility"
                fill
                className="object-contain"
                sizes="28px"
                />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">
                <span className="block lg:text-sm text-xs font-bold">Eligibility</span>
                <span className="text-sm text-neutral-600">{data.eligibility}</span>
              </p>
            </div>
          </div>

          {/* Includes */}
          <div className="flex items-start gap-3">
            <div className="relative w-7 h-7 shrink-0 mt-1">
              <Image
                src="/home.png"
                alt="Includes"
                fill
                className="object-contain"
                sizes="28px"
                />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">
                <span className="block lg:text-sm text-xs font-bold">Includes</span>
                <span className="text-sm text-neutral-600">{data.includes}</span>
              </p>
            </div>
          </div>
        </div>

            
        {/* Program Highlights */}
        <div className="mb-8">
          <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-4">
            Program Highlights
          </h4>
          <ul className="space-y-3">
            {data.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="relative w-5 h-5 shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.29791" y="1.29791" width="28.554" height="28.554" rx="14.277" stroke="#FD9004" strokeWidth="2.59582"/>
<path d="M22.0643 10.3834L13.1412 19.4687L9.08521 15.339" stroke="#FD9004" strokeWidth="2.59582" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </div>
                <span className="text-sm sm:text-lg text-neutral-800">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>


        {/* Call to Action Buttons */}
        <div className={`${data.price === "USD 7,250" ? 'pt-6 sm:mt-[67px] lg:mt-12' : 'pt-6'} mb-6 flex flex-col  items-center justify-between gap-4`}>
          <Link href="/register">
          <button className="w-full cursor-pointer sm:w-auto text-lg sm:text-xl bg-primary hover:opacity-90 text-white font-medium px-12 py-2 rounded-lg flex items-center justify-center gap-2 transition-opacity duration-200 mb-0">
            Register Interest
            <svg className="w-5 h-5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.19165 12.4601H19.7282" stroke="white" strokeWidth="3.11498" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4602 5.19177L19.7285 12.4601L12.4602 19.7284" stroke="white" strokeWidth="3.11498" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>
          </Link>

          <Link
            href={data.redirectUrl}
            className="block text-center sm:text-left text-black font-semibold underline underline-offset-4 "
            >
            View Detailed Program
          </Link>
            
        </div>
        </div>

        {/* Pricing Section */}
        <div className={`border-t border-neutral-200 `}>
          <div className="flex flex-row items-center justify-between lg:justify-center gap-2 pt-6 lg:px-0 px-4">
            <div>
              <p className="text-lg lg:block hidden text-black mb-1 font-semibold text-center">Starting from</p>
              <p className="text-2xl sm:text-4xl font-bold text-[#FF6600]">
                {data.price}
              </p>
            </div>
            <p className="text-sm max-w-36 text-center text-[#0A2342]">
              *optional pricing without housing and meals available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;

