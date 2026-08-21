import type { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import ClientVideosSection from "@/components/testimonials/ClientVideosSection";
import GrowthSection from "@/components/home/common/GrowthSection";

export const metadata: Metadata = {
  title: "Client Testimonials | Naeem Portfolio",
  description:
    "Hear directly from Amazon brands about the results Prime A2Z has delivered.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />

      <ClientVideosSection />

      {/* Light section gap, matching the spacing rhythm used on the home page. */}
      <div aria-hidden="true" className="h-12 bg-primary-light" />

      <GrowthSection
        backgroundImage="/images/testominial/pngs/groupMetting.png"
        backgroundImageAlt="Team celebrating Amazon brand growth"
        heading="Ready to Scale Your Amazon Brand?"
        description="We Help Amazon Brands Transform Into Revenue-Driven Stores With 360° Growth Solutions, Scaling From $20K to $100K+/Month in Just 1 Month While Reducing Wasteful Ad Spend."
      />
    </>
  );
}
