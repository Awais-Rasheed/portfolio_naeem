"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
}

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: "/images/svg/email.svg",
    label: "E-mail Address",
    value: "info@primea2z.com",
  },
  {
    icon: "/images/svg/phone.svg",
    label: "Phone Number",
    value: "+123 4256 6897",
  },
  {
    icon: "/images/svg/location.svg",
    label: "Office Address",
    value: "123 Business Avenue, UK 10323",
  },
  {
    icon: "/images/svg/Working_hour.svg",
    label: "Working Hours",
    value: "Mon - Fri 9 AM - 6 PM",
  },
];

const formIcons = {
  user: "/images/png/user.png",
  mail: "/images/png/mail.png",
  phone: "/images/png/phone.png",
  subject: "/images/png/subject.png",
  message: "/images/png/message.png",
  send: "/images/png/send.png",
};

function IconImage({
  src,
  alt,
  size = 20,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl p-[1px] ${className}`}>
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `
            linear-gradient(to bottom, rgba(180,195,255,0.3), transparent 40%),
            linear-gradient(to top, rgba(120,150,255,0.3), transparent 40%),
            linear-gradient(to right, rgba(150,170,255,0.3), transparent 40%),
            linear-gradient(to left, rgba(150,170,255,0.3), transparent 40%)
          `,
        }}
      />
      <div
        className="relative overflow-hidden rounded-[11px]"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(15,20,50,0.85) 0%, rgba(25,35,90,0.6) 60%, rgba(60,80,180,0.35) 100%)",
          boxShadow: "inset 0 0 25px rgba(150,165,255,0.2)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfoBar() {
  return (
    <GlowCard>
      <div className="grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfoItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-white">
              <IconImage src={item.icon} alt={item.label} size={20} />
            </div>
            <p className="mt-3 font-sans text-[13px] font-semibold text-white">
              {item.label}
            </p>
            <p className="mt-1 font-sans text-[13px] leading-snug text-white/60">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire up your submission logic here
    console.log(formData);
  };

  return (
    <GlowCard className="h-full">
      <div className="px-6 py-7 sm:px-8 sm:py-8">
        <h3 className="font-sans text-[20px] font-bold text-white">
          Send Us a Message
        </h3>
        <p className="mt-1 font-sans text-[13px] text-white/60">
          Fill in the form and we&apos;ll get back to you as soon as possible
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5">
              <IconImage src={formIcons.user} alt="" size={16} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5">
              <IconImage src={formIcons.mail} alt="" size={16} />
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5">
              <IconImage src={formIcons.phone} alt="" size={16} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5">
              <IconImage src={formIcons.subject} alt="" size={16} />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5">
            <div className="mt-0.5">
              <IconImage src={formIcons.message} alt="" size={16} />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none bg-transparent font-sans text-[13px] text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-sans text-[14px] font-semibold text-[#0A1533] transition hover:bg-white/90"
          >
            Send Message
            <IconImage src={formIcons.send} alt="" size={16} />
          </button>
        </form>
      </div>
    </GlowCard>
  );
}

function MapPanel() {
  return (
    <GlowCard className="h-full">
      <div className="relative h-full min-h-[420px] w-full">
        <Image
          src="/images/png/map.png" // 👈 replace with actual map image / embed
          alt="Office location map"
          fill
          className="object-cover"
        />
      </div>
    </GlowCard>
  );
}

export default function ContactUsSection() {
  return (
    <section className="relative w-full bg-[#00081F] bg-blue-gradient px-6 py-16 sm:px-12 lg:px-16">
      <div className="pointer-events-none absolute -right-20 top-0 h-[400px] w-[500px] rounded-full bg-[#0E3388] opacity-30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* ── Top info bar ── */}
        <ContactInfoBar />

        {/* ── Form + Map ── */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ContactForm />
          <MapPanel />
        </div>
      </div>
    </section>
  );
}
