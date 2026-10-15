const ROLES = [
  {
    role: "Senior Software Engineer",
    company: "Trader Interactive",
    location: "Virginia Beach, VA",
    dates: "Mar 2023 – Present",
    summary:
      "Helped lead the Boatline.com to Boatmart.com platform migration, served as Scrum Master, mentored junior developers, and drove the SSR, structured data and Core Web Vitals work behind the site's SEO.",
  },
  {
    role: "Full Stack Developer",
    company: "Emergent Cybernetics",
    location: "Remote",
    dates: "Oct 2022 – Mar 2023",
    summary:
      "Built finance applications in Next.js and React, containerized them with Docker, and automated deployments with Ansible and Jenkins.",
  },
  {
    role: "Full Stack Developer / DevOps Engineer",
    company: "xTuple",
    location: "Norfolk, VA",
    dates: "Feb 2019 – Oct 2022",
    summary:
      "Built a customer portal with a React front end and a Python/Flask API, and managed customer infrastructure on AWS EC2 and Route53 with Ansible and Jenkins automation.",
  },
];

const EARLIER_ROLES = [
  {
    role: "Linux System Administrator",
    company: "TEKsystems",
    dates: "Nov 2018 – Feb 2019",
  },
  {
    role: "Linux System Administrator",
    company: "Five Rivers Services",
    dates: "May 2018 – Nov 2018",
  },
  {
    role: "Tier2C Linux System Administrator Manager",
    company: "InMotion Hosting",
    dates: "Dec 2015 – May 2018",
  },
];

export default function Experience() {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 border-t border-border bg-white">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
            Experience
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            Where I&apos;ve worked.
          </h2>
        </div>

        <ol className="flex flex-col">
          {ROLES.map((item) => (
            <li
              key={item.company}
              className="relative flex flex-col gap-1.5 border-l-2 border-accent-tint-strong pb-10 pl-7"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-white"
              />
              <span className="text-sm font-semibold text-muted-2">
                {item.dates}
              </span>
              <h3 className="font-narrow font-bold text-xl text-ink">
                {item.role}
              </h3>
              <span className="text-[15px] font-semibold text-accent">
                {item.company} &middot; {item.location}
              </span>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">
                {item.summary}
              </p>
            </li>
          ))}

          <li className="relative flex flex-col gap-3 pl-7">
            <span
              aria-hidden="true"
              className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white"
            />
            <h3 className="font-narrow font-bold text-xl text-ink">
              Earlier: Linux systems administration
            </h3>
            <ul className="flex flex-col gap-2">
              {EARLIER_ROLES.map((item) => (
                <li
                  key={item.company}
                  className="flex flex-col gap-0.5 text-[15px] sm:flex-row sm:justify-between sm:gap-6"
                >
                  <span className="text-muted">
                    <span className="font-semibold text-ink">{item.role}</span>{" "}
                    &middot; {item.company}
                  </span>
                  <span className="shrink-0 text-sm text-muted-2">
                    {item.dates}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
