import Image from 'next/image';
import ProgramCard, { ProgramCardData } from '@/app/components/ProgramCard/program-card';


export default function OurProgramsHero() {
  const programsData: ProgramCardData[] = [
    {
      title: "StemPrep",
      description: "An immersive bootcamp integrating Design thinking, AI, and Robotics into a bold interdisciplinary experience that empowers students to solve real world problems with purpose and creativity.",
      imageSrc: "/building-2.png",
      university: {
        name: "Singapore University Of Technology And Design",
        icon: "/SUTD.png"
      },
      classSize: "35",
      eligibility: "Grades 10-12",
      includes: "Housing and Meals",
      highlights: [
        "Design Innovation With AI",
        "Smart Robotics Workshop",
        "Application of Rapid Ideation and Sketching Methods",
        "Prototyping Design Solutions with Physical and Digital tools",
        "Team Collaboration with Mentor Guidance",
        "Tech Company Visits",
        "Industry Mentorship Sessions"
      ],
      price: "US$ 4,000",
      redirectUrl: "/stem-prep"
    },
    {
      title: "BizPrep",
      description: "Master business fundamentals through real case studies, startup pitches, and direct interaction with Singapore's thriving business ecosystem.",
      imageSrc: "/trees-1.png",
      university: {
        name: "Singapore Management University",
        icon: "/singapore-university.png"
      },
      classSize: "30",
      eligibility: "Grades 10-12",
      includes: "Housing and Meals",
      highlights: [
        "Holistic qualitative and quantitative analysis",
        "Addressing real life business problems",
        "Problem solving techniques to achieve tangible business outcomes",
        "Business Design thinking team challenge with final presentation",
        "SMU Campus Tour",
        "Start-Up Entrepreneurship Sessions",

      ],
      price: "US$ 4,500",
      redirectUrl: "/business-prep"
    }
  ];
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-our-prgrams-1.webp"
          alt="Our Programs Background"
          fill
          priority
          className="object-cover"
          quality={70}
    
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl py-5 mx-auto text-center">
        {/* Title */}
        <h1 className="text-balance text-[28px] font-bold text-white mb-6 sm:text-4xl lg:text-5xl">
          Our Programs
        </h1>

        {/* Description */}
        <div className="max-w-5xl mx-auto space-y-4">
        
          <p className="text-base sm:text-lg lg:px-0 px-2 md:text-lg text-white leading-relaxed">
            With certifications from two of Singapore&apos;s leading universities, our programs combine academic excellence, immersive workshops and real-world exposure all in the country&apos;s world-class, dynamic environment.
          </p>
        </div>
      </div>
       {/* Programs Section */}
       <section className="relative  py-2 sm:py-16 lg:py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Program Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 ">
            {programsData.map((program, index) => (
              <ProgramCard key={index} data={program} program={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Campus Collage - Only shown when showCampusCollage is true
      {showCampusCollage && (
        <CampusCollage 
          image1="/building-1.png"
          image2="/building-2.png"
          alt1="Singapore University of Technology and Design Campus"
          alt2="Singapore Management University Campus"
        />
      )} */}
    </section>
  );
}
