"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardData {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  href?: string;
  showOutsideArrow?: boolean;
  imageSrc: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "amazon-creatives",
    titleLine1: "Amazon",
    titleLine2: "Creatives",
    description:
      "Strengthen your brand identity with custom Amazon A+ Content, high-converting infographics, and storefront designs that help drive more sales and inspire customer confidence.",
    href: "/#contact-us",
    showOutsideArrow: true,
    imageSrc: "/images/png/brand_management.png",
  },
  {
    id: "amazon-ads",
    titleLine1: "Amazon",
    titleLine2: "Ads",
    description:
      "Reach the right customers & increase sales with data-driven Amazon designed to maximize visibility, attract qualified shoppers, and drive profitable sales.",
    href: "/#contact-us",
    imageSrc: "/images/png/brand_management.png",
  },
  {
    id: "tiktok-shop",
    titleLine1: "Tiktok",
    titleLine2: "Shop",
    description:
      "Grow your TikTok Shop with compelling creatives, optimized product listings, and performance-driven advertising that turns views into sales.",
    href: "/#contact-us",
    imageSrc: "/images/png/brand_management.png",
  },
];

export default function ServicesGridSection() {
  return (
    <section className="relative w-full bg-[#00071C] bg-blue-gradient px-6 py-16 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0E3388] opacity-35 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#0E2055] opacity-30 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-[#031548] opacity-25 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center justify-between mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.18] text-white tracking-tight">
              Helping Amazon &amp; TikTok
              <br />
              Brands Scale Without the
              <br />
              Guesswork
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-[480px]">
              We manage your creative, advertising, and full funnel strategy so
              you can focus on growing your brand while we deliver measurable
              results.
            </p>
          </div>
        </div>

        {/* 3 Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 items-stretch relative">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Outer Edge Glow Border */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none z-20 border border-white/10 group-hover:border-white/25 transition-colors"
                style={{
                  boxShadow:
                    "0 15px 35px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.05)",
                }}
              />

              {/* Top White Card Section */}
              <div className="bg-white px-7 pt-8 pb-7 rounded-t-[28px] flex items-start justify-between min-h-[170px]">
                <h3 className="mt-5 font-sans text-[42px] sm:text-[42px] font-bold text-[#0B0C10] leading-[1.1] tracking-tight">
                  {card.titleLine1}
                  <br />
                  {card.titleLine2}
                </h3>
                <div className="relative w-22 h-22 sm:w-20 sm:h-20 shrink-0">
                  <Image
                    src={card.imageSrc}
                    alt={`${card.titleLine1} ${card.titleLine2}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Dark Blue Glass Section */}
              <div
                className="inset-0 relative flex-1 bg-gradient-to-b from-[#111C3A]/95 via-[#0D152C]/95 to-[#090F20]/95 backdrop-blur-xl px-7 py-7 rounded-b-[28px] flex flex-col justify-between border-t border-white/10"
                style={{
                  background: `
                  linear-gradient(to bottom, rgba(180,195,255,0.3), transparent 30%),
                  linear-gradient(to top, rgba(120,150,255,0.3), transparent 30%),
                  linear-gradient(to right, rgba(150,170,255,0.3), transparent 30%),
                  linear-gradient(to left, rgba(150,170,255,0.3), transparent 30%)
                `,
                }}
              >
                <p className="font-sans text-[14px] sm:text-[15px] text-white/75 leading-relaxed font-normal mb-8">
                  {card.description}
                </p>

                {/* Card Action Row */}
                <div className="flex items-center justify-end w-full">
                  <Link
                    href={card.href || "#"}
                    aria-label={`Learn more about ${card.titleLine1} ${card.titleLine2}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0A122A] shadow-md hover:scale-110 active:scale-95 transition-transform duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Extra Floating Connector Arrow Button (as shown next to Card 1 in the mockup) */}
              {card.showOutsideArrow && (
                <div className="hidden lg:flex absolute -right-4 bottom-[2.75rem] z-30 transform translate-x-1/2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0E2C75] border border-blue-400/40 text-white shadow-lg backdrop-blur-md hover:scale-110 transition-transform cursor-pointer">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Centered View All Pill Button */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <Link
            href="/#contact-us"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#52596C]/50 hover:bg-[#52596C]/80 border border-white/20 backdrop-blur-md px-8 py-3 font-sans text-[15px] font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>View all</span>
            <svg
              className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
