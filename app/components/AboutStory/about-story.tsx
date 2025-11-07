const timeline = [
  {
    year: '2017',
    title: 'UniPrep101 launches its first Singapore immersion',
    description:
      'A cohort of 30 students experiences hands-on labs and mentorship at Singapore’s premier universities, shaping the foundation of our flagship program.',
  },
  {
    year: '2019',
    title: 'Partnerships with leading faculties',
    description:
      'We formalize academic collaborations that allow students to explore engineering, business, and design pathways guided by top professors and industry experts.',
  },
  {
    year: '2022',
    title: 'Hybrid programs and global reach',
    description:
      'Virtual pre-immersion tracks complement our in-person residencies, making UniPrep101 experiences accessible to students across 12 countries.',
  },
  {
    year: '2025',
    title: 'Future-ready learning experiences',
    description:
      'We continue to expand pathways in STEM, business, and emerging disciplines, ensuring every student is empowered to shape the future they envision.',
  },
];

export default function AboutStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our story</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#0A1431] sm:text-4xl">
          A journey shaped by innovation and community
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-[#35436B]">
          Since our founding, UniPrep101 has connected aspiring scholars with the people, places, and experiences that accelerate their ambitions. Our story is a reflection of the students and partners who trust us to guide their next big leap.
        </p>

        <ol className="relative mt-12 space-y-8 border-l border-[#E1E7F2] pl-6">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold text-[#0A1431]">{item.title}</h3>
              <p className="mt-2 text-base text-[#35436B]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


