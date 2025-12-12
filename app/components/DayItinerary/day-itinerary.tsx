"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export interface DayItineraryItem {
  dayTitle: string;
  time: string;
  location: string;
  activities: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  // Optional customizable headings
  fullDaySessionHeading?: string;
  featuredActivitiesHeading?: string;
  morningSessionHeading?: string;
  afternoonSessionHeading?: string;
  featuredActivityHeading?: string;
  keyFeatureHeading?: string;
  keyFeaturesHeading?: string;
  locationLabel?: string;
  // Optional items displayed without checkmarks at the end
  itemsWithoutCheckmark?: string[];
}

interface DayItineraryProps {
  data: DayItineraryItem[];
}

interface ActivityGroup {
  type: 'header' | 'item';
  content: string;
  items?: string[];
}

// Function to map detected heading to custom heading if available
const mapHeadingToCustom = (detectedHeading: string, day: DayItineraryItem): string => {
  const normalized = detectedHeading.toLowerCase().trim();
  
  // Check for custom headings and map them
  if (day.fullDaySessionHeading && (
    normalized.includes('full-day session') || 
    normalized.includes('full day session') ||
    normalized === 'full-day session' ||
    normalized === 'full day session'
  )) {
    return day.fullDaySessionHeading;
  }
  
  if (day.morningSessionHeading && (
    normalized.includes('morning session') ||
    normalized === 'morning session'
  )) {
    return day.morningSessionHeading;
  }
  
  if (day.afternoonSessionHeading && (
    normalized.includes('afternoon session') ||
    normalized === 'afternoon session'
  )) {
    return day.afternoonSessionHeading;
  }
  
  if (day.featuredActivitiesHeading && (
    normalized.includes('featured activities') ||
    normalized === 'featured activities'
  )) {
    return day.featuredActivitiesHeading;
  }
  
  if (day.featuredActivityHeading && (
    normalized.includes('featured activity') ||
    normalized === 'featured activity'
  )) {
    return day.featuredActivityHeading;
  }
  
  if (day.keyFeaturesHeading && (
    normalized.includes('key features') ||
    normalized === 'key features'
  )) {
    return day.keyFeaturesHeading;
  }
  
  if (day.keyFeatureHeading && (
    normalized.includes('key feature') ||
    normalized === 'key feature'
  )) {
    return day.keyFeatureHeading;
  }
  
  return detectedHeading;
};

// Function to parse activities into headers and grouped items
const parseActivities = (activities: string[], day: DayItineraryItem): ActivityGroup[] => {
  const groups: ActivityGroup[] = [];
  let currentHeader: ActivityGroup | null = null;
  let regularItems: string[] = [];

  const isHeader = (activity: string): boolean => {
    const normalized = activity.trim();
    return (
      normalized.endsWith(':') ||
      /Session:\s+/.test(normalized) || // Session: followed by space
      /session:\s+/.test(normalized) || // session: followed by space
      normalized.includes('Featured Activities:') ||
      normalized.includes('Featured Activity:') ||
      normalized.includes('Key Feature:') ||
      normalized.includes('Key Features:')
    );
  };

  for (const activity of activities) {
    if (isHeader(activity)) {
      // Save any pending regular items
      if (regularItems.length > 0) {
        regularItems.forEach(item => {
          groups.push({ type: 'item', content: item });
        });
        regularItems = [];
      }

      // Save previous header if exists
      if (currentHeader) {
        groups.push(currentHeader);
      }

      // Start new header - clean up the header text
      let headerText = activity.trim();
      // Remove trailing colon if present
      if (headerText.endsWith(':')) {
        headerText = headerText.slice(0, -1).trim();
      }
      // For headers with colons in the middle, keep the full text but clean it
      // Map to custom heading if available
      headerText = mapHeadingToCustom(headerText, day);
      currentHeader = {
        type: 'header',
        content: headerText,
        items: []
      };
    } else {
      if (currentHeader) {
        // Add to current header's items
        currentHeader.items!.push(activity);
      } else {
        // Regular item before any header
        regularItems.push(activity);
      }
    }
  }

  // Save any remaining regular items
  if (regularItems.length > 0) {
    regularItems.forEach(item => {
      groups.push({ type: 'item', content: item });
    });
  }

  // Save last header if exists
  if (currentHeader) {
    groups.push(currentHeader);
  }

  return groups;
};

const DayItinerary = ({ data }: DayItineraryProps) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null); // Accordion closed by default on mobile

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <section className="relative bg-[#F7F3E3] py-5 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-5 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-3xl  font-bold text-navy mb-0 sm:mb-4">
            Detailed Day Itinerary
          </h2>
          <p className="text-base text-left sm:text-lg md:text-xl text-neutral-700 lg:px-0 px-8 lg:max-w-3xl  leading-relaxed">
            Every day is carefully planned to maximize learning and cultural immersion
          </p>
        </div>

        {/* Itinerary Cards */}
        <div className="space-y-3  sm:space-y-8">
          {data.map((day, index) => (
            <DayCard
              key={index}
              day={day}
              index={index}
              isExpanded={expandedDay === index}
              onToggle={toggleDay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DayCardProps {
  day: DayItineraryItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const DayCard = ({ day, index, isExpanded, onToggle }: DayCardProps) => {
  const imageOnLeft = day.imagePosition === 'left';
  const [activitiesExpanded, setActivitiesExpanded] = useState(false);
  const [buttonAnimating, setButtonAnimating] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  
  // Parse activities into groups
  const activityGroups = parseActivities(day.activities, day);
  // Count only actual activity items (not headers)
  const totalItems = activityGroups.reduce((count, group) => {
    return count + (group.type === 'header' ? (group.items?.length || 0) : 1);
  }, 0);
  const hasMoreThanFive = totalItems > 3;
  
  // For expand functionality, show first 5 individual activity items
  const getVisibleGroups = (expanded: boolean) => {
    if (expanded || !hasMoreThanFive) return activityGroups;
    
    let itemCount = 0;
    const visible: ActivityGroup[] = [];
    
    for (const group of activityGroups) {
      if (group.type === 'header') {
        // For headers, count only the items under them
        const headerItems = group.items || [];
        const remainingSlots = 3 - itemCount;
        
        if (remainingSlots <= 0) break;
        
        if (headerItems.length > 0) {
          // Include header with only the items that fit
          const visibleItems = headerItems.slice(0, remainingSlots);
          visible.push({
            type: 'header',
            content: group.content,
            items: visibleItems
          });
          itemCount += visibleItems.length;
        }
      } else {
        // Regular item
        if (itemCount < 3) {
          visible.push(group);
          itemCount += 1;
        } else {
          break;
        }
      }
      
      if (itemCount >= 3) break;
    }
    
    return visible;
  };
  
  const visibleGroups = getVisibleGroups(activitiesExpanded);
  // Count only actual activity items shown
  const visibleItemCount = visibleGroups.reduce((count, group) => {
    return count + (group.type === 'header' ? (group.items?.length || 0) : 1);
  }, 0);
  const remainingCount = totalItems - visibleItemCount;

  const handleExpandActivities = () => {
    setButtonAnimating(true);
    setTimeout(() => {
      setActivitiesExpanded(true);
      setButtonAnimating(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (activitiesExpanded && hasMoreThanFive) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const scrollContainer = mobileScrollRef.current || desktopScrollRef.current;
        if (scrollContainer) {
          // Scroll down a bit to indicate scrollability
          scrollContainer.scrollTo({
            top: 60,
            behavior: 'smooth'
          });
          // Scroll back up after a moment
          setTimeout(() => {
            scrollContainer.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 800);
        }
      }, 100);
    }
  }, [activitiesExpanded, hasMoreThanFive]);
  
  return (
    <div className="bg-white rounded-2xl lg:shadow-none  sm:rounded-3xl shadow-lg overflow-hidden ">
      {/* Mobile Accordion Header */}
      <button
        onClick={() => onToggle(index)}
        className="w-full lg:hidden flex items-center justify-between gap-3 p-0 text-left hover:bg-neutral-50 transition-colors"
      >
        {/* Image on Left */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-l-xl rounded-r-none overflow-hidden">
          <Image 
            src={day.imageSrc} 
            alt={day.imageAlt} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>
        
        {/* Text Content in Middle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5 leading-tight">
            {day.dayTitle}
          </h3>
          <div className="flex flex-row gap-1.5 text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="truncate">{day.time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="truncate">{day.locationLabel ? `${day.locationLabel} ${day.location}` : day.location}</span>
            </div>
          </div>
        </div>
        
        {/* Chevron on Right */}
        <div className='pr-2'>

        <svg
          className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
            />
        </svg>
            </div>
      </button>

      {/* Mobile Accordion Content */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4">

          <div>
            <h4 className="text-lg font-bold text-navy mb-4">Daily Activities</h4>
            <div 
              ref={mobileScrollRef}
              className={`${activitiesExpanded && hasMoreThanFive ? "max-h-60 overflow-y-auto scroll-smooth" : ""}`}
            >
              <div className="space-y-4">
                {visibleGroups.map((group, idx) => (
                  <div key={idx}>
                    {group.type === 'header' ? (
                      <div className="space-y-3">
                        <h5 className="text-lg font-smibold text-[#FF6600] mb-3" >
                          {group.content}
                        </h5>
                        {group.items && group.items.length > 0 && (
                          <div className="  space-y-2.5">
                            {group.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-3">
                                <div className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                                  <svg className='w-5 h-5' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.833333" y="0.833333" width="18.3333" height="18.3333" rx="9.16667" stroke="#FF6600" strokeWidth="1.66667"/>
                                    <path d="M14.1666 6.66663L8.43742 12.5L5.83325 9.84844" stroke="#FF6600" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="text-base text-neutral-700 flex-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                          <svg className='w-5 h-5' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.833333" y="0.833333" width="18.3333" height="18.3333" rx="9.16667" stroke="#FF6600" strokeWidth="1.66667"/>
                            <path d="M14.1666 6.66663L8.43742 12.5L5.83325 9.84844" stroke="#FF6600" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-base text-neutral-700 flex-1">{group.content}</span>
                      </div>
                    )}
                  </div>
                ))}
                {/* Items without checkmarks at the end */}
                {day.itemsWithoutCheckmark && day.itemsWithoutCheckmark.length > 0 && (!hasMoreThanFive || activitiesExpanded) && (
                  <div className="space-y-2.5 mt-4">
                    {day.itemsWithoutCheckmark.map((item, itemIdx) => (
                      <div key={`plain-${itemIdx}`} className="flex items-start gap-3">
                        <span className="text-base text-neutral-700 flex-1">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {hasMoreThanFive && !activitiesExpanded && (
                <button
                  onClick={handleExpandActivities}
                  className={`mt-3 text-[#E35F30] font-medium text-sm hover:text-[#FF6600] transition-all duration-300 ease-in-out overflow-hidden ${
                    buttonAnimating 
                      ? 'max-h-0 opacity-0 transform translate-y-2 pointer-events-none' 
                      : 'max-h-20 opacity-100 transform translate-y-0'
                  }`}
                >
                  <span className="block py-2">+{remainingCount} More</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row w-full gap-0">
        {/* Image Section */}
        {imageOnLeft && (
          <div className="relative w-full h-full min-h-full lg:w-4/5 bg-white ">
          <div className="h-full w-full">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
              <div className={`relative w-full h-64 sm:h-80 lg:h-96  overflow-hidden ${!imageOnLeft ? 'rounded-r-xl rounded-l-none' : 'rounded-l-xl rounded-r-none'}`}>
              <div className={`relative w-full h-full  overflow-hidden `}>
                <Image
                  src={day.imageSrc}
                  alt={day.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
        )}

        {/* Content Section */}
        <div className="p-8 lg:p-0 lg:pl-5 lg:my-0 flex lg:w-2/5 flex-col justify-center gap-y-2 bg-white">
        <div className='py-2'>

          <h3 className="text-lg lg:text-xl font-bold text-navy mb-2">
            {day.dayTitle}
          </h3>
          
          <div className="flex flex-row gap-x-4 text-base lg:text-lg text-neutral-600">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
              </svg>
              <span className='text-lg'>{day.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
              </svg>
              <span className='text-lg'>{day.locationLabel ? `${day.locationLabel} ${day.location}` : day.location}</span>
            </div>
  
          </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-navy mb-2">Daily Activities</h4>
            <div 
              ref={desktopScrollRef}
              className={`${activitiesExpanded && hasMoreThanFive ? "max-h-60 overflow-y-auto scroll-smooth" : ""} pr-2`}
            >
              <div className="space-y-4">
                {visibleGroups.map((group, idx) => (
                  <div key={idx}>
                    {group.type === 'header' ? (
                      <div className="space-y-3">
                        <h5 className="text-2xl sm:text-sm font-bold text-[#FF6600] mb-3" >
                          {group.content}
                        </h5>
                        {group.items && group.items.length > 0 && (
                          <div className="
                           space-y-2.5">
                            {group.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-3">
                                <div className="shrink-0 w-5 h-5 flex items-start justify-start mt-0.5">
                                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.833333" y="0.833333" width="22.3333" height="22.3333" rx="11.1667" stroke="#E35F30" strokeWidth="1.66667"/>
                                    <path d="M17 8L10.125 15L7 11.8182" stroke="#E35F30" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="text-base lg:text-sm text-neutral-700 flex-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-start justify-start gap-3">
                        <div className="shrink-0 w-5 h-5 rounded-full flex items-start justify-start mt-0.5">
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.833333" y="0.833333" width="22.3333" height="22.3333" rx="11.1667" stroke="#E35F30" strokeWidth="1.66667"/>
                            <path d="M17 8L10.125 15L7 11.8182" stroke="#E35F30" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-base lg:text-sm text-neutral-700 flex-1">{group.content}</span>
                        
                      </div>
                    )}
                    
                  </div>
                ))}
                {/* Items without checkmarks at the end */}
                    {day.itemsWithoutCheckmark && day.itemsWithoutCheckmark.length > 0 && (!hasMoreThanFive || activitiesExpanded) && (
                      <div className="space-y-2.5 mt-4">
                        {day.itemsWithoutCheckmark.map((item, itemIdx) => (
                          <div key={`plain-${itemIdx}`} className="flex items-start gap-3">
                            <span className="text-base lg:text-sm text-neutral-700 flex-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
              </div>
              {hasMoreThanFive && !activitiesExpanded && (
                <button
                  onClick={handleExpandActivities}
                  className={`mt-3 text-[#E35F30] w-full text-center text-sm py-2 px-4 cursor-pointer font-semibold hover:text-[#FF6600] transition-all duration-300 ease-in-out overflow-hidden ${
                    buttonAnimating 
                      ? 'max-h-0 opacity-0 transform translate-y-2 pointer-events-none' 
                      : 'max-h-20 opacity-100 transform translate-y-0'
                  }`}
                >
                  <span className="block">+{remainingCount} More</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image Section (Right Side) */}
        {!imageOnLeft && (
          <div className="relative w-full h-full min-h-full lg:w-3/5 bg-white ">
            <div className="h-full w-full">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div className={`relative w-full h-64 sm:h-80 lg:h-96  overflow-hidden ${imageOnLeft ? 'rounded-l-xl rounded-r-none' : 'rounded-r-xl rounded-l-none'}`}>
                <div className={`relative w-full h-full  overflow-hidden `}>
                  <Image
                    src={day.imageSrc}
                    alt={day.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayItinerary;
