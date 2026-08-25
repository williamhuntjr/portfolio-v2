import nodemailer from "nodemailer";

export interface ContactMessage {
  name: string;
  email: string;
  reason: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail({
  name,
  email,
  reason,
  message,
}: ContactMessage) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false, // STARTTLS on port 587
    requireTLS: true,
    authMethod: "LOGIN",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const to = process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER;

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to,
    replyTo: email,
    subject: `New message from ${name} — ${reason}`,
    text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });
}
