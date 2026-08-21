"use client";

import { useState } from "react";

interface FAQItem {
  index: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    index: "/01",
    question: "What does Prime A2Z do?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
  {
    index: "/02",
    question: "Who is Prime A2Z for?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
  {
    index: "/03",
    question: "What makes Prime A2Z different from other agencies?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
  {
    index: "/04",
    question: "How quickly can I expect to see results?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
  {
    index: "/05",
    question: "What services does Prime A2Z offer?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
  {
    index: "/06",
    question: "How do I get started with Prime A2Z?",
    answer:
      "Prime A2Z is a results-driven Amazon Advertising agency that helps brands scale profitably through strategic PPC management. We craft data-backed campaigns, optimize keyword targeting, reduce wasted spend, & improve overall sales performance on Amazon. Whether you're launching, scaling, or optimizing, our strategies are built to convert.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative mb-20 mt-30 w-full overflow-hidden bg-primary-dark bg-blue-gradient px-6 py-20 sm:px-12 lg:px-16">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-[500px] w-[500px] rounded-full bg-[#0E3388] opacity-30 blur-[130px]" />

        <div className="absolute bottom-[-100px] right-[-80px] h-[400px] w-[500px] rounded-full bg-[#001D60] opacity-40 blur-[120px]" />

        <div className="absolute inset-0 bg-primary-gradient" />
      </div>

      <div className="relative z-10 mx-auto max-w-[780px]">
        {/* Heading */}
        <h2 className="mb-14 text-center font-display text-[36px] font-bold text-txt-white sm:text-display">
          Questions?
          <br />
          We&apos;re Here To Help.
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.index}
                className="overflow-hidden rounded-xl border transition-all duration-100"
                style={{
                  background: `
      radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.05) 20%,
        rgba(0, 0, 0, 0.35) 100%
      ),
      radial-gradient(
        ellipse at bottom center,
        rgba(0, 29, 96, 0.55) 0%,
        rgba(0, 29, 96, 0.25) 35%,
        transparent 70%
      ),
      rgba(0, 0, 0, 0.30)
    `,
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: `
      inset 0 0 80px rgba(255, 255, 255, 0.40),
      inset 0 -20px 50px rgba(0, 29, 96, 0.45)
    `,
                }}
              >
                {/* Header */}
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-6 px-6 py-6 text-left"
                >
                  {/* Index */}
                  <span className="w-12 shrink-0 text-[20px] font-sans font-semibold text-white">
                    {faq.index}
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-[20px] font-sans font-semibold leading-tight text-white sm:text-[22px]">
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L7 10L12 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 pt-0 text-[18px] font-sans leading-[1.75] text-white/90 sm:text-[20px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
