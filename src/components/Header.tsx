"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/#case-studies", dropdown: [
    { name: "Study 1", href: "/#case-study-1" },
    { name: "Study 2", href: "/#case-study-2" },
  ]},
  { name: "Testimonials", href: "/#testimonials", dropdown: [
    { name: "Video Testimonials", href: "/#video-testimonials" },
    { name: "Written Reviews", href: "/#written-reviews" },
  ]},
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
    <header className="fixed z-50 left-0 right-0 mx-auto top-[20px] lg:top-[38px] w-[95%] lg:w-[1251px] max-w-full h-auto lg:h-[93px] border-[0.1px] border-[#D9D9D9] bg-primary-light/20 backdrop-blur-lg rounded-[56px] flex items-center justify-between px-6 lg:px-8 py-4 lg:py-0 transition-all duration-300 shadow-sm">
      {/* Logo Container */}
      <Link
        href="/"
        className="flex items-center justify-center w-[110px] h-[46px] lg:w-[165px] lg:h-[70px] shrink-0"
      >
        <Image
          src="/images/png/logo.png"
          alt="Naeem Logo"
          width={165}
          height={70}
          className="object-contain w-full h-full"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.dropdown ? (
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <Link
                  href={link.href}
                  className="font-sans font-semibold text-caption-lg leading-none text-txt-primary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
                <svg
                  className="w-4 h-4 text-[black] group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
                  {link.dropdown.map((item) => (
                    <Link key={item.name} href={item.href} className="px-5 py-3 text-caption font-sans font-medium text-txt-primary hover:bg-primary-light/50 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={link.href} className="font-sans font-semibold text-caption-lg leading-none text-txt-primary hover:text-primary transition-colors py-4">
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Right Side & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Get Started Button */}
        <Link href="#get-started" className="hidden lg:flex btn-get-started">
          Get Started
        </Link>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-primary-dark hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Open Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {mobileOpen && (
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileOpen(false)}
      />
    )}

    {/* Mobile Menu Drawer */}
    <div
      className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <Image src="/images/png/logo.png" alt="Prime A2Z" width={110} height={46} className="object-contain" />
        <button
          onClick={() => setMobileOpen(false)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Close Menu"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Drawer Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-3 rounded-lg font-sans font-semibold text-[15px] text-txt-primary hover:bg-primary-light/50 hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Drawer CTA */}
      <div className="border-t border-gray-100 px-6 py-5">
        <Link
          href="#get-started"
          onClick={() => setMobileOpen(false)}
          className="block w-full text-center btn-get-started"
        >
          Get Started
        </Link>
      </div>
    </div>
    </>
  );
}
