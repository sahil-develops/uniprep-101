
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-bg.webp"
          alt="CTA Background"
          fill
          priority
          className="object-cover align-middle"
          quality={70}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
          <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-balance text-2xl font-bold text-white sm:text-4xl lg:text-5xl mb-6 sm:mb-6">
          Ready to transform your future?
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
          Set yourself apart by enrolling in our residential bootcamps and take the first step towards standing out when applying to undergrad universities!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          {/* View Courses Button - Outlined */}
          <Link href="/our-programs" className="w-full sm:w-auto">
          <button className="px-8 cursor-pointer sm:px-10 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg font-medium border border-white bg-transparent hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto">
            View Courses
          </button>
          </Link>

          {/* Apply Now Button - Solid Orange */}
          <Link href="/register" className="w-full sm:w-auto">
          <button className="px-8 cursor-pointer sm:px-10 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg font-medium bg-primary hover:opacity-90 transition-opacity duration-200 w-full sm:w-auto">
            Apply now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
