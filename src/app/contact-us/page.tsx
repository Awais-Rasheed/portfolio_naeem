import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import GrowthSection from "@/components/home/common/GrowthSection";
import WhyChooseUsSection from "@/components/contact_us/WhyChooseUs";

export const metadata: Metadata = {
  title: "Contact Us | Prime A2Z Services",
  description:
    "Get in touch with Prime A2Z Services. Fill in our contact form or reach out directly for e-commerce growth, Amazon, and TikTok Shop strategies.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        pageName="Contact Us"
        backgroundImage="/images/jpg/ContactUs_bg.jpg"
        backgroundImageAlt="Contact Us Hero"
        backgroundImageOpacity={1}
        overlayOpacity={0.5}
      />

      <div className="my-10 flex w-full max-w-full flex-col gap-4 px-6 sm:flex-row sm:justify-between sm:px-10">
        {" "}
        <div className="w-full sm:w-[55%]">
          <h2 className="text-2xl sm:text-display font-display font-bold">
            We're Here to Help
          </h2>
        </div>
        <div className="w-full sm:w-[40%]">
          <p className="text-body1 text-txt-secondary leading-relaxed">
            We’d love to hear from you. Reach out to us for inquiries, support,
            or project discussions.
          </p>
        </div>
      </div>

      {/* Main Contact Section matching user's design image */}
      <ContactSection />

      <div className="flex w-full h-[100px] items-center justify-center">
        <h1 className="text-display font-display font-bold">Why Choose Us?</h1>
      </div>

      <WhyChooseUsSection />

      {/* Growth Section */}
      <GrowthSection
        heading="Ready to Scale Your Brand?"
        description="Transform your e-commerce presence with data-driven strategy, high-converting creatives, and performance advertising."
        buttonText="Book A Free Call"
        buttonHref="/contact-us"
        backgroundImage="/images/jpg/Growth.jpg"
      />
      <div className="mb-10"></div>
    </>
  );
}
