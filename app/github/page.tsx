import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { GitHubBrowser } from "@/components/GitHubBrowser";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "GitHub",
  description: `Public repositories from ${site.githubUser}, with search, category filters, and sorting.`,
};

export default function GitHubPage() {
  return (
    <Reveal>
      <p className="kicker">GitHub</p>
      <h2 className="page-title">Every public repository, kept in sync.</h2>
      <p className="quiet">Public repositories from {site.githubUser}.</p>
      <GitHubBrowser />
    </Reveal>
  );
}
