'use client';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, School, Zap, Heart, Sparkles } from "lucide-react";
import { useRef } from "react";

const marqueeItemsTop = [
  { title: "Street Evangelism", description: "Meeting souls where they are in the heart of our cities.", imageUrl: "/outreach.jpg", aiHint: "street evangelism" },
  { title: "Prison Ministry", description: "Bringing light and hope to dark places.", imageUrl: "/community1.jpg", aiHint: "prison ministry" },
  { title: "Skills Training", description: "Equipping a generation for the global marketplace.", imageUrl: "/sponsored.jpg", aiHint: "skills training" },
  { title: "Community Outreach", description: "Demonstrating God's love through practical action.", imageUrl: "/_MG_9115.JPG", aiHint: "community outreach" },
];

const marqueeItemsBottom = [
  { title: "Hospital Ministry", description: "Prayers for the sick and weary in their time of need.", imageUrl: "/WhatsApp Image 2024-05-24 at 19.29.28 (1).jpeg", aiHint: "hospital ministry" },
  { title: "Workplace Faith", description: "Igniting revival in the professional and corporate sphere.", imageUrl: "/WhatsApp Image 2024-05-24 at 19.29.28 (2).jpeg", aiHint: "workplace prayer" },
  { title: "Orphanage Support", description: "Caring for the fatherless with divine compassion.", imageUrl: "/missions1.jpg", aiHint: "children orphanage" },
  { title: "Marketplace Gospel", description: "Being a light in the commercial centers of the world.", imageUrl: "/back2.jpg", aiHint: "local market" },
];

const Marquee = ({ items, reverse = false }: { items: typeof marqueeItemsTop, reverse?: boolean }) => (
  <div className="relative flex w-full overflow-hidden py-4">
    <motion.div 
      initial={{ x: reverse ? "-50%" : 0 }}
      animate={{ x: reverse ? 0 : "-50%" }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="flex w-max shrink-0"
    >
      {[...items, ...items, ...items].map((item, index) => (
        <div key={index} className="w-[320px] md:w-[550px] mx-6">
          <Card className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border-white/5 bg-black shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/20">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              data-ai-hint={item.aiHint}
              fill 
              className="object-cover opacity-70 transition-transform duration-[2000ms] group-hover:scale-110 group-hover:opacity-95"
              sizes="(max-width: 768px) 320px, 550px"
              priority={index < 4}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="flex items-center gap-2 mb-3 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <Sparkles className="w-5 h-5" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Our Impact</span>
              </div>
              <h3 className="font-headline text-2xl md:text-5xl font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
              <p className="text-white/80 text-sm md:text-xl line-clamp-2 transform translate-y-8 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 font-medium">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
          </Card>
        </div>
      ))}
    </motion.div>
  </div>
);

const PillarSection = ({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  cta, 
  href, 
  reverse = false, 
  aiHint 
}: { 
  title: string, 
  description: string, 
  image: string, 
  icon: any, 
  cta: string, 
  href: string, 
  reverse?: boolean,
  aiHint: string
}) => (
  <section className="relative py-28 md:py-40 overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className={`grid lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={reverse ? 'lg:order-2' : ''}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-primary/20 text-primary mb-8">
            <Icon className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Core Pillar</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter text-balance">{title}</h2>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-xl font-medium">
            {description}
          </p>
          <Button asChild size="lg" className="h-18 px-12 rounded-full bg-primary text-primary-foreground font-bold group shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
            <Link href={href}>
              {cta}
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] border border-white/5 ${reverse ? 'lg:order-1' : ''} group`}
        >
          <Image 
            src={image} 
            alt={title} 
            fill 
            data-ai-hint={aiHint}
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3.5rem]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default function WhatWeDo() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="flex min-h-screen w-full flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1">
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full divine-glow opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.05)_0%,transparent_70%)] animate-pulse" />
          </div>

          <div className="container relative z-10 px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border-gold/20 text-gold font-bold text-xs uppercase tracking-[0.4em]">
                <Sparkles className="w-5 h-5" />
                <span>Global Gospel Movement</span>
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.8] text-balance">
                Our <span className="text-gold">Mission</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/60 max-w-4xl mx-auto font-medium leading-relaxed tracking-tight">
                Transforming lives through the Gospel, reaching the unreached, and empowering a generation for Christ.
              </p>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 opacity-40"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold">Discover our impact</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-foreground to-transparent" />
          </motion.div>
        </section>

        {/* Dynamic Marquee Gallery */}
        <section className="py-24 bg-muted/30 relative border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
          <div className="space-y-12">
            <Marquee items={marqueeItemsTop} />
            <Marquee items={marqueeItemsBottom} reverse />
          </div>
        </section>

        {/* Core Pillars */}
        <div className="bg-background relative">
          <PillarSection 
            title="School Evangelism"
            description="We ignite revival in educational institutions. Through high-impact assemblies and campus outreaches, we've seen thousands of students encounter the radical love of Jesus right where they learn."
            image="/missions1.jpg"
            icon={School}
            cta="Sponsor an Outreach"
            href="/sponsor-a-program"
            aiHint="school gospel assembly students"
          />

          <PillarSection 
            title="Discipleship"
            description="Salvation is the first step. We build foundations. Our mentorship programs and Bible study groups help new believers walk in the power of the Holy Spirit and discover their divine purpose."
            image="/discipleship.jpg"
            icon={Zap}
            cta="Join a Group"
            href="/get-involved"
            reverse
            aiHint="youth Bible study group discipleship"
          />

          <PillarSection 
            title="Global Missions"
            description="Our hearts are stirred for nations. From rural village crusades to international leadership conferences, we are carrying the fire of revival to the ends of the earth."
            image="/outreach.jpg"
            icon={Globe}
            cta="Join a Mission Trip"
            href="/get-involved"
            aiHint="international mission trip team"
          />
        </div>

        {/* High-Impact CTA */}
        <section className="relative py-48 md:py-60 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0" />
          <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto space-y-16"
            >
              <div className="inline-block p-8 rounded-[2.5rem] bg-primary/10 mb-8 animate-pulse">
                <Heart className="w-20 h-20 text-primary fill-primary/20" />
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter">
                Be a Catalyst for <br /> <span className="text-primary">Divine Transformation</span>
              </h2>
              <p className="text-2xl md:text-3xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
                Your partnership fuels our ability to reach every student, every campus, and every nation. Together, we can win souls for Christ.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-10 pt-14">
                <Button asChild size="lg" className="h-20 px-16 text-2xl font-bold bg-gold hover:bg-gold/90 text-gold-foreground rounded-full shadow-[0_30px_60px_-15px_rgba(var(--gold),0.4)] transition-all hover:scale-105 active:scale-95">
                  <Link href="/donate">Partner Financially</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-20 px-16 text-2xl font-bold rounded-full glass border-foreground/10 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95">
                  <Link href="/sponsor-a-program">Sponsor a Program</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
