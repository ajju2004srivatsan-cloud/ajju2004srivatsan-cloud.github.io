import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { publications, workshops } from "@/content/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Presentations and scheduled publications listed on Ajay Srivatsan R.'s resume.",
};

export default function ResearchPage() {
  return (
    <Reveal>
      <p className="kicker">Research</p>
      <h2 className="page-title">Papers and talks.</h2>
      <p className="quiet">
        Authors are listed as on the resume. A PDF link can be added in content/site.ts when the paper is public.
      </p>
      {publications.map((paper) => (
        <article key={paper.id} className="entry">
          <p className="kicker">
            {paper.year} · {paper.kind}
          </p>
          <h3>{paper.title}</h3>
          <p>
            {paper.authors.join(", ")}. {paper.venue}.
          </p>
          <p className="quiet">{paper.summary}</p>
          {paper.href ? (
            <p>
              <a href={paper.href}>PDF</a>
            </p>
          ) : null}
          {paper.id === "ngndai-2026" ? (
            <p>
              <Link href="/projects/audio-visual-speech-enhancement/">Project notes</Link>
            </p>
          ) : null}
        </article>
      ))}
      <section className="section">
        <h2>Workshops</h2>
        {workshops.map((workshop) => (
          <article key={workshop.title} className="entry">
            <p className="kicker">{workshop.period}</p>
            <h3>{workshop.title}</h3>
            <p className="quiet">
              {workshop.host}. {workshop.summary}
            </p>
          </article>
        ))}
      </section>
    </Reveal>
  );
}
