import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { publications, workshops } from "@/content/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "SoCTA 2025 conference paper and the NGNDAI-2026 accepted presentation by Ajay Srivatsan R.",
};

export default function ResearchPage() {
  return (
    <Reveal>
      <p className="kicker">Research</p>
      <h2 className="page-title">Papers and talks.</h2>
      <p className="quiet">
        The SoCTA paper is cited by its Springer DOI. NGNDAI is linked as the conference, because that work is accepted and not yet a published chapter.
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
          <p className="note">{paper.citation}</p>
          <p className="meta">
            {paper.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            {paper.id === "ngndai-2026" ? (
              <Link href="/projects/audio-visual-speech-enhancement/">Project notes</Link>
            ) : null}
          </p>
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
