import {
  caseStudyGroups,
  CaseStudyGroup,
  StatCardItem,
} from "./common/StatCard";

export { caseStudyGroups };

export function CaseStudyRow({ group }: { group: CaseStudyGroup }) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-card-title font-sans font-bold text-txt-white">
        Case Studies
      </h3>
      <p className="mt-1 text-caption font-sans text-white/70">
        Services &nbsp;»&nbsp; {group.category}
      </p>

      <div className="mt-6 w-[90%] mx-auto grid grid-cols-1 gap-5 sm:grid-cols-3">
        {group.stats.map((stat) => (
          <StatCardItem key={stat.index} stat={stat} />
        ))}
      </div>
    </div>
  );
}
