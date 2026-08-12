import Image from "next/image";

interface CompanyLogo {
  name: string;
  src: string;
}

const companyLogos: CompanyLogo[] = [
  { name: "Azurise", src: "/images/brands/azurise.png" },
  { name: "Tulvera", src: "/images/brands/tulvera.png" },
  { name: "DNVB Shop", src: "/images/brands/dnvb.png" },
  { name: "Purity Crystalline", src: "/images/brands/purity-crystalline.png" },
  { name: "Nuvó", src: "/images/brands/novo.png" },
  { name: "Falcon Home", src: "/images/brands/falcon.png" },
  { name: "Aurame", src: "/images/brands/arome.png" },
  { name: "Fashion Bee", src: "/images/brands/fusion.png" },
  { name: "Atlas Essentials", src: "/images/brands/atlas-essentials.png" },
];

export default function CompanyWeWorkWithSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-gradient bg-blue-gradient py-20 px-6 sm:px-10">
      {/* subtle top border accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-txt-white/80" />

      <div className="mx-auto max-w-[1300px] flex flex-wrap justify-center gap-y-8 gap-x-4">
        {companyLogos.map((logo) => (
          <div
            key={logo.name}
            className="relative flex h-16 w-[120px] sm:w-[150px] shrink-0 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain object-center p-1"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
