"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Video Testimonials", href: "/#video-testimonials" },
      { name: "Written Reviews", href: "/#written-reviews" },
    ],
  },
  {
    name: "Case Studies",
    href: "/#case-studies",
    dropdown: [
      { name: "Study 1", href: "/#case-study-1" },
      { name: "Study 2", href: "/#case-study-2" },
    ],
  },

  {
    name: "Testimonials",
    href: "/#testimonials",
    dropdown: [
      { name: "Video Testimonials", href: "/testimonials" },
      { name: "Written Reviews", href: "/#written-reviews" },
    ],
  },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <header className="fixed z-50 left-0 right-0 mx-auto top-[16px] sm:top-[20px] lg:top-[38px] w-[calc(100%-1.5rem)] sm:w-[95%] lg:w-[95%] xl:w-[1251px] max-w-[1251px] h-auto lg:h-[93px] border-[0.1px] border-[#D9D9D9] bg-white/90 lg:bg-primary-light/20 backdrop-blur-md lg:backdrop-blur-lg rounded-[28px] sm:rounded-[56px] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-0 transition-all duration-300 shadow-sm">
        {/* Logo Container */}
        <Link
          href="/"
          className="flex items-center justify-center w-[100px] h-[40px] sm:w-[110px] sm:h-[46px] lg:w-[165px] lg:h-[70px] shrink-0"
        >
          <Image
            src="/images/png/logo.png"
            alt="Naeem Logo"
            width={165}
            height={70}
            priority
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
                    className="font-sans font-semibold text-caption-lg leading-none text-white hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                  <svg
                    className="w-4 h-4 text-white group-hover:text-white/80 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-5 py-3 text-caption font-sans font-medium text-txt-primary hover:text-white hover:bg-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="font-sans font-semibold text-caption-lg leading-none text-white hover:text-white/80 transition-colors py-4"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Get Started Button (Desktop only) */}
          <Link href="#get-started" className="hidden lg:flex btn-get-started">
            Get Started
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors flex items-center justify-center shrink-0"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[290px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <Image
            src="/images/png/logo.png"
            alt="Prime A2Z"
            width={110}
            height={46}
            className="object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close Menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg font-sans font-semibold text-[15px] text-txt-primary hover:bg-primary-light/50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 flex flex-col gap-1 py-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-md font-sans text-sm text-txt-secondary hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg font-sans font-semibold text-[15px] text-txt-primary hover:bg-primary-light/50 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer CTA: Get Started Button in Hamburger Menu */}
        <div className="border-t border-gray-100 px-6 py-5 bg-gray-50/50">
          <Link
            href="#get-started"
            onClick={() => setMobileOpen(false)}
            className="btn-get-started w-full flex items-center justify-center text-center shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
