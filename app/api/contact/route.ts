import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import { CONTACT_REASONS } from "@/lib/constants";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, reason, message, company } = body as Record<
    string,
    unknown
  >;

  // Honeypot: bots tend to fill every field, including ones hidden from real users.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof reason !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!CONTACT_REASONS.includes(reason)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      reason,
      message: message.trim(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }
}
