import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { Capabilities } from "@/components/sections/Capabilities";
import { DesignApproach } from "@/components/sections/DesignApproach";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <WorkGallery />
      <Capabilities />
      <DesignApproach />
      <ExperienceTimeline highlightFirst />
      <ContactCTA />
    </>
  );
}
