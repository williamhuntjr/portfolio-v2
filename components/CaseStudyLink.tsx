import Link from "next/link";

const CLASS_NAME =
  "text-sm font-bold text-accent hover:underline underline-offset-4";

// A project's `case_study_url` can be a page on this site ("/grubstack") or
// an external article.
export default function CaseStudyLink({ href }: { href: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={CLASS_NAME}>
        Read the case study &rarr;
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={CLASS_NAME}>
      Read the case study &#8599;
    </a>
  );
}
