# Design TODO

## On every page
- [x] Expand the footer: name, © year, nav links, contact link
- [x] Navy closing CTA band ("Have a role or project in mind?") on Home, About and My Projects
- [x] Hover states on buttons (use `--accent-hover`) and visible `focus-visible` rings

## Home
- [x] Social proof: a testimonial or a stat row (years, projects shipped, GrubStack in production) between the hero and Skills
- [x] Featured project: add "Visit project" and "Source on GitHub" links
- [x] Skills row: group by Front-end / Back-end / DevOps (or trim), show visible labels
- [x] Differentiate "My Approach" from "What can you expect?" (e.g. a horizontal 4-step process: Build → Automate → Test → Deploy)

## About
- [x] Experience timeline (role, company, dates, one line each)
- [x] Break up the long paragraphs with a photo, pull quote or milestones
- [x] GrubStack spotlight card with screenshot and stack. Five apps: Flask API, React dashboard, Next.js ordering app, terminal app (cooks see incoming orders, refreshed every minute), kiosk app (self-checkout on a tablet/kiosk for food trucks and small restaurants)
- [x] "The things I enjoy the most": 3-column grid on desktop
- [x] h1 should scale like other pages (`text-4xl md:text-5xl`)

## My Projects
- [x] Intro sentence under the h1
- [x] Cards: show role, year and a source link; restyle Coded/Designed/Converted Wireframes as a role line
- [x] Result count ("Showing 6 of 14 projects")
- [x] Scroll to top of the list on page change
- [x] Filter chips: single horizontally scrolling row on mobile
- [x] ~~Per-project case study pages~~ (dropped: most projects are simple WordPress/Next.js sites)

## Let's Connect
- [x] Desktop side column: email, LinkedIn, time zone/location, response time, availability, resume download
- [x] Success state: add a "Meanwhile, check out my projects →" link

## 404
- [x] Optional: small illustration

## Round 2
- [ ] Replace sample testimonial quotes with real ones from Dylan Lewis and Hasseb Obeidy
- [x] Title is "Senior Software Engineer" everywhere (site title, description, manifest, OG image, hero)
- [x] My Approach: fifth "Optimize" step for SEO / Core Web Vitals
- [x] Skills row: add TypeScript and Nuxt; drop jQuery and cPanel
- [x] Archived filter for discontinued projects (hidden from the default list)
- [x] JSON-LD `Person` structured data
- [x] Optimise project thumbnails with next/image (allow the Strapi domain in next.config.ts)
- [ ] Analytics (Plausible, Umami or GA4)
- [ ] Optional: 2–3 write-ups (e.g. GrubStack on Kubernetes, SEO through a platform migration)
- [ ] Optional: dark mode
