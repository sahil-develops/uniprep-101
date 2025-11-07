const highlights = [
  {
    title: 'Transformative Experiences',
    description:
      'Immersive academic and cultural programs that put students inside Singapore’s leading universities and innovation hubs.',
  },
  {
    title: 'Personalized Guidance',
    description:
      'Mentorship from seasoned educators, admissions experts, and industry leaders to elevate every learner’s global profile.',
  },
  {
    title: 'Global Admissions Edge',
    description:
      'Purpose-built curricula designed to build confidence, clarity, and standout applications for top-tier institutions worldwide.',
  },
];

export default function AboutMission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our mission</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0A1431] sm:text-4xl">
              Empowering the next generation of globally-minded innovators
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#35436B]">
              UniPrep101 began with a simple promise: to open doors for ambitious students who are ready to thrive on an international stage. From day one, we have blended rigorous academic preparation with real-world exposure so every learner can navigate university admissions with clarity, confidence, and purpose.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#35436B]">
              Our programs are crafted in close collaboration with Singapore’s top universities and partners. We focus on hands-on learning, expert mentorship, and reflective experiences that help students articulate their unique stories to institutions across the globe.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0A1431] px-6 py-8 text-white shadow-xl sm:px-8">
            <h3 className="text-xl font-semibold">What sets us apart</h3>
            <ul className="mt-6 space-y-6">
              {highlights.map((item) => (
                <li key={item.title}>
                  <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                  <p className="mt-2 text-white/80">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


