import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { introduction, projects } from "@/content/site";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Reveal>
      <p className="kicker">Now</p>
      <h2 className="page-title">Systems for autonomous aircraft, from firmware to the flight controller.</h2>
      <div className="prose">
        {introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="section">
        <h2>Selected work</h2>
        {featured.map((project) => (
          <article key={project.slug} className="entry">
            <p className="kicker">{project.kicker}</p>
            <h3>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p className="quiet">{project.summary}</p>
            <div className="meta">
              <span>{project.category}</span>
              {project.period ? <span>{project.period}</span> : null}
            </div>
          </article>
        ))}
      </section>
    </Reveal>
  );
}
