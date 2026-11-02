"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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
        <div>
          <p className="kicker">Profile</p>
          <h1 className="profile-name">{name}</h1>
          <p className="quiet">
            {role}, {organization}
            <br />
            {location}
          </p>
          <p className="hint">Click a word. The shelf follows.</p>
          <div className="words" role="group" aria-label="Focus">
            {lenses.map((item) => (
              <button key={item.id} type="button" aria-pressed={item.id === lensId} onClick={() => chooseLens(item)}>
                {item.word}
              </button>
            ))}
          </div>
          <p className="lens-line">{lens.line}</p>
          {introduction.map((paragraph) => (
            <p key={paragraph} className="quiet">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="stage-side">
          <img className="portrait" src={portrait} alt="" width={460} height={460} />
          <DotField />
          <p className="kicker">Move across the field</p>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Work</h2>
          <label className="search">
            <span className="kicker">Find</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="UAV, ECG, Aakara" />
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

function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const surface = canvas;
    const pen = ctx;
    let pointer = { x: -120, y: -120 };
    let frame = 0;

    function resize() {
      const rect = surface.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.floor(rect.width * dpr);
      surface.height = Math.floor(rect.height * dpr);
      pen.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const rect = surface.getBoundingClientRect();
      const color = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#171717";
      pen.clearRect(0, 0, rect.width, rect.height);
      pen.fillStyle = color;
      const gap = 16;
      for (let y = 12; y < rect.height - 8; y += gap) {
        for (let x = 12; x < rect.width - 8; x += gap) {
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          const near = distance < 78;
          pen.globalAlpha = near ? 0.95 : 0.28;
          pen.beginPath();
          pen.arc(x, y, near ? 2.3 - (distance / 78) * 1.2 : 1, 0, Math.PI * 2);
          pen.fill();
        }
      }
      pen.globalAlpha = 1;
    }

    function onMove(event: PointerEvent) {
      const rect = surface.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    function onLeave() {
      pointer = { x: -120, y: -120 };
    }

    resize();
    draw();
    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(surface);
    surface.addEventListener("pointermove", onMove);
    surface.addEventListener("pointerleave", onLeave);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function loop() {
      draw();
      frame = requestAnimationFrame(loop);
    }
    if (!reduce) frame = requestAnimationFrame(loop);
    else {
      surface.addEventListener("pointermove", draw);
      surface.addEventListener("pointerleave", draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      surface.removeEventListener("pointermove", onMove);
      surface.removeEventListener("pointerleave", onLeave);
      surface.removeEventListener("pointermove", draw);
      surface.removeEventListener("pointerleave", draw);
    };
  }, []);

  return <canvas ref={ref} className="field" aria-hidden="true" />;
}
