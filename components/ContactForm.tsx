"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_REASONS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM = {
  name: "",
  email: "",
  reason: CONTACT_REASONS[0],
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-border bg-white p-10 text-center">
        <h2 className="font-heading font-extrabold text-2xl text-ink">
          Message sent.
        </h2>
        <p className="mt-2 text-[15px] text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-card border border-border bg-white p-8 md:p-10"
    >
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="rounded-btn border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          maxLength={200}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="rounded-btn border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="reason" className="text-sm font-semibold text-ink">
          What brings you here?
        </label>
        <select
          id="reason"
          value={form.reason}
          onChange={(e) => update("reason", e.target.value)}
          className="cursor-pointer rounded-btn border border-border bg-white px-4 py-3 text-[15px] text-ink outline-none focus:border-accent"
        >
          {CONTACT_REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          maxLength={5000}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="resize-none rounded-btn border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 flex h-12 w-fit cursor-pointer items-center justify-center rounded-btn bg-accent px-8 text-[15px] font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
