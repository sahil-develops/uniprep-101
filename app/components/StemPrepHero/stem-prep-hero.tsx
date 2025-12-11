import Image from 'next/image';
import Link from 'next/link';

export default function StemPrepHero({ title = 'StemPrep101' }: { title?: string }) {
  return (
    <section className="relative min-h-[85vh] w-full sm:min-h-screen">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stemp-prep-bg-hero.png"
          alt="STEM Prep students working on robotics"
          fill
          priority
          className="object-cover"
          quality={70}
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg"></div> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10 flex min-h-[85vh] sm:min-h-screen flex-col items-start justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-full w-full">
          {/* Date Buttons */}
          <div className="mb-6 sm:mb-8 flex flex-wrap gap-3">
            <button className="backdrop-blur-sm px-4 py-2 sm:px-8 sm:py-2 rounded-full text-white text-sm sm:text-lg font-medium bg-primary" style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'}}>
              15-23 June, 2026
            </button>
            <button className="bg-primary px-4 py-2 sm:px-8 sm:py-2 rounded-full text-white text-sm sm:text-lg font-medium " style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'}}>
              06-14 July, 2026
            </button>
          
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-4 text-lg sm:text-xl md:text-2xl font-medium text-bold text-white">
            Science, Technology, Engineering & Mathematics
          </p>

          {/* Description */}
          <p className="mb-10 sm:mb-12 max-w-full text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white">
            Experience cutting-edge technology and engineering through hands-on learning, industry visits, and real-world projects in Singapore&apos;s innovation ecosystem.
          </p>

          {/* Apply Now Button */}
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            Apply Now
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.60278 11.0471H17.4902" stroke="white" strokeWidth="2.76177" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.0471 4.60294L17.4908 11.0466L11.0471 17.4903" stroke="white" strokeWidth="2.76177" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}