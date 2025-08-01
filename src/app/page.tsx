import Header from "@/components/layout/header";
import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import WhatWeDoSection from "@/components/home/what-we-do-section";
import WhoWeAreSection from "@/components/home/who-we-are-section";
import StoriesSection from "@/components/home/stories-section";
import GetInvolvedSection from "@/components/home/get-involved-section";
import DonateSection from "@/components/home/donate-section";
import Footer from "@/components/layout/footer";
import LifeSkillsSection from "@/components/home/life-skills-section";
import DevotionalModal from "@/components/home/devotional-modal";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <DevotionalModal />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsCounter />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <StoriesSection />
        <LifeSkillsSection />
        <GetInvolvedSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
