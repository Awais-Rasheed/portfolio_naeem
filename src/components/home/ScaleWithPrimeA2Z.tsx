import Image from "next/image";

export default function ScaleWithPrimeA2Z() {
  return (
    <section className="relative w-full my-30">
      {/* ── Top: "From Vision To Results" ── */}
      <div className=" lg:w-[100%] px-6 py-16 text-center sm:px-12">
        <h2 className="text-display font-display font-bold text-txt-primary">
          From Vision To Results
        </h2>

        <p className="mx-auto mt-4 max-w-[1186px] text-body1 font-sans leading-relaxed text-txt-secondary">
          Powered by battle-tested systems and years of omnichannel experience,
          the Prime A2Z Framework transforms Amazon advertising into a
          predictable growth engine. Rather than making minor adjustments.
        </p>

        <p className="mx-auto mt-3 max-w-[1186px] text-body1 font-sans leading-relaxed text-txt-secondary">
          We apply a strategic, data-backed approach that reduces wasted spend,
          increases customer acquisition, and accelerates profitable scaling
        </p>

        <button className="mt-6 btn-success-story">
          Build Your Success Story
        </button>
      </div>

      {/* ── Dark banner section ── */}
      <div className="relative max-w-[90%] right-[-10%] bg-primary">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(0,0,0,0.03) 17.4%,rgba(8,49,255,0.06) 28.73%,rgba(0,0,0,0.03) 35.39%,rgba(0,0,0,0.03) 52.9%,rgba(0,21,255,0.06) 65.4%,rgba(0,0,0,0.03) 86.07%)",
          }}
        />
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[45%_1fr]">
          {/* ── Left: CEO photo (overlaps section, breaks out to the left) ── */}
          <div className="relative z-10 top-17 -left-35 min-h-[380px] lg:min-h-[480px]">
            <Image
              src="/images/png/CEO_image.png"
              alt="Scale with Prime A2Z"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* ── Right: Text content ── */}
          <div className="relative overflow-hidden px-8 py-10 sm:px-12 sm:py-12 lg:py-14 right-20">
            <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[420px] w-[520px] rounded-full bg-txt-blue-light opacity-60 blur-[110px]" />

            <div className="relative z-10 max-w-[600px]">
              <h3 className="text-display font-display font-bold text-txt-white">
                Scale with Prime A2Z Ad Formula
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {["7x ROAS", "Low ACOS", "100% ROI", "1st Page Ranking"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="card-glass rounded-sm px-4 py-2 text-caption-lg font-sans font-semibold text-txt-white"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-4 btn-success-story ml-140">
        Build Your Success Story
      </button>
    </section>
  );
}
