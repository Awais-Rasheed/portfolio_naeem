import Image from "next/image";

interface CompanyLogo {
  name: string;
  src: string;
}

const companyLogos: CompanyLogo[] = [
  { name: "Azurise", src: "/images/brands/AZURISE.png" },
  { name: "Tulvera", src: "/images/brands/Tulvera.png" },
  { name: "DNVB Shop", src: "/images/brands/DNVB.png" },
  { name: "Purity Crystalline", src: "/images/brands/Purity-Crystalline.png" },
  { name: "Nuvó", src: "/images/brands/NOVO.png" },
  { name: "Falcon Home", src: "/images/brands/falcon.png" },
  { name: "Aurame", src: "/images/brands/arome.png" },
  { name: "Fashion Bee", src: "/images/brands/Fusion.png" },
  { name: "Atlas Essentials", src: "/images/brands/Atlas-Essentials.png" },
];


export default function CompanyWeWorkWithSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-gradient bg-blue-gradient py-12">
      {/* subtle top border accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-txt-white/80" />

      {/* Premium fade gradient masks on the edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-32 mask-marquee-left" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-32 mask-marquee-right" />

      <div className="relative w-full overflow-hidden">
        {/* The marquee parent has display flex and no gap, ensuring seamless translate-50% loop */}
        <div className="flex animate-marquee">
          
          {/* First track */}
          <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20">
            {companyLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative flex h-20 w-[180px] sm:h-24 sm:w-[220px] shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-contain object-center transition-all duration-300 hover:scale-105 filter brightness-90 hover:brightness-100"
                />
              </div>
            ))}
          </div>

          {/* Second track (identical duplicate) */}
          <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20">
            {companyLogos.map((logo) => (
              <div
                key={`${logo.name}-dup`}
                className="relative flex h-20 w-[180px] sm:h-24 sm:w-[220px] shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-contain object-center transition-all duration-300 hover:scale-105 filter brightness-90 hover:brightness-100"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
