"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Programs = () => {
  return (
    <section className="relative bg-[#F7F3E3] py-4 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8">
      {/* Background with wavy pattern */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/bg-program.png"
          alt="Singapore skyline"
          fill
          priority
          className="object-cover"
          quality={70}
        />
      
      </div> */}
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-balance text-[28px] font-bold text-black mb-6 sm:text-4xl lg:text-[32px]">
          Our Programs
        </h2>

        {/* Program Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Stem Prep Card */}
          <ProgramCard
            title="Stem Prep"
            description="Prepare for higher education in science and technology with immersive workshops and a certification from SUTD, an institute in partnership with the world's #1 tech university - Massachusetts Institute of Technology."
            imageSrc="/Stemp-prep.webp"
            university="Singapore University Of Technology And Design"
            universityIcon="/SUTD.png"
            redirectUrl="/stem-prep"
            classSize="35"
            eligibility="Grades 10-12"
            includes="Housing and Meals"
            hasBorder={false}
          />

          {/* Business Prep Card */}
          <ProgramCard
            title="Business Prep"
            description="Explore business concepts and learn problem solving skills through hands on workshops and real world insights. Complete the certification from Singapore's top rated business and management university."
            imageSrc="/Business-prep.webp"
            university="Singapore Management University"
            universityIcon="/singapore-university.png"
            redirectUrl="/business-prep"
            classSize="30"
            eligibility="Grades 10-12"

            includes="Housing and Meals"
            hasBorder={true}
          />
        </div>
      </div>
    </section>
  );
};

interface ProgramCardProps {
  redirectUrl: string;
  title: string;
  description: string;
  imageSrc: string;
  university: string;
  universityIcon: string;
  classSize: string;
  eligibility: string;
  includes: string;
  hasBorder: boolean;
}

const ProgramCard = ({
  redirectUrl,
  title,
  description,
  imageSrc,
  university,
  universityIcon,
  classSize,
  eligibility,
  includes,
  hasBorder,
}: ProgramCardProps) => {
  const router = useRouter();
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        hasBorder ? '' : ''
      }`}
      onClick={() => router.push(redirectUrl)}
    >
      {/* Image Section */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-0"> 
          {title}
        </h3>

        {/* Description */}
        <p className="text-base  sm:text-base text-neutral-700 mb-4 leading-5 relative bg-white  py-2 lg:leading-relaxed">
          {description}
        </p>

        {/* Program Details Grid */}
        <div className="grid grid-cols-2 gap-0 lg:gap-y-0 gap-y-3 sm:gap-6">
          {/* University */}
          <div className="flex items-start gap-1 lg:gap-3">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 mt-1">
              <Image
                src={universityIcon}
                alt="University"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <div className="flex-1">
              {university === "Singapore Management University" ?
              <p className="text-xs sm:text-sm font-bold text-neutral-800 text-wrap leading-tight">
                Singapore <br/> Management University
              </p> :
              <p className="text-xs sm:text-sm font-bold text-neutral-800 text-wrap leading-tight">
                {university}
              </p>
              }
            </div>
          </div>

          {/* Class Size */}
          <div className="flex items-start gap-1 lg:gap-3">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 mt-1">
              <Image
                src="/users.png"
                alt="Class"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-neutral-800">
                <span className="block font-bold">Class</span>
                <span className="text-xs">{classSize} Students Max</span>
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="flex items-start gap-3">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 mt-1">
              <Image
                src="/target.png"
                alt="Eligibility"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-neutral-800">
                <span className="block font-bold">Eligibility</span>
                <span className="text-xs">{eligibility}</span>
              </p>
            </div>
          </div>

          {/* Includes */}
          <div className="flex items-start gap-3">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 mt-1">
              <Image
                src="/home.png"
                alt="Includes"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-neutral-800">
                <span className="block font-bold">Includes</span>
                <span className="text-xs">{includes}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

