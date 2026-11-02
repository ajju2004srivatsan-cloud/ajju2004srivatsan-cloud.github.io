"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/content/site";
import {
  categorizeRepo,
  categoryList,
  formatUpdated,
  isFeaturedRepo,
  mapApiRepo,
  type GitHubRepo,
  type RepoCache,
} from "@/lib/github";
import { withBase } from "@/lib/paths";

const CACHE_KEY = "ajay-portfolio-github-cache-v1";
const TTL_MS = 1000 * 60 * 60 * 6;

type SortKey = "updated" | "stars" | "forks" | "name";

async function readBundled(): Promise<RepoCache | null> {
  const response = await fetch(withBase("/github-cache.json"), { cache: "force-cache" });
  if (!response.ok) return null;
  return (await response.json()) as RepoCache;
}

export function GitHubBrowser() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState("Loading repositories…");
  const [warning, setWarning] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortKey>("updated");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      let bundled: RepoCache | null = null;
      try {
        bundled = await readBundled();
        if (!cancelled && bundled) {
          setRepos(bundled.repos);
          setStatus(`${bundled.repos.length} public repositories · saved ${formatUpdated(bundled.fetchedAt)}`);
          setReady(true);
        }
      } catch {
        bundled = null;
      }

      const stored = window.localStorage.getItem(CACHE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as RepoCache & { savedAt: number };
          if (Date.now() - parsed.savedAt < TTL_MS && parsed.repos.length) {
            if (!cancelled) {
              setRepos(parsed.repos);
              setStatus(`${parsed.repos.length} public repositories · cached in this browser`);
              setReady(true);
            }
            return;
          }
        } catch {
          window.localStorage.removeItem(CACHE_KEY);
        }
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${site.githubUser}/repos?per_page=100&sort=updated&type=public`,
          { headers: { Accept: "application/vnd.github+json" } },
        );
        const remaining = response.headers.get("x-ratelimit-remaining");
        if (response.status === 403 || response.status === 429) {
          if (!cancelled) {
            setWarning(
              bundled?.repos.length
                ? "GitHub rate limit reached. Showing the last saved repository list."
                : "GitHub rate limit reached and no saved list is available.",
            );
            setReady(true);
          }
          return;
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const body = (await response.json()) as Parameters<typeof mapApiRepo>[0][];
        if (!Array.isArray(body)) throw new Error("unexpected payload");
        const next: RepoCache = {
          fetchedAt: new Date().toISOString(),
          username: site.githubUser,
          source: "github-api",
          rateLimitRemaining: remaining === null ? null : Number(remaining),
          repos: body.map(mapApiRepo),
        };
        window.localStorage.setItem(CACHE_KEY, JSON.stringify({ ...next, savedAt: Date.now() }));
        if (!cancelled) {
          setRepos(next.repos);
          setStatus(
            `${next.repos.length} public repositories · updated just now${
              next.rateLimitRemaining !== null ? ` · API calls left ${next.rateLimitRemaining}` : ""
            }`,
          );
          setWarning("");
          setReady(true);
        }
      } catch {
        if (!cancelled) {
          setWarning(
            bundled?.repos.length
              ? "Live GitHub request failed. Showing the saved repository list."
              : "Could not reach the GitHub API.",
          );
          setReady(true);
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = repos.filter((repo) => {
      const matchesCategory = category === "All" || categorizeRepo(repo) === category;
      const matchesQuery =
        !q ||
        repo.name.toLowerCase().includes(q) ||
        (repo.description ?? "").toLowerCase().includes(q) ||
        (repo.language ?? "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    const sorted = [...filtered].sort((a, b) => {
      if (sort === "stars") return b.stars - a.stars || a.name.localeCompare(b.name);
      if (sort === "forks") return b.forks - a.forks || a.name.localeCompare(b.name);
      if (sort === "name") return a.name.localeCompare(b.name);
      return +new Date(b.pushedAt) - +new Date(a.pushedAt);
    });
    return sorted;
  }, [repos, query, category, sort]);

  return (
    <div>
      <div className="toolbar">
        <label className="search">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, description, or language"
            aria-label="Search repositories"
          />
        </label>
        <div className="filters" role="group" aria-label="Filter by category">
          {["All", ...categoryList()].map((item) => (
            <button key={item} type="button" data-on={category === item} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="sorts" role="group" aria-label="Sort repositories">
          {(
            [
              ["updated", "Updated"],
              ["stars", "Stars"],
              ["forks", "Forks"],
              ["name", "Name"],
            ] as const
          ).map(([key, label]) => (
            <button key={key} type="button" data-on={sort === key} onClick={() => setSort(key)}>
              {label}
            </button>
          ))}
        </div>
        <p className={warning ? "status warn" : "status"}>{warning || (ready ? status : "Loading repositories…")}</p>
      </div>

      {!ready ? <p className="quiet">Fetching the public repository list…</p> : null}
      {ready && visible.length === 0 ? <p className="empty">No repositories match this search.</p> : null}

      <div>
        {visible.map((repo) => (
          <a key={repo.id} className="repo" href={repo.htmlUrl}>
            <div>
              <h3>
                {repo.name}
                {isFeaturedRepo(repo.name) ? " · featured" : ""}
                {repo.fork ? " · fork" : ""}
              </h3>
              <p>{repo.description || "No description published."}</p>
              <div className="meta">
                <span>{categorizeRepo(repo)}</span>
                <span>{repo.language || "Language not set"}</span>
                <span>Updated {formatUpdated(repo.pushedAt)}</span>
              </div>
            </div>
            <div className="meta" style={{ marginTop: 0 }}>
              <span>{repo.stars} stars</span>
              <span>{repo.forks} forks</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
