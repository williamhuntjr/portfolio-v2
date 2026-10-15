import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import SkillsRow from "@/components/SkillsRow";
import MyApproach from "@/components/MyApproach";
import FeaturedProject from "@/components/FeaturedProject";
import Expectations from "@/components/Expectations";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsRow />
      <SkillsRow />
      <MyApproach />
      <FeaturedProject />
      <Testimonials />
      <Expectations />
      <CtaBand />
    </>
  );
}
