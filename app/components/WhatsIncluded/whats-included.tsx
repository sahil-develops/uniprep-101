"use client";

import Image from "next/image";

export interface IncludedItem {
  title: string;
  description: string;
  icon: string;
}

interface IncludedCardProps {
  item: IncludedItem;
}

const IncludedCard = ({ item }: IncludedCardProps) => {
  return (
    <div
      className="bg-white rounded-[35px] p-6 sm:p-8 h-full flex flex-col items-center justify-center"
      style={{
        boxShadow: "0px 6.95px 6.95px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      {/* Icon */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4">
        <Image
          src={item.icon}
          alt={item.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 64px, 80px"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-xl text-neutral-700 leading-relaxed text-center">
        {item.description}
      </p>
    </div>
  );
};

const WhatsIncluded = () => {
  const includedItems: IncludedItem[] = [
    {
      title: "Certification",
      description: "Official certificate from partner Singapore universities",
      icon: "/Degree.png"
    },
    {
      title: "Housing",
      description: "Modern student housing near campus with all amenities.",
      icon: "/School.png"
    },
    {
      title: "Meals",
      description: "Daily breakfast, lunch, and cultural dining experiences",
      icon: "/Meals.png"
    },
    {
      title: "Transportation",
      description: "Airport transfers and local transport for all activities",
      icon: "/car.png"
    },
    {
      title: "Cultural Activities",
      description: "Weekend excursions and Singapore cultural experiences",
      icon: "/geography.png"
    },
    {
      title: "24/7 Support",
      description: "Dedicated program coordinators, student support",
      icon: "/Messaging.png"
    }
  ];

  return (
    <section className="relative bg-[#F7F3E3] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-balance text-2xl font-bold text-black sm:text-4xl lg:text-5xl sm:mb-6 mb-4">
            What&apos;s Included
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Beyond exceptional education, we provide a complete experience designed to maximize your learning and enjoyment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {includedItems.map((item, index) => (
            <IncludedCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;