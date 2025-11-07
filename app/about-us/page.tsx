import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';
import CTA from '@/app/components/CTA/cta';
import AboutHero from '@/app/components/AboutHero/about-hero';
import AboutBootcamps from '@/app/components/AboutBootcamps/about-bootcamps';
import AboutUniversities from '@/app/components/AboutUniversities/about-universities';
import AboutMission from '@/app/components/AboutMission/about-mission';
import AboutStats from '@/app/components/AboutStats/about-stats';
import AboutStory from '@/app/components/AboutStory/about-story';
import AboutTeam from '@/app/components/AboutTeam/about-team';
import AboutSingapore from '@/app/components/AboutSingapore/about-singapore';

export const metadata = {
  title: 'About Us | UniPrep101',
  description:
    'Discover the mission, story, and impact of UniPrep101. Learn how we empower students with transformative experiences to thrive in global university admissions.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1431]">
      <Navbar />
      <AboutHero />
      <AboutBootcamps />
      <AboutUniversities />
      {/* <AboutMission /> */}
      <AboutTeam />
      <AboutStats />
      {/* <AboutStory /> */}
      <AboutSingapore />
      <CTA />
      <Footer />
    </main>
  );
}


