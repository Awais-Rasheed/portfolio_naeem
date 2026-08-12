import Image from "next/image";

export interface HowPrimeA2ZProps {
  primaryHeading?: string;
  primarySubheading?: string;
  primaryDescriptions?: string[];
  secondaryHeading?: string;
  secondaryDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HowPrimeA2Z({
  primaryHeading,
  primarySubheading,
  primaryDescriptions = [],
  secondaryHeading,
  secondaryDescription,
  imageSrc = "/images/png/CEO_image.png",
  imageAlt = "CEO and Founder",
}: HowPrimeA2ZProps) {
  const hasPrimaryBlock =
    primaryHeading || primarySubheading || primaryDescriptions.length > 0;

  const hasSecondaryBlock = secondaryHeading || secondaryDescription;

  return (
    <section className="relative">
      {/* Blue background/content block */}
      <div className="relative z-10 grid max-w-[90%] grid-cols-1 bg-primary lg:grid-cols-[1fr_45%]">
        {/* Left: Text content */}
        <div className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-12 lg:w-[90%] lg:px-14 lg:py-14">
          {/* Background radial glow */}
          <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[420px] w-[520px] rounded-full bg-txt-blue-light opacity-60 blur-[110px]" />

          <div className="relative z-10 max-w-[500px]">
            {/* Primary block */}
            {hasPrimaryBlock && (
              <div>
                {primaryHeading && (
                  <h2 className="text-h1 font-sans font-bold text-txt-white">
                    {primaryHeading}
                  </h2>
                )}

                {primarySubheading && (
                  <p className="mt-0.5 text-body1 font-sans font-semibold text-txt-white">
                    {primarySubheading}
                  </p>
                )}

                {primaryDescriptions.map((desc, i) => (
                  <p
                    key={i}
                    className={`${
                      i === 0 ? "mt-4" : "mt-3"
                    } text-caption-lg font-sans leading-[1.6] text-white/85`}
                  >
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {/* Secondary block */}
            {hasSecondaryBlock && (
              <div className={hasPrimaryBlock ? "mt-8" : undefined}>
                {secondaryHeading && (
                  <h2 className="text-h1 font-sans font-bold text-txt-white">
                    {secondaryHeading}
                  </h2>
                )}

                {secondaryDescription && (
                  <p className="mt-3 text-caption font-sans leading-[1.6] text-white/85">
                    {secondaryDescription}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Overlapping Photo */}
      <div className="absolute right-[0%] top-[3%] z-20 hidden h-full w-[50%] lg:block">
        <div className="relative min-h-[300px] lg:min-h-[480px] lg:mt-15 lg:ml-40 z-20">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative z-20 block w-full lg:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
