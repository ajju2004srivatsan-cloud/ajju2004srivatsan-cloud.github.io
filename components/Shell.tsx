import { site } from "@/content/site";
import { withBase } from "@/lib/paths";
import { Nav } from "./Nav";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#content" className="text-link" style={{ position: "absolute", left: "-999px" }}>
        Skip to content
      </a>
      <header className="topbar">
        <a className="brand" href={withBase("/")}>
          {site.name}
        </a>
        <Nav />
      </header>
      <div className="page" id="content">
        {children}
        <footer className="footer">
          {site.name}
          {" / "}
          <a href={site.github}>GitHub</a>
          {" / "}
          <a href={site.linkedin}>LinkedIn</a>
          {" / "}
          <a href={site.hackerrank}>HackerRank</a>
          {" / "}
          <a href={`mailto:${site.email}`}>Email</a>
        </footer>
      </div>
    </>
  );
}
