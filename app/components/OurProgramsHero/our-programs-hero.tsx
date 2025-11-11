import Image from 'next/image';
import ProgramCard, { ProgramCardData } from '@/app/components/ProgramCard/program-card';
import CampusCollage from '@/app/components/CampusCollage/campus-collage';

interface OurProgramsHeroProps {
  showCampusCollage?: boolean;
}

export default function OurProgramsHero({ showCampusCollage = false }: OurProgramsHeroProps) {
  const programsData: ProgramCardData[] = [
    {
      title: "STEM Prep",
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
        "SUTD Lab Access",
        "Foundations of Human-Centered Design",
        "Application of Rapid Ideation and Sketching Methods",
        "Prototyping Design Solutions with Physical and Digital tools",
        "Team Collaboration with Mentor Guidance",
        "Tech Start-Up Visits",
        "Industry Mentorship Sessions"
      ],
      price: "$3,200",
      redirectUrl: "/stem-prep"
    },
    {
      title: "Business Prep",
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
        "SUTD Lab Access",
        "Foundations of Human-Centered Design",
        "Application of Rapid Ideation and Sketching Methods",
        "Prototyping Design Solutions with Physical and Digital tools",
        "Team Collaboration with Mentor Guidance",
        "Tech Start-Up Visits",
        "Industry Mentorship Sessions"
      ],
      price: "$3,200",
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
        <h1 className="text-balance text-2xl font-bold text-white mb-6 sm:text-4xl lg:text-5xl">
          Our Programs
        </h1>

        {/* Description */}
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-base sm:text-lg md:text-lg text-white leading-relaxed">
            Come to sunny, safe, and modern Singapore for our residential summer programs - a truly transformative experience.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-white leading-relaxed">
            With certifications from two of Singapore's leading universities, our programs combine academic excellence, immersive workshops and real-world exposure all in the country's world-class, dynamic environment.
          </p>
        </div>
      </div>
       {/* Programs Section */}
       <section className="relative  py-12 sm:py-16 lg:py-10 sm:px-6 lg:px-8">
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

