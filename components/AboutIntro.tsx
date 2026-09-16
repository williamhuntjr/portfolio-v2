export default function AboutIntro() {
  return (
    <section className="px-6 md:px-16 pt-12 md:pt-22 pb-10 md:pb-16">
      <div className="container-page flex flex-col gap-5">
        <span className="text-[13px] font-bold tracking-wide text-muted-2 uppercase">
          Things about me
        </span>

        <h1 className="font-heading font-extrabold text-5xl leading-[1.1] text-ink">
          I am versatile.
        </h1>
        <h2 className="font-narrow font-bold text-2xl text-accent">
          From back-end to front-end, to operations.
        </h2>

        <div className="flex flex-col gap-5 text-[17px] leading-relaxed text-muted w-full mt-2">
          <p>
            My interest in Linux is initially what sparked my interest in
            development. I taught myself how to set up a Linux server when I
            was just 13 years old. Within a year, I was able to navigate the
            entire operating system with no problems. I spent many hours
            learning, compiling software, and configuring system services.
            Eventually, I needed to write my own scripts for automation and I
            learned BASH. Since then, I have learned Python for more advanced
            system scripts. I have even built my own Linux distributions
            using the Linux From Scratch book.
          </p>
          <p>
            While I continued to learn operating systems, I wrote some HTML
            and read my first programming book, HTML4 for Dummies. Just a few
            months after that, I developed my first website using PHP and
            MySQL. Now, I&apos;m an expert in React.js and modern JavaScript
            development. Throughout my career I have written small
            applications, as well as contributed to enterprise applications.
            In my free time, I actively develop{" "}
            <a
              href="https://grubstack.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent"
            >
              GrubStack
            </a>
            , a software suite I built for food-ordering payments and
            checkout — a Python/Flask API, a dashboard in vanilla React, and
            a Next.js ordering app.
          </p>
        </div>

        <a
          href="/William_Hunt_Resume-Latest.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-fit items-center justify-center rounded-btn bg-accent px-6.5 text-[15px] font-bold text-white mt-2"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}
