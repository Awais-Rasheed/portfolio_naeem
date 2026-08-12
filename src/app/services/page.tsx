import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import CompanyWeWorkWithSection from "@/components/home/common/CompanyWeWorkWithSection";
import PerformanceDrivenSection from "@/app/about/components/PerformanceDrivenSection";
import FAQSection from "@/components/home/FAQSection";
import GrowthSection from "@/components/home/common/GrowthSection";

export const metadata: Metadata = {
  title: "Prime A2Z Services | Data-Driven E-Commerce Growth",
  description:
    "Explore Prime A2Z services including Amazon Creatives, Amazon Ads management, and TikTok Shop scaling built to drive measurable revenue.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Prime A2Z Services"
        pageName="Services"
        backgroundImage="/images/jpg/services_bg.jpg"
        backgroundImageAlt="Service page"
        backgroundImageOpacity={1}
        overlayOpacity={0.5}
      />
      <div className="mb-10"></div>

      {/* Main Services Section matching user's design image */}
      <ServicesGridSection />
      <div className="mb-10"></div>
      {/* Performance Driven Section */}
      <PerformanceDrivenSection />
      <GrowthSection
        heading="Ready to Scale Your Amazon Brand?"
        description="We Help Amazon Brands Transform Into Revenue-Driven Stores With 360° Growth Solutions, Scaling From $20K to $100K+/Month in Just 1 Month While Reducing Wasteful Ad Spend."
        buttonText="Book A Free Call"
        backgroundImage="/images/jpg/Growth.jpg"
        backgroundImageAlt="Client success story"
        buttonHref="/get-started"
      />

      <div className="mb-10"></div>
    </>
  );
}
