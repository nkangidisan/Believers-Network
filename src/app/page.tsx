'use client';

import { useState } from 'react';
import Header from "@/components/layout/header";
import HeroSection from "@/components/home/hero-section";
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
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import DownloadModal from "@/components/home/download-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bookFeatures = [
    "Operate in the 'Zoe' life of God",
    "Exercise your divine authority over circumstances.",
    "Walk in the consciousness of the 'Real You'.",
    "Stop living by your limitations. Step into your New Life."
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-gold selection:text-gold-foreground">
      <Header />
      <main className="flex-1">
        {/* Cinematic Video Hero (Mission Focused) */}
        <HeroSection />

        {/* Impact Stats */}
        <StatsCounter />

        {/* The New Life Book Feature Section (World Class Redesign) */}
        <section className="py-24 md:py-40 bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[50%] h-full divine-glow opacity-30 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group perspective-[2000px]"
              >
                <div className="relative aspect-[3/4] w-full max-w-[550px] mx-auto">
                    {/* Divine Aura */}
                    <div className="absolute inset-0 -m-8 bg-gradient-to-r from-gold/30 via-primary/10 to-gold/30 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
                    
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-full h-full shadow-[0_80px_160px_-40px_rgba(0,0,0,0.7)] rounded-3xl overflow-hidden border border-white/5"
                    >
                        <Image
                            src="/bookMOCK.png"
                            alt="The New Life Book"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                    </motion.div>
                    
                    {/* Elegant Shadow */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/60 blur-[50px] rounded-full" />
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-gold">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-sm font-bold uppercase tracking-[0.3em]">Divine Revelation</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter">
                        The <span className="text-gold">New Life</span> <br /> Book
                    </h2>
                </div>

                <div className="space-y-6">
                    {bookFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="mt-1.5 p-1 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <p className="text-xl md:text-2xl text-foreground/70 font-medium group-hover:text-foreground transition-colors leading-snug">
                                {feature}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                    <Button
                        size="lg"
                        className="h-20 px-12 text-xl font-bold bg-gold hover:bg-gold/90 text-gold-foreground rounded-full shadow-[0_30px_60px_-15px_rgba(var(--gold),0.4)] hover:scale-105 active:scale-95 transition-all group"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                        Download with Code
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="h-20 px-12 text-xl font-bold glass rounded-full border-foreground/10 hover:bg-foreground/5 hover:scale-105 active:scale-95 transition-all"
                    >
                        <Link href="/donate">
                            <CreditCard className="mr-3 h-6 w-6" />
                            Buy Now – $20
                        </Link>
                    </Button>
                </div>
              </motion.div>
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
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
