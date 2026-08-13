import Image from "next/image";
import WhereWeWork from "@/components/home/WhereWeWork";
import HowPrimeA2Z from "@/components/home/HowPrimeA2Z";
import ScaleWithPrimeA2Z from "@/components/home/ScaleWithPrimeA2Z";
import SuccessStories from "@/components/home/SuccessStories";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden bg-primary-dark">
        {/* Background glow layers */}
        <div className="pointer-events-none absolute inset-0">
          {/* Base deep-blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-[#030f2e] to-primary-dark" />
          {/* Left radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,rgba(0,29,96,0.75),transparent_50%)]" />
          {/* Right radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(14,51,136,0.4),transparent_45%)]" />
          {/* Bottom fade to dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-dark/80" />
          {/* Subtle blue-band overlay */}
          <div className="absolute inset-0 bg-primary-gradient" />
        </div>

        {/* Hero content — padding-top accounts for fixed header */}
        <div className="relative z-10 mx-auto flex min-h-[600px] sm:min-h-[720px] max-w-[1440px] items-center px-6 pb-10 pt-[130px] sm:px-10 sm:pt-[172px] lg:px-16 lg:pt-[180px]">
          <div className="max-w-[580px]">
            <h1 className="text-[32px] leading-tight font-sans font-bold text-txt-white sm:text-[48px] lg:text-display lg:font-display">
              Transform&nbsp;Underperforming
              <br />
              Ads&nbsp;&amp;&nbsp;Creatives Into
              <br />
              High-Yield&nbsp;Revenue.
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-success-story">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Shopping cart image */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-[1] hidden sm:block w-[55%] max-w-[800px] lg:w-[50%]">
          <Image
            src="/images/png/cart_1.png"
            alt="Amazon shopping cart"
            width={800}
            height={600}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 800px"
            className="h-auto w-full object-contain object-bottom"
          />
        </div>
      </section>

      {/* ================= INTRO / EXPERIENCE STRIP ================= */}
      <section className="relative w-full overflow-hidden bg-primary-light">
          <div className="mx-auto flex min-h-[258px] max-w-[1140px] items-center px-6 py-12 sm:px-10 lg:px-24">
          <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[180px_1fr] lg:gap-12">
            {/* 6+ Years */}
            <div className="text-center md:pr-10 md:text-left">
              <div className="font-display text-[60px] sm:text-[108px] font-bold leading-none tracking-[-2px] sm:tracking-[-4px] text-txt-primary">
                6+
              </div>
              <div className="text-[18px] sm:text-[28px] font-semibold tracking-[0.1em] text-txt-secondary">
                YEARS
              </div>
            </div>

            {/* Description */}
            <p className="max-w-[860px] text-caption-lg leading-[1.75] text-txt-secondary">
              Since 2020, we have been turning wasted ad spend &amp; unoptimized
              listings into profitable growth engine systems for{" "}
              <span className="font-semibold text-txt-primary">
                500+ Amazon Sellers
              </span>
              . Leverage our proven SOPs and multi-channel expertise to dominate
              top-performing product categories.
            </p>
          </div>
        </div>
      </section>

      <WhereWeWork />

      <HowPrimeA2Z
        primaryHeading="How Prime A2Z"
        primarySubheading="Powers Brand Success"
        primaryDescriptions={[
          "The Prime A2Z Formula strips the guesswork out of E-Commerce Scaling by transforming underperforming Ads & Listing creatives into high-yield revenue engines.",
          "The Prime A2Z Formula strips the guesswork out of E-Commerce Scaling by transforming underperforming Ads & Listing creatives into high-yield revenue engines.",
        ]}
        secondaryHeading="CEO & Founder"
        secondaryDescription="The Prime A2Z Formula strips the guesswork out of E-Commerce Scaling by transforming underperforming Ads & Listing creatives into high-yield revenue engines."
        imageSrc="/images/png/CEO_image.png"
        imageAlt="CEO and Founder"
      />

      <ScaleWithPrimeA2Z />

      <SuccessStories />

      <FAQSection />
    </>
  );
}
