import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | UniPrep',
  description: 'Learn how UniPrep collects, uses, and safeguards your personal information.',
};

const policySections = [
  {
    title: 'Overview',
    content: `We want you to understand how we handle your personal information. This privacy policy explains what data we collect, why we collect it, and how we keep it safe. By engaging with UniPrep, you agree to the practices described here.`,
  },
  {
    title: 'Information We Collect',
    content: `We collect the details you voluntarily provide—such as your name, email, phone number, and program interests—when you inquire about our offerings. We also gather usage information that helps us improve our site analytics, including device details, browser type, and general location derived from IP addresses.`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information helps us respond to your inquiries, personalize communications, and deliver the programs that match your goals. We may send updates about UniPrep offerings, upcoming events, and mentorship opportunities. You can opt out of promotional messages at any time by following the unsubscribe instructions in our emails.`,
  },
  {
    title: 'Sharing and Disclosure',
    content: `We do not sell your personal information. We only share data with trusted partners who help us deliver our services—such as communication platforms and analytics providers—and they are required to protect your information. We may disclose data when required by law or to protect our rights, safety, or community.`,
  },
  {
    title: 'Data Security & Retention',
    content: `We maintain administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. We retain personal data only as long as needed to fulfill the purposes outlined here or comply with legal obligations.`,
  },
  {
    title: 'Your Choices',
    content: `You have the right to request access to, correction of, or deletion of your personal information. Reach out to us if you would like to review or update your details, withdraw consent, or limit how we use your data.`,
  },
  {
    title: 'Contact Us',
    content: `Questions about this privacy policy can be sent to info@uniprep101.com. We are happy to clarify how we handle your information and support your UniPrep experience.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar color="black" />
      <main className="min-h-screen bg-white pb-20 pt-24">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-3xl bg-white px-6 py-12  sm:px-10 lg:px-10">
          <header className="flex flex-col gap-4 text-center sm:text-left">
       
            <h1 className="text-3xl text-left font-extrabold text-navy sm:text-4xl">
              UniPrep Privacy Policy
            </h1>
            <p className="text-base text-left text-[#4B5875] sm:text-lg">
              This policy outlines how UniPrep collects, uses, and protects your personal
              information across our programs and communications.
            </p>
          </header>

          <div className="flex flex-col gap-8">
            {policySections.map((section) => (
              <article key={section.title} className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-navy sm:text-2xl">{section.title}</h2>
                <p className="text-base leading-relaxed text-[#4B5875] sm:text-lg">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

