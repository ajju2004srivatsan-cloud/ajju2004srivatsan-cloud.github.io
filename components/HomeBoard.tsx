"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { PhotoGallery } from "@/components/PhotoGallery";
import type { Photo, ProjectCategory } from "@/content/site";

type Card = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory | "Studio";
  href: string;
  external?: boolean;
};

type Lens = {
  id: string;
  word: string;
  category: "All" | ProjectCategory;
  line: string;
};

const lenses: Lens[] = [
  {
    id: "profile",
    word: "Profile",
    category: "All",
    line: "Electronics and communication engineer. Embedded software and communication systems for UAV, aerospace, and defence platforms.",
  },
  {
    id: "uav",
    word: "Autonomous",
    category: "UAV",
    line: "GNSS-denied navigation with visual-inertial odometry, optical flow, IMU, and satellite-image localization, closed over MAVLink on Jetson. The clustered command system is hardwired to the flight controllers.",
  },
  {
    id: "robotics",
    word: "Robotics",
    category: "Robotics",
    line: "Software-in-the-loop tests in Gazebo and NVIDIA Isaac Sim. ArcHound packages the upstream ElectroPup quadruped. The design credit stays with the original author.",
  },
  {
    id: "embedded",
    word: "Embedded",
    category: "Embedded Systems",
    line: "At OEG: ArduPilot, MAVLink, RF, networking, and embedded Linux. At Apsis: firmware and hardware prototyping. Public boards include an ESP32 OLED spectrum and an AD8232 ECG monitor.",
  },
  {
    id: "research",
    word: "Research",
    category: "Research",
    line: "SoCTA 2025 chapter on trapdoor sampling, published in Springer LNNS, vol. 1980. Lightweight audio-visual speech enhancement is accepted at NGNDAI-2026.",
  },
  {
    id: "ai",
    word: "AI",
    category: "AI/ML",
    line: "Public AI work includes medical image denoising and an EnCodec relay. The speech pipeline pairs a CRNN for audio with a ResNet for lip features.",
  },
  {
    id: "web",
    word: "Web",
    category: "Web Development",
    line: "Aakara is the visual design studio for greetings, invitations, and posts. A real-estate ERP runs on React and PostgreSQL.",
  },
  {
    id: "photos",
    word: "Photography",
    category: "All",
    line: "Wildlife photographs. Click a frame in the strip.",
  },
];

const filters = ["All", "UAV", "Robotics", "Embedded Systems", "Research", "AI/ML", "Web Development"] as const;

export function HomeBoard({
  name,
  role,
  organization,
  location,
  portrait,
  introduction,
  projects,
  photos,
  sports,
  roles,
}: {
  name: string;
  role: string;
  organization: string;
  location: string;
  portrait: string;
  introduction: readonly string[];
  projects: { slug: string; title: string; summary: string; category: ProjectCategory }[];
  photos: Photo[];
  sports: { title: string; detail: string }[];
  roles: { title: string; organization: string; period: string; summary: string }[];
}) {
  const [lensId, setLensId] = useState("profile");
  const [category, setCategory] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const photosRef = useRef<HTMLElement>(null);
  const lens = lenses.find((item) => item.id === lensId) ?? lenses[0];

  const cards = useMemo<Card[]>(
    () => [
      ...projects.map((project) => ({
        id: project.slug,
        title: project.title,
        summary: project.summary,
        category: project.category,
        href: `/projects/${project.slug}/`,
      })),
      {
        id: "aakara",
        title: "Aakara",
        summary:
          "Visual design studio for festival greetings, invitations, and posts. Motifs and nine Indian scripts. Files stay in the browser, or in Google Drive when it is connected.",
        category: "Web Development" as const,
        href: "https://ajju2004srivatsan-cloud.github.io/aakara/",
        external: true,
      },
    ],
    [projects],
  );

  const visible = cards.filter((card) => {
    const needle = query.trim().toLowerCase();
    if (needle.length > 0) {
      return `${card.title} ${card.summary} ${card.category}`.toLowerCase().includes(needle);
    }
    return category === "All" || card.category === category;
  });
  const open = cards.find((card) => card.id === openId && visible.some((card) => card.id === openId)) ?? null;

  function chooseLens(next: Lens) {
    setLensId(next.id);
    if (next.id === "photos") {
      setCategory("All");
      photosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setCategory(next.category === "All" ? "All" : next.category);
  }

  return (
    <div className="home">
      <section className="stage">
        <img className="portrait" src={portrait} alt="" width={460} height={460} />
        <div className="stage-copy">
          <p className="kicker">Profile</p>
          <p className="quiet">
            {role}
            <br />
            {organization}
            <br />
            {location}
          </p>
        </div>
      </section>
      <h1 className="profile-name">{name}</h1>
      <div className="words" role="group" aria-label="Focus">
        {lenses.map((item) => (
          <button key={item.id} type="button" aria-pressed={item.id === lensId} onClick={() => chooseLens(item)}>
            {item.word}
          </button>
        ))}
      </div>
      <p className="lens-line">{lens.line}</p>
      {introduction.map((paragraph) => (
        <p key={paragraph} className="quiet lead">
          {paragraph}
        </p>
      ))}

      <section className="section">
        <div className="section-head">
          <h2>Work</h2>
          <label className="search">
            <input aria-label="Find" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a project" />
          </label>
        </div>
        <div className="filters" role="group" aria-label="Work areas">
          {filters.map((item) => (
            <button key={item} type="button" data-on={category === item} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="shelf">
          {visible.map((card) => (
            <article key={card.id} data-on={open?.id === card.id}>
              <p className="kicker">{card.category}</p>
              <h3>
                <button type="button" aria-expanded={open?.id === card.id} onClick={() => setOpenId(open?.id === card.id ? null : card.id)}>
                  {card.title}
                </button>
              </h3>
            </article>
          ))}
        </div>
        {visible.length === 0 ? <p className="empty">Nothing matches that.</p> : null}
        {open ? (
          <div className="detail">
            <p>{open.summary}</p>
            {open.external ? (
              <a href={open.href}>Open Aakara</a>
            ) : (
              <Link href={open.href}>Open project</Link>
            )}
          </div>
        ) : null}
      </section>

      <section className="section columns">
        <div>
          <h2>Roles</h2>
          {roles.map((item) => (
            <article key={item.organization} className="entry">
              <p className="kicker">{item.period}</p>
              <h3>{item.title}</h3>
              <p>
                {item.organization}. {item.summary}
              </p>
            </article>
          ))}
        </div>
        <div>
          <h2>Table tennis</h2>
          {sports.map((item) => (
            <article key={item.title} className="entry">
              <h3>{item.title}</h3>
              <p className="quiet">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="photos" ref={photosRef}>
        <h2>Photographs</h2>
        <PhotoGallery photos={photos} layout="film" />
      </section>
    </div>
  );
}
