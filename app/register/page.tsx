import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar/navbar';
import Footer from '@/app/components/Footer/footer';

export const metadata: Metadata = {
  title: 'Register | UniPrep',
  description:
    'Register your interest in UniPrep programs and connect with our admission team.',
};

export default function RegisterPage() {
  return (
    <>
      <Navbar color='black' />
      <main className="min-h-screen bg-white pb-16 pt-20">
        <section className="mx-auto w-full max-w-4xl rounded-3xl bg-white px-6 py-12  sm:px-10 lg:px-14">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">
              Register Your Interest
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <div className="flex gap-3 rounded-full  p-2">
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#FF6600] px-6 py-3 text-sm font-semibold text-white shadow-lg  transition-transform duration-200 "
                >
                  STEMPrep
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#0C44FF] px-6 py-3 text-sm font-semibold text-white  transition-transform duration-200 "
                >
                  BizPrep
                </button>
              </div>
            </div>

            <p className="text-center text-sm font-medium text-[#4B5875] sm:text-base">
              Only applicable to grades 10-12. All candidates will be interviewed prior
              to final confirmation and payment.
            </p>
          </div>

          <form className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="first-name">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]  "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]  "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]  "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]  "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                defaultValue=""
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black  "
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="india">India</option>
                <option value="singapore">Singapore</option>
                <option value="usa">United States</option>
                <option value="thailand">Thailand</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-navy" htmlFor="program">
                Program of Interest
              </label>
              <select
                id="program"
                defaultValue=""
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black  "
              >
                <option value="" disabled>
                  Select a program
                </option>
                <option value="stemprep">STEMPrep</option>
                <option value="bizprep">BizPrep</option>
                <option value="summer-immersion">Summer Immersion</option>
                <option value="mentorship">Mentorship</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-navy" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your interests, questions, or any specific requirements..."
                className="w-full rounded-[4px]  bg-[#0000000D] px-4 py-3 text-black  placeholder:text-[#94A0B8] "
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="flex lg:w-1/4 w-full mx-auto cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-base font-semibold text-white  transition-transform duration-200 hover:-translate-y-0.5  focus:outline-none focus-visible:ring-2 "
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6668 1.33331L7.3335 8.66665" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.6668 1.33331L10.0002 14.6666L7.3335 8.66665L1.3335 5.99998L14.6668 1.33331Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


              </button>
            </div>
          </form>

          <div className="mt-12 border-t border-[#E4E8F5] pt-8">
            <h2 className="text-lg font-bold text-navy">Contact</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[#4B5875]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full ">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8881 15.9201V18.9201C20.8892 19.1986 20.8322 19.4743 20.7206 19.7294C20.6091 19.9846 20.4454 20.2137 20.2402 20.402C20.035 20.5902 19.7927 20.7336 19.5289 20.8228C19.265 20.912 18.9855 20.9452 18.7081 20.9201C15.631 20.5857 12.6751 19.5342 10.0781 17.8501C7.66194 16.3148 5.61345 14.2663 4.07812 11.8501C2.38809 9.2413 1.33636 6.27109 1.00812 3.1801C0.983127 2.90356 1.01599 2.62486 1.10462 2.36172C1.19324 2.09859 1.33569 1.85679 1.52288 1.65172C1.71008 1.44665 1.93792 1.28281 2.19191 1.17062C2.44589 1.05843 2.72046 1.00036 2.99812 1.0001H5.99812C6.48342 0.995321 6.95391 1.16718 7.32188 1.48363C7.68985 1.80008 7.93019 2.23954 7.99812 2.7201C8.12474 3.68016 8.35957 4.62282 8.69812 5.5301C8.83266 5.88802 8.86178 6.27701 8.78202 6.65098C8.70227 7.02494 8.51698 7.36821 8.24812 7.6401L6.97812 8.9101C8.40167 11.4136 10.4746 13.4865 12.9781 14.9101L14.2481 13.6401C14.52 13.3712 14.8633 13.1859 15.2372 13.1062C15.6112 13.0264 16.0002 13.0556 16.3581 13.1901C17.2654 13.5286 18.2081 13.7635 19.1681 13.8901C19.6539 13.9586 20.0975 14.2033 20.4146 14.5776C20.7318 14.9519 20.9003 15.4297 20.8881 15.9201Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </div>
                <span className="text-base text-navy">+66 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6L12 13L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </div>
                <span className="text-base text-navy">info@uniprep101.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

