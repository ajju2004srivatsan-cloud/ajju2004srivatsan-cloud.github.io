import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { networkingTools, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills grouped from Ajay Srivatsan R.'s resume.",
};

export default function SkillsPage() {
  return (
    <Reveal>
      <p className="kicker">Skills</p>
      <h2 className="page-title">Technical skills.</h2>
      <p className="quiet">
        Languages and tools come from the resume’s skills section, the two roles, and the project descriptions. Networking tools from the resume are listed after the main groups.
      </p>
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
