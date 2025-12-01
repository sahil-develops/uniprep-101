import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';
import StemPrepHero from '@/app/components/StemPrepHero/stem-prep-hero';
import StemPrepStats from '@/app/components/StemPrepStats/stem-prep-stats';
import DayItinerary from '@/app/components/DayItinerary/day-itinerary';
import CTA from '@/app/components/CTA/cta';

export default function BusinessPrepPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <StemPrepHero title="BizPrep101" 
      />
      <StemPrepStats />
      <DayItinerary />
      <CTA/>
      <Footer />
    </main>
  );
}

