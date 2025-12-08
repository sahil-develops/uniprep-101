import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';
import StemPrepHero from '@/app/components/StemPrepHero/stem-prep-hero';
// import StemPrepStats from '@/app/components/StemPrepStats/stem-prep-stats';
import DayItinerary, { DayItineraryItem } from '@/app/components/DayItinerary/day-itinerary';
import CTA from '@/app/components/CTA/cta';
import stemPrepItineraryData from '@/app/data/stem-prep-itinerary.json';

export default function StemPrepPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <StemPrepHero />
      {/* <StemPrepStats /> */}
      <DayItinerary data={stemPrepItineraryData as DayItineraryItem[]} />
      <CTA/>
      <Footer />
    </main>
  );
}

