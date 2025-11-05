import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';
import OurProgramsHero from '@/app/components/OurProgramsHero/our-programs-hero';
import WhatsIncluded from '@/app/components/WhatsIncluded/whats-included';
import CTA from '../components/CTA/cta';

export default function OurProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OurProgramsHero showCampusCollage={true} />
      <WhatsIncluded />
    <CTA/>
      <Footer />
    </main>
  );
}

