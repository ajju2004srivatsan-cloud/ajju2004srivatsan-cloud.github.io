"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [sent, setSent] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setSent("Add your name, email, and a message.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent("Your mail app should open with this message addressed to Ajay.");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>Name</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>
      <button className="button solid" type="submit">
        Write email
      </button>
      <p className="quiet" style={{ margin: 0 }}>
        {sent ||
          "This form opens your email application. The site is a static export and does not store messages."}
      </p>
    </form>
  );
}
