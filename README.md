# Ajay Srivatsan R. — portfolio

Personal engineering site for [ajju2004srivatsan-cloud.github.io](https://ajju2004srivatsan-cloud.github.io/). Static Next.js export. No paid backend.

Biography, roles, education, projects, talks, and skills are edited in [`content/site.ts`](content/site.ts). The resume PDF is not published on this site.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npx serve out
```

`npm run build` refreshes `public/github-cache.json` from the GitHub REST API, then exports the site to `out/`. If GitHub rate-limits the request, the previous cache file is kept.

## Update content

- Profile, experience, projects, research, skills, achievements: `content/site.ts`
- Photographs: add files under `public/photos/` and list them in the `photos` array
- Repository categories and featured flags: `repositoryCatalog` in `content/site.ts`
- LinkedIn and HackerRank: `site.linkedin` and `site.hackerrank`

The contact form opens the visitor’s email app with a message to `ajju2004srivatsan@gmail.com`. It does not store submissions.

## GitHub Pages

The live URL is a user site, so pages are served from the domain root. `NEXT_PUBLIC_BASE_PATH` stays empty. Links, the portrait, and the repository cache all use that prefix, which means a project-site deploy only needs the env var changed to `/<repository>`.

### One-time setup

1. Create a public repository named exactly `ajju2004srivatsan-cloud.github.io` on the account `ajju2004srivatsan-cloud`.
2. Push this project to the `main` branch of that repository.
3. In the repository, open Settings → Pages → Build and deployment, and set Source to **GitHub Actions**.
4. Push to `main`, or run the “Deploy GitHub Pages” workflow by hand.
5. Wait until the environment URL is `https://ajju2004srivatsan-cloud.github.io/`. HTTPS is included with GitHub Pages.

```bash
git remote add origin git@github.com:ajju2004srivatsan-cloud/ajju2004srivatsan-cloud.github.io.git
git push -u origin main
```

The workflow file is `.github/workflows/pages.yml`. It installs dependencies, builds the static export, and deploys the `out` directory with the official Pages actions.

### Check the live site

- `/` home
- `/projects/` and a project path such as `/projects/gnss-denied-drone-navigation/`
- `/github/` still lists repositories if the API rate limit is exhausted
- `/photos/` shows the gallery
- Portrait and fonts load, including on a phone-width window
