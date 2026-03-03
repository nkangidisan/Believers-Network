
'use client';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, School, Users, Zap, Heart } from "lucide-react";
import { useRef } from "react";

const marqueeItemsTop = [
  { title: "Street Evangelism", description: "Meeting souls where they are.", imageUrl: "https://picsum.photos/seed/street/800/600", aiHint: "street evangelism" },
  { title: "Prison Ministry", description: "Bringing light to dark places.", imageUrl: "https://picsum.photos/seed/prison/800/600", aiHint: "prison ministry" },
  { title: "Skills Training", description: "Equipping for the marketplace.", imageUrl: "https://picsum.photos/seed/skills/800/600", aiHint: "skills training" },
  { title: "Community Outreach", description: "Loving our neighbors in action.", imageUrl: "https://picsum.photos/seed/community/800/600", aiHint: "community outreach" },
];

const marqueeItemsBottom = [
  { title: "Hospital Ministry", description: "Prayers for the sick and weary.", imageUrl: "https://picsum.photos/seed/hospital/800/600", aiHint: "hospital ministry" },
  { title: "Workplace Faith", description: "Revival in the professional sphere.", imageUrl: "https://picsum.photos/seed/offices/800/600", aiHint: "workplace prayer" },
  { title: "Orphanage Support", description: "Caring for the fatherless.", imageUrl: "https://picsum.photos/seed/orphanage/800/600", aiHint: "children orphanage" },
  { title: "Marketplace Gospel", description: "Light in the commercial centers.", imageUrl: "https://picsum.photos/seed/market/800/600", aiHint: "local market" },
];

const Marquee = ({ items, reverse = false }: { items: typeof marqueeItemsTop, reverse?: boolean }) => (
  <div className="relative flex w-full overflow-hidden py-4">
    <motion.div 
      initial={{ x: reverse ? "-50%" : 0 }}
      animate={{ x: reverse ? 0 : "-50%" }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex w-max shrink-0"
    >
      {[...items, ...items, ...items].map((item, index) => (
        <div key={index} className="w-[300px] md:w-[450px] mx-4">
          <Card className="group relative aspect-[16/10] overflow-hidden rounded-2xl border-white/10 bg-black shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              data-ai-hint={item.aiHint}
              fill 
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
              sizes="(max-width: 768px) 300px, 450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm md:text-base line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.description}
              </p>
            </div>
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
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={reverse ? 'lg:order-2' : ''}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-6">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Core Pillar</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{title}</h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>
          <Button asChild size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold group shadow-xl shadow-primary/20">
            <Link href={href}>
              {cta}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ${reverse ? 'lg:order-1' : ''}`}
        >
          <Image 
            src={image} 
            alt={title} 
            fill 
            data-ai-hint={aiHint}
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default function WhatWeDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="flex min-h-screen w-full flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1">
        {/* Cinematic Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full divine-glow opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.05)_0%,transparent_70%)] animate-pulse" />
          </div>

          <div className="container relative z-10 px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
                Our <span className="text-gold">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                Transforming lives through the Gospel, reaching the unreached, and empowering a generation for Christ.
              </p>
            </motion.div>
          </div>

          {/* Scroll Down Hint */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Discover our work</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-foreground to-transparent" />
          </motion.div>
        </section>

        {/* Dynamic Marquee Gallery */}
        <section className="py-12 bg-muted/30 relative border-y border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
          <div className="space-y-4">
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
        <section className="relative py-32 overflow-hidden bg-primary/5">
          <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <Heart className="w-12 h-12 text-primary fill-primary/20" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Be a Catalyst for <br /> <span className="text-primary">Spiritual Transformation</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                Your partnership fuels our ability to reach every student, every campus, and every nation. Together, we can win souls for Christ.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <Button asChild size="lg" className="h-16 px-10 text-lg font-bold bg-gold hover:bg-gold/90 text-gold-foreground rounded-full shadow-2xl shadow-gold/20">
                  <Link href="/donate">Partner Financially</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-full glass border-foreground/10 hover:bg-foreground/5">
                  <Link href="/sponsor-a-program">Sponsor a Program</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Decorative background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
