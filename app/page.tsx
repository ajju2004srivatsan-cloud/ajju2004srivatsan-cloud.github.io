import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { achievements, introduction, projects, site } from "@/content/site";
import { withBase } from "@/lib/paths";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const sport = achievements.filter((item) => item.group === "Sport");

  return (
    <Reveal>
      <div className="profile-head">
        <img className="portrait" src={withBase("/portrait.png")} alt="" width={460} height={460} />
        <div>
          <p className="kicker">Profile</p>
          <p className="quiet">
            {site.role}
            <br />
            {site.location}
          </p>
        </div>
      </div>
      <h1 className="profile-name">{site.name}</h1>
      <p className="kicker">{site.identity}</p>
      <hr className="hairline" />
      <section>
        <h2>About</h2>
        {introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section className="section">
        <h2>Interests</h2>
        <ul className="interests">
          <li>
            <Link href="/projects/">Robotics</Link>
          </li>
          <li>
            <Link href="/projects/">Autonomous systems</Link>
          </li>
          <li>
            <Link href="/photos/">Photography</Link>
          </li>
          <li>
            <Link href="/skills/">Embedded</Link>
          </li>
        </ul>
      </section>
      <section className="section">
        <h2>Selected work</h2>
        {featured.map((project) => (
          <article key={project.slug} className="entry">
            <h3>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
            </h3>
            <p className="quiet">{project.summary}</p>
          </article>
        ))}
      </section>
      <section className="section">
        <h2>Table tennis</h2>
        <ul className="facts">
          {sport.map((item) => (
            <li key={item.title}>{item.detail}</li>
          ))}
        </ul>
      </section>
      <div className="split">
        <Link href="/photos/">
          <span className="kicker">Photographs</span>
          <strong>Gallery</strong>
        </Link>
        <Link href="/contact/">
          <span className="kicker">Contact</span>
          <strong>Write</strong>
        </Link>
      </div>
    </Reveal>
  );
}
