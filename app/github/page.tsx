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
      <p className="quiet">
        The list is fetched from the GitHub REST API for {site.githubUser}. A copy is saved with the site and in this browser so a rate limit does not blank the page. Categories and featured flags are set in content/site.ts.
      </p>
      <GitHubBrowser />
    </Reveal>
  );
}
