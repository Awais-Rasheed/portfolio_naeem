interface TestimonialVideo {
  id: string;
  alt: string;
}

const testimonialVideos: TestimonialVideo[] = [
  { id: "01", alt: "Client video testimonial 1" },
  { id: "02", alt: "Client video testimonial 2" },
  { id: "03", alt: "Client video testimonial 3" },
  { id: "04", alt: "Client video testimonial 4" },
];

function PlayIcon() {
  return (
    <svg
      className="h-12 w-12 lg:h-[76px] lg:w-[76px]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" stroke="#0C0C0C" strokeWidth="1.5" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#0C0C0C" />
    </svg>
  );
}

export default function ClientVideosSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-12 sm:px-12 lg:min-h-[1117px] lg:px-0 lg:py-8">
      {/* Figma background: blue light runs from bottom-left to top-right. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-260px] left-[-190px] h-[760px] w-[860px] rounded-full bg-[#001D60] opacity-90 blur-[170px]" />
        <div className="absolute right-[-210px] top-[-300px] h-[760px] w-[860px] rounded-full bg-[#001D60] opacity-90 blur-[170px]" />
        <div className="absolute inset-0 bg-primary-gradient" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1251px]">
        <h2 className="text-h1 font-sans font-bold text-txt-white">
          Hear It Directly from Our Clients
        </h2>
        <p className="mt-2 max-w-[710px] text-body1 font-sans text-white/90">
          Discover what our clients have to say about their experience, the
          results we&apos;ve delivered, and why they continue to trust us
          with their Amazon growth.
        </p>

        <div className="mx-auto mt-10 grid max-w-[960px] grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-[60px] lg:gap-y-16">
          {testimonialVideos.map((video) => (
            <div
              key={video.id}
              role="img"
              aria-label={video.alt}
              className="flex aspect-[45/34] w-full items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.28)] lg:rounded-[28px]"
            >
              <span className="flex items-center justify-center">
                <PlayIcon />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="btn-view-all lg:h-14 lg:px-8 lg:text-[20px] lg:leading-6"
            style={{
              backgroundColor: "var(--color-accent-slate)",
              color: "var(--color-text-white)",
            }}
          >
            View all
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
