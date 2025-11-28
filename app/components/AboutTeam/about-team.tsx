'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  detailedBio?: string | React.ReactNode | React.ReactElement;
  imageSrc?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sanjay Kothary',
    title: 'Founder & CEO',
    bio: 'Former UCLA Professor, 30+ years in technology and education',
      detailedBio: <p>Sanjay obtained his Ph.D. in Electrical Engineering from the University of California, Los Angeles and was part of the academic faculty for a brief period there before he decided to launch his own technology business. <br/> <br/>
  A seasoned entrepreneur, he has started and successfully exited from several IT ventures spanning data warehousing, financial technology, cloud computing and cyber security.  <br/> <br/>
In 2023, he decided to go back to his first passion – education – through this exciting venture, UniPrep101, and is currently building this as a premium offering that gives all aspiring High School students a unique opportunity to have profile building international academic experiences while still in their senior school years.<br/> <br/>
</p>,
imageSrc: "/personal-image.png"
 },
  // {
  //   name: 'Dr. Nivaan Sheth',
  //   title: 'Program Director',
  //   bio: 'Former NUS Professor, 10+ years in education',
  // },
  // {
  //   name: 'Priya Shah',
  //   title: 'Student Experience Manager',
  //   bio: 'International education specialist',
  // },
  // {
  //   name: 'Simran Kumar',
  //   title: 'Academic Coordinator',
  //   bio: 'Curriculum development expert',
  // },
];

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-team.png"
          alt="Wavy navy background pattern"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#02153A]/20" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-5 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Meet Our Founder
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white sm:text-lg">
          An experienced educator and technopreneur  dedicated to your success
          </p>
        </div>

        <div className="lg:mt-12 mt-5 flex w-full flex-col lg:flex-row gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedBio, setDisplayedBio] = useState(member.bio);
  const [isFading, setIsFading] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const hasDetailedBio = useMemo(() => Boolean(member.detailedBio), [member.detailedBio]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutsRef.current = [];
    };
  }, []);

  const scheduleTimeout = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(() => {
      callback();
      timeoutsRef.current = timeoutsRef.current.filter((stored) => stored !== timeoutId);
    }, delay);

    timeoutsRef.current.push(timeoutId);
  };

  const handleToggleBio = () => {
    if (!hasDetailedBio) {
      return;
    }

    setIsFading(true);

    scheduleTimeout(() => {
      setDisplayedBio((prev) =>
        prev === member.bio ? member.detailedBio as string ?? member.bio : member.bio,
      );
      setIsExpanded((prev) => !prev);

      scheduleTimeout(() => {
        setIsFading(false);
      }, 20);
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleBio();
    }
  };

  return (
    <article
      onClick={handleToggleBio}
      onKeyDown={handleKeyDown}
      role={hasDetailedBio ? 'button' : undefined}
      tabIndex={hasDetailedBio ? 0 : undefined}
      aria-expanded={hasDetailedBio ? isExpanded : undefined}
      className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/95 px-6 py-10 text-center text-[#0A1431] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_32px_48px_-24px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF5A1F]/30 sm:px-10 lg:w-1/2"
    >
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#E6EEF9] shadow-lg sm:h-32 sm:w-32">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-[#0A1431]">{getInitials(member.name)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col items-center gap-2">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-lg font-bold text-[#FF5A1F]">{member.title}</p>
        <p
          className={`text-base text-[#0A2342] transition-opacity duration-300 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {displayedBio}
        </p>
        {hasDetailedBio && (
          <span className="text-sm text-left font-medium text-[#FF5A1F] cursor-pointer">
            {isExpanded ? 'Click to collapse bio' : 'Click to read full bio'}
          </span>
        )}
      </div>
    </article>
  );
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

