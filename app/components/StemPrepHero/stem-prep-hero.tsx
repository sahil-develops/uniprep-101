import Image from 'next/image';
import Link from 'next/link';

export default function StemPrepHero({ title = 'STEM Prep' }: { title?: string }) {
  return (
    <section className="relative min-h-screen w-full">
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
      <div className="relative max-w-7xl mx-auto z-10 flex min-h-screen flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Date Buttons */}
          <div className="mb-6 flex flex-wrap gap-3">
            <button className="backdrop-blur-sm px-4 py-2 sm:px-4 sm:py-1 rounded-full text-white text-sm sm:text-base font-medium bg-white/20 border-l-[0.5px] border-t-[0.5px] border-b-[1px] border-r-[1px] border-white/70 " style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'}}>
              8-17 July, 2026
            </button>
            <button className="backdrop-blur-sm px-4 py-2 sm:px-4 sm:py-1 rounded-full text-white text-sm sm:text-base font-medium bg-white/20 border-l-[0.5px] border-t-[0.5px] border-b-[1px] border-r-[1px] border-white/70 " style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'}}>
              
              12-20 Oct, 2026
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-lg font-medium text-white sm:text-xl md:text-2xl">
            Science, Technology, Engineering & Mathematics
          </p>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
            Experience cutting-edge technology and engineering through hands-on learning, industry visits, and real-world projects in Singapore's innovation ecosystem.
          </p>

          {/* Apply Now Button */}
          <Link
            href="/register "
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:px-10 sm:py-4 sm:text-lg"
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

