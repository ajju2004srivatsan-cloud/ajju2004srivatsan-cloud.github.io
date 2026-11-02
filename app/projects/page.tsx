import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects from Ajay Srivatsan R.'s resume and public repositories.",
};

export default function ProjectsPage() {
  const selected = projects.filter((project) => project.featured);
  const code = projects.filter((project) => !project.featured);

  return (
    <Reveal>
      <p className="kicker">Projects</p>
      <h2 className="page-title">Engineering work, then the public code.</h2>
      <p className="quiet">
        The first group is the project record from the resume. The second group is summarized from public repositories.
      </p>
      <section className="section">
        <h2>Resume</h2>
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
