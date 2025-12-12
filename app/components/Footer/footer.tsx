"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A2342] text-white py-2 sm:py-10 lg:py-4 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="text-center mb-5 sm:mb-12 lg:mb-8">
          <div className="flex justify-center lg:mb-4 mb-2">
            <Link href="/">
            <Image
              src="/logo.svg"
              alt="UNIPREP101 Logo"
              width={300}
              height={57}
              className="h-auto lg:w-72 w-36 "
              />
              </Link>
          </div>
          <p className="text-base text-white font-normal max-w-2xl mx-auto">
            Preparing students for global opportunities through Singapore education
          </p>
        </div>

        {/* Links and Contact Section */}
        <div className="flex flex-row items-start justify-center gap-12 sm:gap-40 mb-0 sm:mb-8 lg:mb-4">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-0 sm:mb-2">
              Quick Links
            </h3>
            <ul className="space-y-0 sm:space-y-0">
              <li>
                <Link
                  href="/"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-programs"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-base sm:text-sm text-white hover:text-primary transition-colors"
                >
                  Inquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 justify-between h-full gap-y-0 lg:gap-y-20">
            <div className="space-y-0  mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0 sm:mb-2">
                Contact
            </h3>
              <p className="text-base sm:text-base text-white">
                <a
                  href="mailto:info@uniprep101.com"
                  className="hover:text-primary transition-colors"
                >
                  info@uniprep101.com
                </a>
              </p>
              <p className="text-base sm:text-base text-white">
           
                <a
                  href="tel:+6565166666"
                  className="hover:text-primary transition-colors"
                >
                  +65 9799 3310 (Singapore)
                </a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                    className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

             

            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className=" pt-4 sm:pt-0 text-center">
          <p className="text-sm sm:text-base text-white mb-0">
            © 2025 Uniprep101. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-white hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-white hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
