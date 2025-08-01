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
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsCounter />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <StoriesSection />
        <section className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-headline text-3xl font-bold">Daily Devotionals</h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Start your day with a word from God. Check out our latest devotionals.</p>
             <Button asChild className="mt-6">
                <Link href="/daily-devotionals">Read Devotionals</Link>
             </Button>
          </div>
        </section>
        <LifeSkillsSection />
        <GetInvolvedSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
