import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Capabilities } from "@/components/sections/Capabilities";
import { DesignApproach } from "@/components/sections/DesignApproach";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <SelectedProjects />
      <Capabilities />
      <DesignApproach />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}
