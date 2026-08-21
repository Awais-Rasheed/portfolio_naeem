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
      {/* ================= DESKTOP VIEW (lg+) ================= */}
      <div className="hidden lg:block relative">
        {/* Blue background/content block */}
        <div className="relative z-10 grid max-w-[90%] grid-cols-1 bg-primary bg-blue-gradient lg:grid-cols-[1fr_45%]">
          {/* Left: Text content */}
          <div className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-12 lg:w-[90%] lg:px-14 lg:py-14">
            {/* Background radial glow */}
            <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[420px] w-[520px] rounded-full bg-txt-blue-light opacity-60 blur-[110px]" />

            <div className="relative z-10 max-w-[500px] pb-10">
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
                        i === 0 ? "mt-4" : "mt-7"
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
        <div className="absolute right-[0%] top-[3%] z-20 h-full w-[50%]">
          <div className="relative min-h-[300px] lg:min-h-[480px] lg:mt-15 lg:ml-40 z-20">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (< lg) ================= */}
      <div className="block lg:hidden relative w-full my-8 px-4 sm:px-6">
        <div className="relative w-full bg-primary rounded-3xl overflow-hidden px-6 py-8 sm:px-8 sm:py-10 shadow-xl">
          {/* Background radial glow */}
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-txt-blue-light opacity-50 blur-[90px]" />

          <div className="relative z-10 w-full space-y-6">
            {/* Primary block */}
            {hasPrimaryBlock && (
              <div>
                {primaryHeading && (
                  <h2 className="text-[28px] sm:text-[34px] font-sans font-bold text-txt-white leading-tight">
                    {primaryHeading}
                  </h2>
                )}

                {primarySubheading && (
                  <p className="mt-1 text-[18px] font-sans font-semibold text-white/90">
                    {primarySubheading}
                  </p>
                )}

                {primaryDescriptions.map((desc, i) => (
                  <p
                    key={i}
                    className="mt-3 text-[15px] font-sans leading-relaxed text-white/85"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {/* CEO / Secondary block */}
            {hasSecondaryBlock && (
              <div className="pt-2 border-t border-white/10">
                {secondaryHeading && (
                  <h3 className="text-[22px] font-sans font-bold text-txt-white">
                    {secondaryHeading}
                  </h3>
                )}

                {secondaryDescription && (
                  <p className="mt-2 text-[14px] font-sans leading-relaxed text-white/85">
                    {secondaryDescription}
                  </p>
                )}
              </div>
            )}

            {/* CEO Mobile Image Container */}
            <div className="relative w-full h-[280px] sm:h-[360px] mt-4 pt-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
