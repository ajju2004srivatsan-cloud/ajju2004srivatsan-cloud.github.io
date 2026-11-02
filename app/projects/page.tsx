import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects and public repositories by Ajay Srivatsan R.",
};

export default function ProjectsPage() {
  const selected = projects.filter((project) => project.featured);
  const code = projects.filter((project) => !project.featured);

  return (
    <Reveal>
      <p className="kicker">Projects</p>
      <h2 className="page-title">Engineering work, then the public code.</h2>
      <p className="quiet">Selected work, then the public repositories.</p>
      <section className="section">
        <h2>Selected</h2>
        {selected.map((project) => (
          <article key={project.slug} className="entry">
            <p className="kicker">{project.category}</p>
            <h3>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </section>
      <section className="section">
        <h2>Public code</h2>
        {code.map((project) => (
          <article key={project.slug} className="entry">
            <p className="kicker">{project.category}</p>
            <h3>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p className="quiet">{project.summary}</p>
          </article>
        ))}
      </section>
    </Reveal>
  );
}
