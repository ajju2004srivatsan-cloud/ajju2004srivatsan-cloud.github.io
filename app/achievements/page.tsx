import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { achievements, type Achievement } from "@/content/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic record, conference work, and table tennis.",
};

const groups: Achievement["group"][] = ["Academic", "Award", "Certification", "Sport"];

export default function AchievementsPage() {
  return (
    <Reveal>
      <p className="kicker">Achievements</p>
      <h2 className="page-title">Academic record and table tennis.</h2>
      {groups.map((group) => {
        const items = achievements.filter((item) => item.group === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="section">
            <h2>
              {
                {
                  Academic: "Academic",
                  Award: "Awards",
                  Certification: "Certifications",
                  Sport: "Sports",
                }[group]
              }
            </h2>
            {items.map((item) => (
              <article key={item.title} className="entry">
                <p className="kicker">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="quiet">{item.detail}</p>
              </article>
            ))}
          </section>
        );
      })}
    </Reveal>
  );
}
