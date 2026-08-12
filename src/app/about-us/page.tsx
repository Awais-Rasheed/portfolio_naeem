import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import CompanyWeWorkWithSection from "@/components/home/common/CompanyWeWorkWithSection";
import HowPrimeA2Z from "@/components/home/HowPrimeA2Z";
import PerformanceDrivenSection from "../about/components/PerformanceDrivenSection";

export const metadata: Metadata = {
  title: "About Us | Naeem Portfolio - PrimeA2Z",
  description:
    "Learn about our 6+ years of experience scaling 500+ Amazon Sellers with data-driven PPC ad management, high-yield listing creatives, and brand growth systems.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Page Hero Common Component */}
      <PageHero
        title="About Us"
        pageName="About Us"
        backgroundImage="/images/jpg/About_us.jpg"
        backgroundImageAlt="About page"
        backgroundImageOpacity={1}
        overlayOpacity={0.5}
      />

      <div className="flex w-full min-h-[100px] items-center justify-center px-4 py-6">
        <h2 className="text-2xl sm:text-display font-display font-bold text-center">
          Brands We Work With
        </h2>
      </div>
      {/* Brand Experience Banner */}
      <CompanyWeWorkWithSection />

      <div className="my-10 flex w-full flex-col gap-4 px-6 sm:flex-row sm:justify-between sm:px-10">
        <div className="w-full sm:w-3/4">
          <h2 className="text-2xl sm:text-display font-display font-bold">
            Why Choose The Prime A2Z?
          </h2>
        </div>
        <div className="w-full sm:w-1/4">
          <p className="text-body1 text-txt-secondary leading-relaxed">
            The Experts Behind Your Amazon Success
          </p>
        </div>
      </div>

      <HowPrimeA2Z
        primaryDescriptions={[
          "Our journey began in 2020 with a clear purpose: helping Amazon businesses achieve consistent, profitable growth.",
          "Growth on Amazon takes more than great products and  it takes the right strategy. At The Prime A2Z, we combine data-driven advertising with compelling creatives to help brands increase visibility, boost conversions, and scale profitably at every stage of their journey.",
          "Rather than offering standard packages, we create customized strategies and work alongside you to unlock your brand's full potential.",
        ]}
        imageSrc="/images/svg/team.svg"
      />

      <div className="bg-primary-light bg-primary-gradient px-6 py-4 justify-left sm:px-12">
        <h2 className="text-2xl sm:text-display font-display font-bold text-txt-primary">
          Our Solutions
        </h2>

        <p className="w-full sm:w-[60%] mt-4 text-body1 font-sans leading-relaxed text-txt-secondary">
          Rather than offering standard packages, we create customized
          strategies and work alongside you to unlock your brand's full
          potential.
        </p>

        <button className="mt-6 btn-success-story">
          Let’s Grow Your Business
        </button>
      </div>

      <PerformanceDrivenSection />
    </>
  );
}
