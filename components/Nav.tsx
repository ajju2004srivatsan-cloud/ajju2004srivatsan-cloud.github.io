"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Sections">
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={14} /> : <Menu size={14} />}
        Menu
      </button>
      <div className="nav" data-open={open ? "true" : "false"}>
        {nav.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace(/\/$/, ""));
          return (
            <Link key={item.href} href={item.href} data-active={active} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
