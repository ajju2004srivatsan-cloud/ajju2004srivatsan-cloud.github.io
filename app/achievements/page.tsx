import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { achievements, type Achievement } from "@/content/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic results and conference presentations from the resume.",
};

const groups: Achievement["group"][] = ["Academic", "Award", "Certification", "Sport"];

export default function AchievementsPage() {
  return (
    <Reveal>
      <p className="kicker">Achievements</p>
      <h2 className="page-title">Academic record.</h2>
      {groups.map((group) => {
        const items = achievements.filter((item) => item.group === group);
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
            {items.length === 0 ? (
              <p className="empty">None listed. Add entries to the achievements array in content/site.ts.</p>
            ) : (
              items.map((item) => (
                <article key={item.title} className="entry">
                  <p className="kicker">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="quiet">{item.detail}</p>
                </article>
              ))
            )}
          </section>
        );
      })}
    </Reveal>
  );
}
