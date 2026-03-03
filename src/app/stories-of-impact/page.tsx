
'use client';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StoriesSection from "@/components/home/stories-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function StoriesOfImpact() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-gold selection:text-gold-foreground">
      <Header />
      <main className="flex-1 overflow-hidden">
        {/* Cinematic Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full divine-glow opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.05)_0%,transparent_70%)]" />
          </div>

          <div className="container relative z-10 px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold/20 text-gold font-bold text-xs uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>Impact & Revival</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance">
                Stories of <span className="text-gold">Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-medium leading-relaxed">
                Celebrating the transformative power of God in schools, communities, and lives across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Stories Grid */}
        <StoriesSection />

        {/* Share Your Story Callout */}
        <section className="relative py-32 overflow-hidden bg-muted/30">
            <div className="container mx-auto px-4 text-center">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-12 md:p-20 glass border-gold/20 rounded-[3rem] relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <PlusCircle className="w-24 h-24 text-gold" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Share Your Story</h2>
                    <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                        Has God touched your life through this ministry? Your testimony is a powerful weapon of revival. Join us in declaring His goodness.
                    </p>
                    <Button asChild size="lg" className="h-16 px-10 bg-gold text-gold-foreground rounded-full font-bold shadow-2xl shadow-gold/20 hover:scale-105 transition-transform group">
                        <Link href="/stay-connected?subject=My+Testimony">
                            Submit Your Testimony
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                 </motion.div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
