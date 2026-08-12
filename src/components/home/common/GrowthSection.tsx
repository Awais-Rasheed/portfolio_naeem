import Image from "next/image";
import Link from "next/link";

export interface GrowthSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  onButtonClick?: () => void;
}

export default function GrowthSection({
  heading = "Growth Stories From Real Brands",
  description = "From emerging startups to established brands, We've partnered with businesses at every stage of their journey. These case studies highlight the proven strategies, measurable results, and growth stories that helped brands scale from 5 to 7 figures.",
  buttonText = "Book Free Call",
  buttonHref = "/contact",
  backgroundImage = "/images/jpg/Growth.jpg",
  backgroundImageAlt = "Team collaborating in office",
  onButtonClick,
}: GrowthSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#000000AD" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[full] px-6 py-24 text-center sm:px-12">
        <h2 className="text-[28px] sm:text-display font-display font-bold text-txt-white">
          {heading}
        </h2>

        <p className="mx-auto mt-6 max-w-[full] text-body1 font-sans leading-relaxed text-white/90">
          {description}
        </p>

        <Link href={buttonHref} className="mt-8 btn-book-call">
          {buttonText}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
