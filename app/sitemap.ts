import type { MetadataRoute } from "next";
import { nav, projects, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified,
  }));
  const projectPages = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}/`, site.url).toString(),
    lastModified,
  }));
  return [...pages, ...projectPages];
}
