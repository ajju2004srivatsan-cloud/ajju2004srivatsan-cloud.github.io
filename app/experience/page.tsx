import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { education, experience } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles and education.",
};

export default function ExperiencePage() {
  return (
    <Reveal>
      <p className="kicker">Experience</p>
      <h2 className="page-title">Roles and education.</h2>
      {experience.map((job) => (
        <article key={job.organization} className="entry">
          <p className="kicker">{job.period}</p>
          <h3>{job.title}</h3>
          <p>{job.organization}</p>
          <p className="quiet">{job.summary}</p>
          <ul className="facts">
            {job.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="stack">
            {job.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
      <section className="section">
        <h2>Education</h2>
        {education.map((school) => (
          <article key={`${school.credential}-${school.period}`} className="entry">
            <p className="kicker">{school.period}</p>
            <h3>{school.credential}</h3>
            <p>
              {school.school}
              <br />
              <span className="quiet">{school.detail}</span>
            </p>
          </article>
        ))}
      </section>
    </Reveal>
  );
}
