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
            <div className="max-w-2xl mx-auto">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <svg className="h-10 w-10 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M16.63 1.341a2.003 2.003 0 0 0-2.43.513l-1.63 2.45a1.002 1.002 0 0 0 .22 1.378l.49.327c.21.14.46.21.71.21a2.41 2.41 0 0 1 2.04 1.25c.3.56.46 1.18.46 1.8V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.03a1.5 1.5 0 0 1-1.5-1.5v-3.48a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5v-7.15c0-.62.16-1.24.46-1.8a2.41 2.41 0 0 1 2.04-1.25c.25 0 .5-.07.71-.21l.49-.327a1.002 1.002 0 0 0 .22-1.378l-1.63-2.45a2.003 2.003 0 0 0-2.43-.514C2.38 2.26 1.18 3.998 1.18 6.05v9.45A4.5 4.5 0 0 0 5.68 24h12.64A4.5 4.5 0 0 0 22.82 15.5V6.05c0-2.05-1.2-3.79-3.19-4.71Z"/></svg>
              </div>
              <h2 className="font-headline text-3xl font-bold">
                Join Our WhatsApp Channel
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Get daily devotionals, ministry updates, and words of encouragement delivered directly to your phone.
              </p>
              <Button asChild className="mt-6" size="lg">
                <Link
                  href="https://whatsapp.com/channel/0029Vb2zSP8JkK7HPOVJJQ1r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Channel
                </Link>
              </Button>
            </div>
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
