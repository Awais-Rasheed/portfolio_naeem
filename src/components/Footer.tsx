import Link from "next/link";
import Image from "next/image";

const pages = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/#contact-us" },
];

const services = [
  { label: "Amazon Ads", href: "/services/amazon-ads" },
  { label: "Amazon Creatives", href: "/services/amazon-creatives" },
];

const quickLinks = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Amazon Ads", href: "/services/amazon-ads" },
  { label: "Amazon Creatives", href: "/services/amazon-creatives" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const contactLinks = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Amazon Ads", href: "/services/amazon-ads" },
  { label: "Amazon Creatives", href: "/services/amazon-creatives" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark bg-blue-gradient text-txt-white">
      {/* Subtle blue-band overlay */}
      <div className="pointer-events-none absolute inset-0 bg-primary-gradient" />
      <div className="pointer-events-none absolute -left-20 bottom-[-250px] h-[500px] w-[700px] rounded-full bg-blue-900/70 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[-250px] h-[500px] w-[600px] rounded-full bg-blue-900/50 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-8 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Logo */}
          <div className="flex items-start">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/png/logo.png"
                alt="Naeem Logo"
                width={250}
                height={70}
                className="object-contain brightness-0 invert"
              />
            </Link>
          </div>

          {/* Pages */}
          <FooterColumn title="Pages" links={pages} />

          {/* Services */}
          <FooterColumn title="Services" links={services} />

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={quickLinks} />

          {/* Contact Info */}
          <FooterColumn title="Contact Info" links={contactLinks} />
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/5 pt-8 text-caption sm:flex-row sm:items-center sm:justify-center lg:mt-8">
          <p className="text-white/90">PrimeA2Z © 2026 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-8 text-card-title font-semibold leading-none text-txt-white">
        {title}
      </h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-caption-lg text-white/95 transition-colors duration-200 hover:text-blue-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
