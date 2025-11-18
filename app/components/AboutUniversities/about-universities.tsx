import Image from 'next/image';

const universities = [
  {
    name: 'Singapore University of Technology and Design',
    summary:
      'SUTD was set up by the Singapore government in partnership with the world’s No 1 tech university – Massachusetts Institute of Technology.',
    details:
      'The institution integrates design, AI, and technology into a holistic, interdisciplinary education and research experience. This unique approach encourages our students to push the boundaries of innovating solutions to real-world problems.',
    url: 'https://www.sutd.edu.sg',
    image: {
      src: '/SUTD-1.png',
      alt: 'Singapore University of Technology and Design campus',
    },
  },
  {
    name: 'Singapore Management University',
    summary:
      'The Singapore Management University is internationally recognized for its world-class research and distinguished teaching.',
    details:
      'SMU is home to over 13,000 students and is known for its highly interactive, collaborative, and project-based approach to learning.',
    url: 'https://www.smu.edu.sg',
    image: {
      src: '/SUTD-2.png',
      alt: 'Singapore Management University campus',
    },
  },
];

export default function AboutUniversities() {
  return (
    <section className="bg-white py-8 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:gap-12 px-4 sm:gap-14 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:gap-6 gap-3 text-center lg:max-w-3xl lg:text-left">
          <h2 className="text-left text-2xl font-bold text-[#0A1431] sm:text-4xl lg:text-5xl">
          Our Certifying Universities
          </h2>
          <p className="text-base lg:leading-7 text-[#35436B] sm:text-lg text-left">
            UniPrep101 is very pleased to work with two of Singapore&apos;s most prestigious universities for our STEM and Business bootcamps. This gives students unprecedented access to world class facilities, renowned faculty and cutting edge content.
          </p>
        </div>

        <div className="grid gap-0 sm:gap-10 lg:grid-cols-2">
          {universities.map((university) => (
            <article
              key={university.name}
              className="group flex h-full flex-col  "
            >
                  <h3 className="text-xl font-semibold text-[#0A1431] sm:text-2xl pb-4">
                    {university.name}
                  </h3>
              <div className="relative aspect-5/3 w-full  ">
                <Image
                  src={university.image.src}
                  alt={university.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover  rounded-2xl"
                  priority
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 px-0 pb-8 pt-6 sm:px-1 sm:pb-10 sm:pt-8">
                <header className="flex flex-col gap-3">
                  <p className="text-lg leading-6 text-black sm:text-base">
                    {university.summary}
                  </p>
                </header>
                <p className="text-lg leading-6 text-black sm:text-base">
                  {university.details}
                </p>
                <a
                  href={university.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#2656FF] transition-colors hover:text-[#1C3FFF] sm:text-base"
                >
                  {university.url}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


