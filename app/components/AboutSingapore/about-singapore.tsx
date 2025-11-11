import Image from 'next/image';

export default function AboutSingapore() {
  return (
    <section className="bg-[#F7F3E3] py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        <div className="w-full flex-1 text-center lg:text-left">
          <h2 className="text-balance text-2xl font-bold text-[#0A1431] sm:text-4xl lg:text-5xl">
            Why Singapore
          </h2>
          <p className="mt-6 text-base leading-7 text-[#25345A] sm:text-lg text-left">
            Discover Singapore, a city where innovation meets opportunity. Safe, modern and endlessly inspiring, it offers the perfect backdrop for learning and growth.
          </p>
          <p className="mt-4 text-base leading-7 text-[#25345A] sm:text-lg text-left">
            During our bootcamps, you&apos;ll study at top universities, meet visionary entrepreneurs, and experience a vibrant mix of cultures, ideas, and world-class infrastructure — all in one transformative destination.
          </p>
        </div>
        <div className="relative w-full flex-1 max-w-lg overflow-hidden rounded-[32px] shadow-lg">
          <Image
            src="/singapore.png"
            alt="Singapore skyline with the Merlion statue"
            width={960}
            height={640}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


