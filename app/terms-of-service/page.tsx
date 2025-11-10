import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | UniPrep',
  description:
    'Review the UniPrep Terms of Service to understand the guidelines that shape your participation in our programs.',
};

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing UniPrep programs, services, or digital platforms, you agree to these Terms of Service. If you do not agree, please refrain from using our offerings. We may update these terms periodically, and continued use indicates acceptance of the revised version.`,
  },
  {
    title: 'Eligibility & Enrollment',
    content: `Enrollment is open to students who meet the eligibility criteria outlined for each program. We reserve the right to evaluate applications, verify credentials, and decline participation when requirements are not met.`,
  },
  {
    title: 'User Responsibilities',
    content: `You agree to provide accurate information, respect fellow participants, and follow all program guidelines. Any misuse of UniPrep resources, disruptive behavior, or academic dishonesty may result in removal from the program without refund.`,
  },
  {
    title: 'Program Modifications',
    content: `We may modify program schedules, instructors, or content to improve the learning experience or respond to unforeseen circumstances. In case of significant changes, we will communicate updates promptly and offer alternative arrangements when feasible.`,
  },
  {
    title: 'Fees & Payments',
    content: `Tuition and associated fees must be paid according to the timelines communicated during enrollment. Payments are non-transferable, and refunds are handled in accordance with our refund policy, subject to any statutory rights you may have.`,
  },
  {
    title: 'Intellectual Property',
    content: `All UniPrep materials—including curriculum content, presentations, and digital assets—are protected intellectual property. You may use these resources solely for personal learning and may not reproduce, distribute, or commercialize them without prior consent.`,
  },
  {
    title: 'Limitation of Liability',
    content: `UniPrep provides programs on an "as is" basis and does not guarantee specific outcomes. To the extent permitted by law, our liability is limited to direct damages arising from our services. We are not responsible for indirect, incidental, or consequential losses.`,
  },
  {
    title: 'Governing Law',
    content: `These terms are governed by the laws of the jurisdiction in which UniPrep operates. Any disputes will be resolved through good-faith discussions and, if necessary, within the competent courts of that jurisdiction.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about these Terms of Service, contact us at info@uniprep101.com. We are ready to clarify our policies and support your journey with UniPrep.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar color="black" />
      <main className="min-h-screen bg-white pb-20 pt-24">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-3xl bg-white px-6 py-12 sm:px-10 lg:px-10">
          <header className="flex flex-col gap-4 text-center sm:text-left">
            <h1 className="text-3xl text-left font-extrabold text-navy sm:text-4xl">
              UniPrep Terms of Service
            </h1>
            <p className="text-base text-left text-[#4B5875] sm:text-lg">
              Please review these terms to understand your responsibilities and our commitments
              when participating in UniPrep programs and services.
            </p>
          </header>

          <div className="flex flex-col gap-8">
            {termsSections.map((section) => (
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

