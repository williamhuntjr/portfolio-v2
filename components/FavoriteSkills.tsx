const SKILLS = [
  {
    title: "UI/UX Development",
    body: "I am an expert at UI design and UX development. I produce modern, clean applications, while creating an intuitive and easy to browse experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <rect x="2.5" y="4" width="19" height="16" rx="1.5" />
        <path d="M2.5 8.5h19" />
        <path d="M7 4v4.5" />
      </svg>
    ),
  },
  {
    title: "Front-End JavaScript Development",
    body: "I enjoy creating front-end applications using React.js and other popular frameworks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M8.5 6 3 12l5.5 6" />
        <path d="M15.5 6 21 12l-5.5 6" />
        <path d="M13.5 4.5 10.5 19.5" />
      </svg>
    ),
  },
  {
    title: "Systems & DevOps",
    body: "I still enjoy the systems side just as much — configuring Linux servers, writing automation scripts, and building CI/CD pipelines that keep a team shipping without drama.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <rect x="2.5" y="4" width="19" height="16" rx="1.5" />
        <path d="M6 9l3 3-3 3" />
        <path d="M12 15h6" />
      </svg>
    ),
  },
];

export default function FavoriteSkills() {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 border-t border-border bg-white">
      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            The things I enjoy the most.
          </h2>
          <p className="text-[17px] leading-relaxed text-muted w-full">
            I have spent many years learning as much as I can. Sometimes, it
            is easy to get lost in all the different technologies. With that
            said, these are a few roles I really enjoy.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {SKILLS.map((skill) => (
            <div key={skill.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent-tint">
                {skill.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-narrow font-bold text-xl text-ink">
                  {skill.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {skill.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
