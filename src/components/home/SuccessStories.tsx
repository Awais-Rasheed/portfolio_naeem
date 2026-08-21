import { caseStudyGroups, CaseStudyRow } from "./CaseStudySection";
import Image from "next/image";
import GrowthSection from "./common/GrowthSection";
import CompanyWeWorkWithSection from "./common/CompanyWeWorkWithSection";

export default function SuccessStories() {
  return (
    <>
      <section className="mb-30 relative w-full overflow-hidden bg-primary bg-blue-gradient px-6 py-16 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -right-20 top-10 h-[400px] w-[500px] rounded-full bg-txt-blue-light opacity-40 blur-[110px]" />

        {/* ── Header ── */}
        <div className="relative z-10 mx-auto max-w-[1000px] text-center">
          <h2 className="text-[32px] sm:text-display font-display font-extrabold tracking-wide text-txt-white">
            SUCCESS STORIES
          </h2>
          <p className="mt-2 text-[20px] sm:text-[28px] font-sans font-semibold text-txt-white">
            See The Results That Speak for Themselves
          </p>
          <p className="mx-auto mt-4 max-w-[1000px] text-body1 font-sans leading-relaxed text-white/70">
            From emerging startups to established brands, We&apos;ve partnered
            with businesses at every stage of their journey. These case studies
            highlight the proven strategies, measurable results, and growth
            stories that helped brands scale from 5 to 7 figures.
          </p>
        </div>
      </section>

      <div className="relative w-full overflow-hidden bg-[#001233] bg-blue-gradient px-6 py-16 sm:px-12 lg:px-16">
        <div className="relative z-10">
          {caseStudyGroups.map((group) => (
            <CaseStudyRow key={group.category} group={group} />
          ))}
        </div>
      </div>

      <GrowthSection />

      <div className="flex w-full items-center justify-center py-10 px-6 text-center">
        <h2 className="text-[28px] sm:text-display font-display font-bold">
          Brands We Work With
        </h2>
      </div>

      <CompanyWeWorkWithSection />
    </>
  );
}
