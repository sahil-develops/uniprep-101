import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';
import FaqHero from '@/app/components/FaqHero/faq-hero';

export const metadata = {
  title: 'FAQs | UniPrep',
  description: 'Frequently asked questions about the UniPrep residential bootcamp experience.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FaqHero />
      <Footer />
    </main>
  );
}


