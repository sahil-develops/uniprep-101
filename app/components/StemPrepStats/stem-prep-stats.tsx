"use client";

const StemPrepStats = () => {
  return (
    <section className="relative bg-white">
      {/* Statistics Section */}
      <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Statistic 
              number="3" 
              description="Industry Visits" 
              color="blue" 
            />
            <Statistic 
              number="9" 
              description="Days of Learning" 
              color="orange" 
            />
            <Statistic 
              number="8" 
              description="Project Milestones" 
              color="blue" 
            />
            <Statistic 
              number="24/7" 
              description="Student Support" 
              color="orange" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Statistic = ({ 
  number, 
  description, 
  color 
}: { 
  number: string; 
  description: string; 
  color: 'blue' | 'orange' 
}) => {
  const numberColor = color === 'blue' ? '#2962FF' : '#FF7043';
  
  return (
    <div className="text-center px-2 sm:px-0">
      <div 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide"
        style={{ color: numberColor }}
      >
        {number}
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-neutral-800 font-normal leading-tight mx-auto">
        {description}
      </p>
    </div>
  );
};

export default StemPrepStats;
