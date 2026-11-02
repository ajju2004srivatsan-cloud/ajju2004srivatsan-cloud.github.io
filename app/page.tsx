import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { achievements, introduction, photography, projects } from "@/content/site";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const sport = achievements.filter((item) => item.group === "Sport");

  return (
    <Reveal>
      <p className="spaced">AJAY SRIVATSAN R.</p>
      <p className="mark">{introduction[0]}</p>
      <p>{introduction[1]}</p>
      <p className="stars" aria-hidden="true">
        {"*".repeat(72)}
      </p>
      <section>
        <p className="kicker">Selected work</p>
        {featured.map((project) => (
          <article key={project.slug} className="entry">
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
      <p className="slashes" aria-hidden="true">
        {"/".repeat(72)}
      </p>
      <section>
        <p className="kicker">Table tennis</p>
        <ul className="facts">
          {sport.map((item) => (
            <li key={item.title}>{item.detail}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <p className="kicker">Photographs</p>
        <p>
          {photography.line} <Link href="/photos/">Gallery</Link>
        </p>
      </section>
    </Reveal>
  );
}
