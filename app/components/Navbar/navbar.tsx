'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar({ color = 'white' }: { color?: 'white' | 'black',  }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className="absolute inset-x-0 top-0 z-50 bg-transparent transition-colors duration-300 hover:bg-navy group"
      >
        
        <div className="lg:mx-auto w-full lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-start lg:items-center justify-between py-4 lg:py-0">
            {/* Logo and Left Navigation */}
            <div className="hidden  lg:flex items-center gap-8">
              {/* Left Navigation Links */}
              <div className="hidden items-center gap-6 md:flex">
                <Link
                  href="/our-programs"
                  className={`text-sm font-medium ${color === 'white' ? 'text-white hover:text-primary group-hover:text-white' : 'text-navy hover:text-primary group-hover:text-white'} transition-colors `}
                >
                  Courses
                </Link>
                <Link
                  href="/about-us"
                  className={`text-sm font-medium ${color === 'white' ? 'text-white hover:text-primary group-hover:text-white' : 'text-navy hover:text-primary group-hover:text-white'} transition-colors `}
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2 z-50">
              
              <Link href="/">
              <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" className='' width={200} height={120} />
              </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/faq"
                className={`text-sm font-medium ${color === 'white' ? 'text-white hover:text-primary group-hover:text-white' : 'text-navy hover:text-primary group-hover:text-white'} transition-colors hover:text-primary`}
              >
                FAQ
              </Link>
              <Link
                    href="/testimonials"
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium ${color === 'white' ? 'text-white hover:text-primary group-hover:text-white'  : 'text-navy hover:text-primary group-hover:text-white'} transition-colors hover:text-primary tracking-wide`}
                >
                  Testimonials
                </Link>
              <Link
                href="/register"
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col gap-1.5 p-2 z-50 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 ${color === 'white' ? 'bg-white' : 'bg-navy'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        {/* Background Overlay with Black Gradient */}
        <div className="absolute inset-0 bg-black/50"></div>
 
        {/* Slide-in Menu */}
        <div
          className={`absolute right-0 top-0 z-10 h-full w-[70%] bg-primary shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
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
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="text-xl font-bold text-navy transition-colors hover:text-navy/80"
                >
                  Home
                </Link>
                <Link
                  href="/our-programs"
                  onClick={closeMobileMenu}
                  className="text-xl font-bold text-navy transition-colors hover:text-navy/80"
                >
                  Courses
                </Link>
                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className="text-xl font-bold text-navy transition-colors hover:text-navy/80"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="text-xl font-bold text-navy transition-colors hover:text-navy/80"
                >
                  FAQ
                </Link>
                <Link
                    href="/testimonials"
                  onClick={closeMobileMenu}
                  className="text-xl font-bold text-navy transition-colors hover:text-navy/80"
                >
                  Testimonials
                </Link>
              </div>

              {/* Apply Now Button */}
              <div className="mt-auto pb-8">
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center uppercase gap-2 rounded-xl bg-[#0A2342] px-2 py-4 font-semibold text-white text-3xl transition-all hover:bg-navy/90"
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)'
                  }}
                >
Register
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5L19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

