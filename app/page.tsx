import Navbar from '@/app/components/Navbar/navbar';
import Hero from '@/app/components/Hero/hero';
import Marquee from '@/app/components/Marquee/marquee';
import Programs from '@/app/components/Programs/programs';
import Testimonials from '@/app/components/Testimonials/testimonials';
import Footer from '@/app/components/Footer/footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <Navbar />
        <Hero />
        <Marquee />
        <Programs />
        <Testimonials />
        {/* <CTA /> */}
        <Footer />
      </main>
    </>
  );
}
