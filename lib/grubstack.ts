// Shared GrubStack content, used by the About spotlight and the case study.

export const GRUBSTACK_APPS = [
  {
    name: "REST API",
    tech: "Python / Flask",
    body: "Powers every app in the suite, with a payment layer that processes orders through Square or Stripe.",
  },
  {
    name: "Dashboard",
    tech: "React",
    body: "Where restaurants configure payment integrations, deploy their apps, and manage their subscription.",
  },
  {
    name: "Ordering app",
    tech: "Next.js",
    body: "Customer-facing online ordering, server-side rendered for speed and search visibility.",
  },
  {
    name: "Terminal app",
    tech: "Next.js",
    body: "Shows cooks incoming orders in the kitchen, refreshed every minute.",
  },
  {
    name: "Kiosk app",
    tech: "Next.js",
    body: "Self-checkout from a tablet or kiosk screen for food trucks and small restaurants.",
  },
];

export const GRUBSTACK_INFRA = [
  "Kubernetes",
  "Helm",
  "Jenkins",
  "Private Docker registry",
  "Flyway",
];
