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
    <div className="stat-card">
      {/* Index */}
      <span className="stat-card-index">{stat.index}</span>

      {/* Icon */}
      <Image
        src={stat.icon}
        alt=""
        width={80}
        height={70}
        className="stat-card-icon"
      />

      {/* Value */}
      <p className="stat-card-value">{stat.value}</p>

      {/* Label */}
      <p className="stat-card-label">{stat.label}</p>
    </div>
  );
}
