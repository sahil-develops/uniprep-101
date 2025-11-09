'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar({ color = 'white' }: { color?: 'white' | 'black' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="absolute inset-x-0 top-0 z-50 bg-transparent transition-colors duration-300  "
      >
        <div className="lg:mx-auto w-full lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-start lg:items-center justify-between py-4 lg:py-0">
            {/* Logo and Left Navigation */}
            <div className="hidden  lg:flex items-center gap-8">
              {/* Left Navigation Links */}
              <div className="hidden items-center gap-6 md:flex">
                <a
                  href="#courses"
                  className={`text-sm font-medium ${color === 'white' ? 'text-white' : 'text-navy'}  transition-colors `}
                >
                  Courses
                </a>
                <Link
                  href="/about-us"
                  className={`text-sm font-medium ${color === 'white' ? 'text-white hover:text-primary' : 'text-navy hover:text-primary'} transition-colors `}
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link href="/">
              <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" className='' width={200} height={120} />
              </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/faq"
                className={`hidden text-sm font-medium ${color === 'white' ? 'text-white' : 'text-navy'} transition-colors hover:text-primary md:block`}
              >
                FAQ
              </Link>
              <a
                href="#signup"
                className="hidden rounded-lg bg-primary px-6 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary/90 md:block"
              >
                Sign Up
              </a>
              
              {/* Mobile Menu Button (Hamburger) */}
              <button
                onClick={toggleMobileMenu}
                className="flex flex-col gap-1.5 p-2 md:hidden"
                aria-label="Toggle mobile menu"
              >
                <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'translate-x-0 pointer-events-auto'
            : 'translate-x-full pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30" onClick={closeMobileMenu}></div>
        
        {/* Slide-in Menu */}
        <div
          className="absolute right-0 top-0 h-full w-[70%] bg-primary shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center  text-black transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-1 flex-col px-8 py-8">
              <div className="flex flex-col gap-8">
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-navy transition-colors hover:text-navy/80"
                >
                  Home
                </a>
                <a
                  href="#courses"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-navy transition-colors hover:text-navy/80"
                >
                  Courses
                </a>
                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-navy transition-colors hover:text-navy/80"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-navy transition-colors hover:text-navy/80"
                >
                  FAQ
                </Link>
                <Link
                    href="/testimonials"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-navy transition-colors hover:text-navy/80"
                >
                  Testimonials
                </Link>
              </div>

              {/* Apply Now Button */}
              <div className="mt-auto pb-8">
                <a
                  href="#signup"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-navy/90 hover:shadow-xl"
                >
                  Apply Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

