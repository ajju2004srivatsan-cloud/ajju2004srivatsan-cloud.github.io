import { categories, repositoryCatalog, type ProjectCategory } from "@/content/site";

export type GitHubRepo = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  pushedAt: string;
  fork: boolean;
  archived: boolean;
  topics: string[];
};

export type RepoCache = {
  fetchedAt: string;
  username: string;
  source: "github-api" | "bundled";
  rateLimitRemaining: number | null;
  repos: GitHubRepo[];
};

const KEYWORDS: { category: ProjectCategory; words: string[] }[] = [
  { category: "UAV", words: ["drone", "uav", "ardupilot", "mavlink", "gazebo", "flight"] },
  { category: "Robotics", words: ["robot", "quadruped", "ros", "isaac", "mujoco"] },
  { category: "Embedded Systems", words: ["esp32", "stm32", "firmware", "ecg", "i2s", "oled"] },
  { category: "AI/ML", words: ["ml", "learning", "opencv", "encodec", "neural", "image"] },
  { category: "Research", words: ["paper", "congestion", "sdn", "autograder", "study"] },
  { category: "Web Development", words: ["react", "flutter", "website", "android", "macos", "swift"] },
];

export function categorizeRepo(repo: Pick<GitHubRepo, "name" | "description" | "language" | "topics">): ProjectCategory {
  const manual = repositoryCatalog[repo.name];
  if (manual) return manual.category;
  const haystack = `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""} ${repo.topics.join(" ")}`.toLowerCase();
  for (const rule of KEYWORDS) {
    if (rule.words.some((word) => haystack.includes(word))) return rule.category;
  }
  return "Web Development";
}

export function isFeaturedRepo(name: string) {
  return Boolean(repositoryCatalog[name]?.featured);
}

export function categoryList() {
  return categories;
}

type ApiRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

export function mapApiRepo(repo: ApiRepo): GitHubRepo {
  return {
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    fork: repo.fork,
    archived: repo.archived,
    topics: repo.topics ?? [],
  };
}

export function formatUpdated(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
