import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const username = "ajju2004srivatsan-cloud";
const outDir = path.join(process.cwd(), "public");
const outFile = path.join(outDir, "github-cache.json");

function mapRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    fork: Boolean(repo.fork),
    archived: Boolean(repo.archived),
    topics: repo.topics ?? [],
  };
}

async function keepExisting(reason) {
  try {
    const current = await readFile(outFile, "utf8");
    JSON.parse(current);
    console.warn(`GitHub sync skipped (${reason}). Keeping ${outFile}.`);
  } catch {
    const empty = {
      fetchedAt: new Date().toISOString(),
      username,
      source: "bundled",
      rateLimitRemaining: null,
      repos: [],
      notice: reason,
    };
    await mkdir(outDir, { recursive: true });
    await writeFile(outFile, JSON.stringify(empty, null, 2));
    console.warn(`GitHub sync failed (${reason}). Wrote an empty cache.`);
  }
}

async function main() {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=public`;
  let response;
  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "ajay-portfolio-sync",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  } catch (error) {
    await keepExisting(error instanceof Error ? error.message : "network error");
    return;
  }

  const remaining = response.headers.get("x-ratelimit-remaining");
  if (!response.ok) {
    await keepExisting(`HTTP ${response.status}`);
    return;
  }

  const body = await response.json();
  if (!Array.isArray(body)) {
    await keepExisting("unexpected API payload");
    return;
  }

  const cache = {
    fetchedAt: new Date().toISOString(),
    username,
    source: "github-api",
    rateLimitRemaining: remaining === null ? null : Number(remaining),
    repos: body.filter((repo) => !repo.private).map(mapRepo),
  };

  await mkdir(outDir, { recursive: true });
  await writeFile(outFile, JSON.stringify(cache, null, 2));
  console.log(`Saved ${cache.repos.length} repositories. Rate limit remaining: ${cache.rateLimitRemaining}.`);
}

await main();
