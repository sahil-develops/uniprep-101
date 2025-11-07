import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.webp"
          alt="Singapore skyline"
          fill
          priority
          className="object-cover"
          quality={70}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="mb-6 text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-6xl">
          {/* Mobile Layout: 4 lines */}
          <span className="block sm:hidden">
            Certified by{' '}<br/>
            Singapore.{' '}<br/>
            <span className="relative inline-block font-bold">
              <span className="relative z-10">Recognized</span>
              <span className="absolute bottom-2 left-0 right-0 h-2 z-0 bg-primary"></span>
            </span>
            {' '}<br/>
            <span className="relative inline-block font-bold">
              <span className="relative z-10">Worldwide.</span>
              <span className="absolute bottom-2 left-0 right-0 h-2 z-0 bg-primary"></span>
            </span>
          </span>
          {/* Desktop Layout: 2 lines */}
          <span className="hidden sm:block">
            Certified by Singapore.{' '}<br/>
            <span className="relative inline-block font-bold">
              <span className="relative z-10">Recognized Worldwide.</span>
              <span className="absolute bottom-2 left-0 right-0 h-5 z-0 bg-primary sm:bottom-1.5"></span>
            </span>
          </span>
          {/* <Image src="/OrangeLine.svg" alt="arrow-down" className='w-full h-full absolute' width={20} height={20} /> */}
        </h1>

        {/* Sub-heading */}
        <p className="mb-10 max-w-2xl text-lg text-white sm:text-xl md:text-2xl font-red-hat">
          Join our Singapore residential bootcamps to gain a university based
          certification and an edge in global admissions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 ">
          <Link
            href="/our-programs"
            className="rounded-[5.18px] bg-primary px-[32px] py-2 text-base font-normal text-black  sm:text-lg lg:text-2xl"
          >
            Explore Programs
          </Link>
          <a
            href="#inquire"
            className=" border-white border-b px-0 py-1 text-base font-medium text-white transition-all  sm:text-lg"
          >
            Inquire now
          </a>
        </div>
      </div>
    </section>
  );
}

