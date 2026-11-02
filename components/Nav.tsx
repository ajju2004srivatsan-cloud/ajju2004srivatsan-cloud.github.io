"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <div className="top-actions">
      <button className="theme-toggle" type="button" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <button className="nav-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        Menu
      </button>
      <nav className="nav" data-open={open ? "true" : "false"} aria-label="Sections">
        {nav.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace(/\/$/, ""));
          return (
            <Link key={item.href} href={item.href} data-active={active} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
