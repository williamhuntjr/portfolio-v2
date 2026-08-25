import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Let's Connect",
  description:
    "Get in touch about a job opportunity, a project, or just to say hello.",
};

export default function LetsConnect() {
  return (
    <section className="px-6 md:px-16 pt-12 md:pt-22 pb-16 md:pb-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Let&apos;s Connect
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink">
            Let&apos;s talk.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted">
            Whether you&apos;re hiring, have a project in mind, or just want
            to say hello — drop me a message and I&apos;ll get back to you
            soon.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
