import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-about-us.png"
          alt="Students exploring Singapore"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#031942]/70" />
      </div>

      <div className="relative z-10 mx-auto flex lg:min-h-[70vh] min-h-[50vh] max-w-4xl flex-col items-center justify-end lg:justify-center gap-6 px-4 lg:py-24 py-4 text-center text-white sm:px-6 lg:px-8">
      
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Bridging Dreams and Destinations
        </h1>
        <p className="max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
          UniPrep101 was founded to give students a transformative learning experience at Singapore&apos;s top universities—helping them build stronger profiles and stand out in the competitive journey toward global undergraduate admissions.
        </p>
        <Link
          href="/our-programs"
          className="rounded-[4px] bg-primary px-12 lg:px-8 lg:py-3 py-2 text-base font-semibold text-white shadow-lg transition hover:translate-y-0.5 hover:bg-[#f5a623] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
        >
          Explore Programs
        </Link>
      </div>
    </section>
  );
}


