import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { networkingTools, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, tools, and systems used in the work.",
};

export default function SkillsPage() {
  return (
    <Reveal>
      <p className="kicker">Skills</p>
      <h2 className="page-title">Technical skills.</h2>
      {skills.map((group) => (
        <section key={group.id} className="skill-block">
          <h2>{group.title}</h2>
          <ul className="stack">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
      <section className="skill-block">
        <h2>Networking and emulation</h2>
        <ul className="stack">
          {networkingTools.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
