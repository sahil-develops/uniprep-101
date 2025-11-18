import Image from 'next/image';

interface CampusCollageProps {
  image1: string;
  image2: string;
  alt1?: string;
  alt2?: string;
}

const CampusCollage = ({ image1, alt1 = "University Campus" }: CampusCollageProps) => {
  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-3xl "
        >
          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
            {/* First Image */}
            <div className="relative w-full h-60 sm:h-80 lg:h-96 rounded-2xl overflow-hidden  ">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={image1}
                  alt={alt1}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Second Image */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusCollage;

