
import Header from "@/components/layout/header";
import BookHero from "@/components/home/book-hero";
import StatsCounter from "@/components/home/stats-counter";
import WhatWeDoSection from "@/components/home/what-we-do-section";
import SalvationSection from "@/components/home/salvation-section";
import StoriesSection from "@/components/home/stories-section";
import GetInvolvedSection from "@/components/home/get-involved-section";
import Footer from "@/components/layout/footer";
import LifeSkillsSection from "@/components/home/life-skills-section";
import DevotionalSection from "@/components/home/devotional-section";
import DonateSection from "@/components/home/donate-section";
import PartnerSection from "@/components/home/partner-section";
import { Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-gold selection:text-gold-foreground">
      <Header />
      <main className="flex-1">
        {/* Cinematic New Book Hero */}
        <BookHero />

        {/* Impact Stats */}
        <StatsCounter />

        {/* The New Life Book: Look Inside */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full divine-glow opacity-30 pointer-events-none" />
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                  A Transformative Journey <br /> Inside <span className="text-gold">Every Page</span>
                </h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                  The New Life Book is more than a reading experience; it's a divine encounter designed to ignite a fire for Jesus in your heart.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src="/book cover infront.jpg"
                    alt="New Life Book Front Cover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold text-xl">Front Cover</span>
                  </div>
                </div>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src="/book cover back.jpg"
                    alt="New Life Book Back Cover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold text-xl">Back Cover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing High-Quality Sections */}
        <SalvationSection />
        <WhatWeDoSection />
        <StoriesSection />
        <DevotionalSection />
        <LifeSkillsSection />
        <GetInvolvedSection />
        <DonateSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
