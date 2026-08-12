import React from "react";
import Image from "next/image";

export interface StatCard {
  index: string;
  value: string;
  label: string;
  icon: string; // path to image, e.g. "/images/icons/ads.png"
}

export interface CaseStudyGroup {
  category: string;
  stats: StatCard[];
}

export const caseStudyGroups: CaseStudyGroup[] = [
  {
    category: "Amazon Ads",
    stats: [
      {
        index: "/01",
        value: "$1M+",
        label: "Ads Spent",
        icon: "/images/png/Ads.png",
      },
      {
        index: "/02",
        value: "$10M+",
        label: "Sales Generated",
        icon: "/images/png/Sales.png",
      },
      {
        index: "/03",
        value: "500+",
        label: "Brands Managed",
        icon: "/images/png/brand_management.png",
      },
    ],
  },
  {
    category: "Amazon Creatives",
    stats: [
      {
        index: "/01",
        value: "500+",
        label: "Listings Created",
        icon: "/images/png/listings.png",
      },
      {
        index: "/02",
        value: "1000+",
        label: "Listings Revamped",
        icon: "/images/png/monitor.png",
      },
      {
        index: "/03",
        value: "50%+",
        label: "Average CTR Improved",
        icon: "/images/png/ctr.png",
      },
    ],
  },
];

export function StatCardItem({ stat }: { stat: StatCard }) {
  return (
    <div className="card-white rounded-xl px-6 py-6">
      <div className="flex items-start justify-between">
        <span className="text-card-title font-sans text-txt-secondary">
          {stat.index}
        </span>
        <div className="relative">
          <div
            className="absolute opacity-100"
            style={{
              width: "143px",
              height: "109px",
              top: "-20px",
              right: "-25px",
            }}
          >
            <Image src={stat.icon} alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-card-title-lg font-sans text-txt-primary sm:text-[32px]">
        {stat.value}
      </p>
      <p className="mt-1.5 text-body1 font-sans text-txt-secondary">
        {stat.label}
      </p>
    </div>
  );
}
