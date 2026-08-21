import Image from "next/image";
import Link from "next/link";

export default function TestimonialsHero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-primary-dark lg:aspect-[2160/911] lg:min-h-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testominial/pngs/testimonialMainImage.png"
          alt="E-commerce growth network"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content — padding-top accounts for fixed header */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1251px] flex-col justify-end px-6 pb-14 pt-[160px] sm:px-10 sm:pt-[172px] lg:h-full lg:min-h-0 lg:px-0 lg:pb-[clamp(120px,13vw,190px)] lg:pt-[180px]">
        <h1 className="text-h1 font-sans font-bold text-txt-white sm:text-[48px] lg:text-display lg:font-display">
          Client Testimonials
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-3 flex items-center gap-2 text-caption-lg font-sans"
        >
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-txt-white"
          >
            Home
          </Link>
          <span aria-hidden="true" className="text-white/40">
            /
          </span>
          <span className="text-txt-white">Testimonials</span>
        </nav>
      </div>
    </section>
  );
}
