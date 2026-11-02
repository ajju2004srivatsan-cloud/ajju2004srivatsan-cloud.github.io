import { FileText, Github, Mail, Phone } from "lucide-react";
import { education, site } from "@/content/site";
import { withBase } from "@/lib/paths";
import { Nav } from "./Nav";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <header className="rail">
        <a href="#content" className="text-link" style={{ position: "absolute", left: "-999px" }}>
          Skip to content
        </a>
        <img className="portrait" src={withBase("/portrait.png")} alt="Ajay Srivatsan R." width={460} height={460} />
        <div className="identity">
          <p className="kicker" style={{ marginBottom: 0 }}>
            {site.location}
          </p>
          <h1>{site.name}</h1>
          <p className="tagline">{site.identity}</p>
          <p className="role-line">
            {site.role}
            <br />
            {site.organization}
          </p>
        </div>
        <div className="links">
          <a href={site.github}>
            <Github size={15} /> {site.githubUser}
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={15} /> {site.email}
          </a>
          <a href={site.phoneHref}>
            <Phone size={15} /> {site.phone}
          </a>
          <a href={withBase(site.resumePath)} download>
            <FileText size={15} /> Resume PDF
          </a>
        </div>
        <Nav />
        <p className="quiet" style={{ margin: 0 }}>
          {education[0].credential}
          <br />
          <span className="meta" style={{ marginTop: 0 }}>
            {education[0].detail} · {education[0].period}
          </span>
        </p>
      </header>
      <div className="column" id="content">
        {children}
        <footer className="footer">
          {site.name} · Content lives in content/site.ts · Public repositories sync from GitHub.
        </footer>
      </div>
    </div>
  );
}
