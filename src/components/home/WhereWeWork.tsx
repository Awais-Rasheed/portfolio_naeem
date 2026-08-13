import Image from "next/image";

export default function WhereWeWork() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-dark mb-30">
      {/* Subtle blue-band overlay */}
      <div className="pointer-events-none absolute inset-0 bg-primary-gradient" />

      <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-14">
        {/* Heading */}
        <h2 className="text-center text-h1 font-sans font-bold text-txt-white">
          Where We Work
        </h2>

        {/* Two-panel grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 mt-6 md:h-[350px]">
          {/* Fiverr panel */}
          <div className="relative flex flex-col justify-end pt-8 pb-6 px-6 sm:px-10 md:border-r md:border-txt-white/60 min-h-[240px] md:min-h-0">
            {/* Person image */}
            <div className="absolute right-4 bottom-0 z-[1] h-[200px] md:h-[320px] w-auto">
              <Image
                src="/images/png/fiverr.png"
                alt="Fiverr freelancer"
                width={260}
                height={320}
                sizes="(max-width: 768px) 160px, 260px"
                className="h-full w-auto object-bottom object-contain"
              />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <h3 className="text-h1 font-sans font-extrabold leading-none text-txt-white">
                FIVERR<span className="text-[#1DBF73]">.</span>
              </h3>
              <span className="text-caption-lg leading-none text-[#FFE000]">
                ★★★★★
              </span>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="text-body1 font-sans font-semibold text-[#3B82F6]">
                  5.0 Stars
                </span>
                <span className="text-body1 font-sans text-white/70">
                  | 350 Ratings
                </span>
              </div>
            </div>
          </div>

          {/* Upwork panel */}
          <div className="relative flex flex-col justify-end pt-8 pb-6 px-6 sm:px-10 min-h-[240px] md:min-h-0 border-t border-txt-white/30 md:border-t-0">
            {/* Person image */}
            <div className="absolute right-4 bottom-0 z-[1] h-[200px] md:h-[320px] w-auto">
              <Image
                src="/images/png/upwork.png"
                alt="Upwork freelancer"
                width={260}
                height={320}
                sizes="(max-width: 768px) 160px, 260px"
                className="h-full w-auto object-bottom object-contain"
              />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <h3 className="text-h1 font-sans font-extrabold leading-none text-txt-white">
                UPWORK
              </h3>
              <span className="text-caption-lg leading-none text-[#FFE000]">
                ★★★★★
              </span>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="text-body1 font-sans font-semibold text-[#3B82F6]">
                  5.0 Stars
                </span>
                <span className="text-body1 font-sans text-white/70">
                  | 10 Ratings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
