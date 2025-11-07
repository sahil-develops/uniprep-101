import Image from 'next/image';

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sanjay Kothary',
    title: 'Founder & CEO',
    bio: 'Former UCLA Professor, 15+ years in education',
  },
  {
    name: 'Dr. Nivaan Sheth',
    title: 'Program Director',
    bio: 'Former NUS Professor, 10+ years in education',
  },
  {
    name: 'Priya Shah',
    title: 'Student Experience Manager',
    bio: 'International education specialist',
  },
  {
    name: 'Simran Kumar',
    title: 'Academic Coordinator',
    bio: 'Curriculum development expert',
  },
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

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
            Experienced educators and professionals dedicated to your success
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col lg:flex-row gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="mx-auto flex w-full lg:w-1/2 max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/95 px-6 py-10 text-center text-[#0A1431] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.4)] sm:px-10"
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
                  <span className="text-2xl font-bold text-[#0A1431]">
                    {getInitials(member.name)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col items-center gap-2">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg font-bold text-[#FF5A1F]">
                  {member.title}
                </p>
                <p className="text-base text-[#0A2342]">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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

