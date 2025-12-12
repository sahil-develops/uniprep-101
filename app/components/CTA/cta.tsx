import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-5 sm:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 lg:max-w-4xl max-w-xl lg:px-0 px-4 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-balance text-[28px] font-bold lg:leading-10 leading-9 text-white sm:text-4xl lg:text-4xl mb-2 sm:mb-6">
          Ready to transform your future?
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-center text-white mb-5 sm:mb-10 lg:mb-12 leading-5 lg:leading-relaxed lg:px-0 px-2  mx-auto">
          Set your personal profile apart by enrolling in our residential
          bootcamps and take the first step towards standing out when applying
          to undergrad universities!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center w-full justify-center gap-3">
          {/* View Courses Button - Outlined */}
          <Link
            href="/our-programs"
            className="w-1/2 sm:w-auto text-center  cursor-pointer sm:px-10 py-1 sm:py-2   rounded-[4px] text-white text-base whitespace-nowrap sm:text-lg font-semibold border border-white bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            View Courses
          </Link>

          {/* Apply Now Button - Solid Orange */}
          <Link
            href="/register"
            className="w-1/2 sm:w-auto text-center  cursor-pointer sm:px-10 py-1 sm:py-2 rounded-[4px] text-white text-base whitespace-nowrap sm:text-lg font-semibold   bg-primary"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
