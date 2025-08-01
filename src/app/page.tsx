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

function DevotionalSection() {
    return (
        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl font-bold">Recent Devotionals</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">This section will display a feed of recent devotionals added from the admin dashboard.</p>
                </div>
                 {/* Placeholder for devotional feed */}
                <div className="text-center text-foreground/50 mb-8">
                    <p>Devotional feed coming soon.</p>
                </div>
                 <div className="text-center">
                    <Button asChild size="lg">
                        <Link href="/daily-devotionals">
                            See All Devotionals
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}


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
        <DevotionalSection />
        <LifeSkillsSection />
        <GetInvolvedSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
