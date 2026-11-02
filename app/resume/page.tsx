import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { education, experience, site } from "@/content/site";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Ajay Srivatsan R.'s resume PDF.",
};

export default function ResumePage() {
  const href = withBase(site.resumePath);
  return (
    <Reveal>
      <p className="kicker">Resume</p>
      <h2 className="page-title">The PDF, unchanged.</h2>
      <p>
        The file is the resume supplied for this site. The sections on this website follow that document: education, OEG Defence & Aerospace, Apsis Solutions, the five project write-ups, SoCTA, NGNDAI, and the two workshops.
      </p>
      <p>
        <a className="button solid" href={href} download>
          Download PDF
        </a>
      </p>
      <section className="section">
        <h2>At a glance</h2>
        {experience.map((job) => (
          <p key={job.organization}>
            <strong>{job.title}</strong>, {job.organization}
            <br />
            <span className="quiet">{job.period}</span>
          </p>
        ))}
        {education.map((school) => (
          <p key={`${school.credential}-${school.period}`}>
            {school.credential}, {school.detail}
            <br />
            <span className="quiet">
              {school.school} · {school.period}
            </span>
          </p>
        ))}
      </section>
      <object data={href} type="application/pdf" width="100%" height="720" aria-label="Resume PDF">
        <p>
          <a href={href}>Open the resume PDF</a>
        </p>
      </object>
    </Reveal>
  );
}
