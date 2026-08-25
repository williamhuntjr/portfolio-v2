import type { Metadata } from "next";
import AboutIntro from "@/components/AboutIntro";
import FavoriteSkills from "@/components/FavoriteSkills";

export const metadata: Metadata = {
  title: "About",
  description:
    "From a self-taught Linux server at 13 to full-stack development today — a bit more about William Hunt's background.",
};

export default function About() {
  return (
    <>
      <AboutIntro />
      <FavoriteSkills />
    </>
  );
}
