import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SITE_URL = "https://williamhuntjr.com";
const SITE_TITLE = "William Hunt | Senior Software Engineer";
const SITE_DESCRIPTION =
  "Senior software engineer specializing in React and Nuxt front-ends, Python APIs, technical SEO, and containerized deployments with Docker and Kubernetes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | William Hunt",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "William Hunt",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Structured data so search engines can identify who the site is about.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "William Hunt",
      alternateName: "William John Hunt Jr.",
      jobTitle: "Senior Software Engineer",
      url: SITE_URL,
      image: `${SITE_URL}/images/william-hunt.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/williamhuntjr",
        "https://github.com/williamhuntjr",
      ],
      worksFor: { "@type": "Organization", name: "Trader Interactive" },
      address: {
        "@type": "PostalAddress",
        addressRegion: "NC",
        addressCountry: "US",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Nuxt",
        "Python",
        "Docker",
        "Kubernetes",
        "AWS",
        "Technical SEO",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "William Hunt",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${openSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
