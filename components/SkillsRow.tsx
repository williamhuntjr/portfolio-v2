import Image from "next/image";

const SKILLS = [
  { name: "React", src: "/skills/react.png" },
  { name: "Next.js", src: "/skills/nextjs.png" },
  { name: "Vue.js", src: "/skills/vuejs.png" },
  { name: "Python", src: "/skills/python.png" },
  { name: "Docker", src: "/skills/docker.png" },
  { name: "Kubernetes", src: "/skills/kubernetes.png" },
  { name: "AWS", src: "/skills/aws.png" },
  { name: "WordPress", src: "/skills/wordpress.png" },
  { name: "Material UI", src: "/skills/material-ui.png" },
  { name: "Bootstrap", src: "/skills/bootstrap.png" },
  { name: "HTML / CSS / JS", src: "/skills/html-css-js.png" },
  { name: "jQuery", src: "/skills/jquery.png" },
  { name: "Jenkins", src: "/skills/jenkins.png" },
  { name: "Nginx", src: "/skills/nginx.png" },
  { name: "cPanel", src: "/skills/cpanel.png" },
  { name: "Google Analytics", src: "/skills/google-analytics.png" },
];

export default function SkillsRow() {
  return (
    <section className="flex flex-col gap-4 px-6 md:px-16 py-8 md:py-12 bg-white border-t border-border">
      <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
        Technologies I work with
      </span>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center rounded-full border border-border bg-background px-6 py-5 opacity-90 transition-opacity hover:opacity-100"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={400}
              height={180}
              className="h-11 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
