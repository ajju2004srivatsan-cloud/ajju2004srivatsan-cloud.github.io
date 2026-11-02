import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${site.name} at ${site.email}.`,
};

export default function ContactPage() {
  return (
    <Reveal>
      <p className="kicker">Contact</p>
      <h2 className="page-title">Write directly.</h2>
      <div className="links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.phoneHref}>{site.phone}</a>
        <a href={site.github}>GitHub</a>
        <a href={site.linkedin}>LinkedIn</a>
        <a href={site.hackerrank}>HackerRank</a>
      </div>
      <ContactForm />
    </Reveal>
  );
}
