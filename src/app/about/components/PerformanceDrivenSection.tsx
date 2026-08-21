import Image from "next/image";

interface StatCard {
  icon: string;
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const statCards: StatCard[] = [
  { icon: "/images/svg/ads-spent.svg", value: "$1M+", label: "Ads Spent" },
  {
    icon: "/images/svg/sales-generated.svg",
    value: "$10M+",
    label: "Sales Generated",
  },
  {
    icon: "/images/svg/ctr-improved.svg",
    value: "50%+",
    label: "Average CTR Improved",
  },
  {
    icon: "/images/svg/brands-managed.svg",
    value: "500+",
    label: "Brands Managed",
  },
];

const featureItems: FeatureItem[] = [
  {
    icon: "/images/png/ranking.png",
    title: "100% ROI Driven",
    description:
      "Track, optimize, & maximize every dollar for measurable growth.",
  },
  {
    icon: "/images/png/shuttle.png",
    title: "Ranking on Page #1",
    description:
      "Proven strategies to boost visibility & rank for valuable keywords.",
  },
  {
    icon: "/images/png/target.png",
    title: "Up to 7x ROAS",
    description:
      "Smart ad structures built to increase returns and drive performance.",
  },
];

function StatCardItem({ stat }: { stat: StatCard }) {
  return (
    <div className="h-auto group relative overflow-hidden rounded-xl p-[1px]">
      {/* Glowing border - concentrated at all four edges */}
      <div
        className="h-auto pb-2 absolute inset-0 rounded-xl"
        style={{
          background: `
            linear-gradient(to bottom, rgba(180,195,255,0.3), transparent 40%),
            linear-gradient(to top, rgba(120,150,255,0.3), transparent 40%),
            linear-gradient(to right, rgba(150,170,255,0.3), transparent 40%),
            linear-gradient(to left, rgba(150,170,255,0.3), transparent 40%)
          `,
        }}
      />

      {/* Blurred outer glow, still edge-weighted */}
      <div
        className="h-auto pb-2 absolute -inset-[2px] rounded-xl opacity-70 blur-[6px]"
        style={{
          background: `
            linear-gradient(to bottom, rgba(255,255,255,0.5), transparent 35%),
            linear-gradient(to right, rgba(120,150,255,0.4), transparent 35%),
            linear-gradient(to left, rgba(120,150,255,0.4), transparent 35%)
          `,
        }}
      />

      {/* Card body - dark/transparent center, glow fades IN from edges */}
      <div
        className="h-auto relative overflow-hidden rounded-[11px] p-4"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(15,20,50,0.75) 0%, rgba(35,48,110,0.5) 60%, rgba(90,110,210,0.35) 100%)",
          boxShadow:
            "inset 0 0 25px rgba(150,165,255,0.35), inset 0 0 60px rgba(10,15,40,0.6)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 pb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-white">
            <div className="relative h-4 w-4">
              <Image
                src={stat.icon}
                alt={stat.label}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-3 font-sans text-[32px] sm:text-[48px] font-bold leading-none text-white">
            {stat.value}
          </p>

          <p className="mt-1 font-sans text-[16px] sm:text-[22px] text-white/60">
            {stat.label}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({ feature }: { feature: FeatureItem }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
        <div className="relative h-9 w-9">
          <Image
            src={feature.icon}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h4 className="font-sans text-[26px] font-semibold text-white">
          {feature.title}
        </h4>
        <p className="mt-1 font-sans text-[22px] leading-relaxed text-white/60">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function PerformanceChart() {
  // simple polyline mimicking the zig-zag chart in the screenshot
  const points = "0,40 25,20 50,35 75,10 100,28 125,5 150,22 175,15 200,30";

  return (
    <div className="group relative overflow-hidden rounded-xl p-[1px] sm:col-span-2">
      {/* Glowing border - concentrated at all four edges */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `
            linear-gradient(to bottom, rgba(180,195,255,0.3), transparent 30%),
            linear-gradient(to top, rgba(120,150,255,0.3), transparent 30%),
            linear-gradient(to right, rgba(150,170,255,0.3), transparent 30%),
            linear-gradient(to left, rgba(150,170,255,0.3), transparent 30%)
          `,
        }}
      />

      {/* Blurred outer glow, still edge-weighted */}
      <div
        className="absolute -inset-[2px] rounded-xl opacity-60 blur-[6px]"
        style={{
          background: `
            linear-gradient(to bottom, rgba(255,255,255,0.3), transparent 30%),
            linear-gradient(to right, rgba(120,150,255,0.3), transparent 30%),
            linear-gradient(to left, rgba(120,150,255,0.3), transparent 30%)
          `,
        }}
      />

      {/* Card body - dark/transparent center, glow fades IN from edges */}
      <div
        className="relative overflow-hidden rounded-[11px] p-4"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(15,20,50,0.75) 0%, rgba(35,48,110,0.5) 60%, rgba(90,110,210,0.35) 100%)",
          boxShadow:
            "inset 0 0 25px rgba(150,165,255,0.35), inset 0 0 60px rgba(10,15,40,0.6)",
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <p className="font-sans text-[16px] font-semibold text-white">
              Performance Overview
            </p>
            <button className="flex items-center gap-1 rounded-md border border-white/15 px-2.5 py-1 font-sans text-[12px] text-white/80">
              Last 7 months
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.4fr]">
            {/* Left: mini stat blocks */}
            <div className="flex flex-col gap-3">
              <div className="rounded-lg bg-white/5 p-3 border border-white/15">
                <p className="font-sans text-[12px] text-white/50">
                  Total Revenue
                </p>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                  <span className="font-sans text-[24px] font-bold text-white">
                    $45M
                  </span>
                  <span className="font-sans text-[12px] text-[white] font-thin">
                    +28.6%
                  </span>
                </div>
                <p className="mt-0.5 font-sans text-[12px] text-white/40">
                  vs Last 6 months
                </p>
              </div>

              <div className="rounded-lg bg-white/5 p-3 border border-white/15">
                <p className="font-sans text-[12px] text-white/50">Avg. ROAS</p>
                <div className="mt-1 flex items-baseline gap-2 justify-between">
                  <span className="font-sans text-[20px] font-bold text-white">
                    6.7
                  </span>
                  <span className="font-sans text-[12px] font-thin text-[white]">
                    +18.4%
                  </span>
                </div>
                <p className="mt-0.5 font-sans text-[12px] text-white/40">
                  vs Last 6 months
                </p>
              </div>
            </div>

            {/* Right: chart */}
            <div className=" border border-white/15 flex items-center justify-center rounded-lg bg-white/5 p-3">
              <svg
                viewBox="0 0 200 50"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points={points}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PerformanceDrivenSection() {
  return (
    <section className="mb-20 relative w-full bg-[#00081F] bg-blue-gradient px-6 py-16 sm:px-12 lg:px-16">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[500px] rounded-full bg-[#0E3388] opacity-30 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1300px] gap-10 grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        {/* ── Left: heading + features ── */}
        <div>
          <h2 className="font-sans text-[36px] font-bold leading-tight text-white sm:text-[42px]">
            Performance Driven.
            <br />
            Result Proven.
          </h2>
          <p className="mt-4 max-w-[520px] font-sans text-[22px] leading-relaxed text-white/60">
            We turn data into decisions and strategies into measurable growth
            for your brand.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {featureItems.map((feature) => (
              <FeatureRow key={feature.title} feature={feature} />
            ))}
          </div>

          <button className="mt-10 rounded-full bg-white/10 px-6 py-3 font-sans text-[14px] font-semibold text-white transition hover:bg-white/20">
            Let&apos;s Grow Your Business
          </button>
        </div>

        {/* ── Right: stats grid + chart ── */}
        <div className="grid grid-cols-2 gap-4">
          {statCards.map((stat) => (
            <StatCardItem key={stat.label} stat={stat} />
          ))}
          <PerformanceChart />
        </div>
      </div>
    </section>
  );
}
