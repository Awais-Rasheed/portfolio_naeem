import Image from "next/image";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: "/images/png/fast.png",
    title: "Fast Response",
    description: "We respond to all your inquiries with in 24 hours",
  },
  {
    icon: "/images/png/end-call.png",
    title: "Expert Consultation",
    description: "Get professional advice from our experienced team",
  },
  {
    icon: "/images/png/customer-service.png",
    title: "Dedicated Support",
    description: "We're with you every step of the way",
  },
];

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-[1px]">
      {/* Glowing border - toned down */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `
            linear-gradient(to bottom, rgba(140,155,220,0.18), transparent 40%),
            linear-gradient(to top, rgba(90,115,200,0.18), transparent 40%),
            linear-gradient(to right, rgba(110,130,210,0.18), transparent 40%),
            linear-gradient(to left, rgba(110,130,210,0.18), transparent 40%)
          `,
        }}
      />

      {/* Blurred outer glow - toned down */}
      <div
        className="absolute -inset-[2px] rounded-xl opacity-50 blur-[6px]"
        style={{
          background: `
            linear-gradient(to bottom, rgba(140,150,200,0.25), transparent 35%),
            linear-gradient(to right, rgba(90,115,200,0.25), transparent 35%),
            linear-gradient(to left, rgba(90,115,200,0.25), transparent 35%)
          `,
        }}
      />

      {/* Card body - unchanged */}
      <div
        className="relative overflow-hidden rounded-[11px] px-6 py-8 text-center"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(15,20,50,0.75) 0%, rgba(35,48,110,0.5) 60%, rgba(90,110,210,0.35) 100%)",
          boxShadow:
            "inset 0 0 25px rgba(150,165,255,0.2), inset 0 0 60px rgba(10,15,40,0.6)",
        }}
      >
        <div className="relative z-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <div className="relative h-5 w-5">
              <Image
                src={card.icon}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="mt-4 font-sans text-[20px] font-bold text-white">
            {card.title}
          </h3>
          <p className="mt-2 font-sans text-[18px] leading-relaxed text-white/60">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full bg-[#00081F] bg-blue-gradient px-6 py-16 sm:px-12 lg:px-16">
      <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-3">
        {featureCards.map((card) => (
          <FeatureCardItem key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
