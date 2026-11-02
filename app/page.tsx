import { HomeBoard } from "@/components/HomeBoard";
import { achievements, experience, introduction, photos, projects, site } from "@/content/site";
import { withBase } from "@/lib/paths";

export default function HomePage() {
  return (
    <HomeBoard
      name={site.name}
      role={site.role}
      organization={site.organization}
      location={site.location}
      portrait={withBase("/portrait.png")}
      introduction={introduction}
      projects={projects.map((project) => ({
        slug: project.slug,
        title: project.title,
        summary: project.summary,
        category: project.category,
      }))}
      photos={photos}
      sports={achievements.filter((item) => item.group === "Sport")}
      roles={experience.map((item) => ({
        title: item.title,
        organization: item.organization,
        period: item.period,
        summary: item.summary,
      }))}
    />
  );
}
