import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { projectBySlug, projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projectBySlug(slug);
    if (!project) return { title: "Project" };
    return { title: project.title, description: project.summary };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <Reveal>
      <p className="kicker">{project.kicker}</p>
      <h2 className="page-title">{project.title}</h2>
      <p className="meta" style={{ marginTop: 0 }}>
        <span>{project.category}</span>
        {project.period ? <span>{project.period}</span> : null}
      </p>

      <section className="section">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>
      <section className="section">
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </section>
      <section className="section">
        <h2>Architecture</h2>
        <ol className="pipeline">
          {project.architecture.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span style={{ color: "var(--ink)", fontFamily: "var(--sans)", fontSize: "1rem" }}>{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="section">
        <h2>Technologies</h2>
        <ul className="stack">
          {project.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <h2>Implementation</h2>
        <ul className="facts">
          {project.implementation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {project.media?.length ? (
        <section className="section">
          <h2>Diagrams</h2>
          <div className="media-grid">
            {project.media.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      {project.videos?.length ? (
        <section className="section">
          <h2>Video</h2>
          <ul className="facts">
            {project.videos.map((video) => (
              <li key={video.href}>
                <a href={video.href}>{video.label}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="section">
        <h2>Results</h2>
        <ul className="facts">
          {project.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.github ? (
          <p>
            <a className="text-link" href={project.github}>
              Repository
            </a>
          </p>
        ) : (
          <p className="quiet">No public repository is linked for this project.</p>
        )}
        {project.sourceNote ? <p className="note">{project.sourceNote}</p> : null}
      </section>
      <p>
        <Link href="/projects/">All projects</Link>
      </p>
    </Reveal>
  );
}
