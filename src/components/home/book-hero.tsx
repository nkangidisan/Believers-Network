'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, Download, CreditCard } from 'lucide-react';
import { useState } from 'react';
import DownloadModal from './download-modal';
import Link from 'next/link';

export default function BookHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Divine Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,hsla(var(--gold),0.05)_0%,transparent_70%)] opacity-50" />
      </div>

      <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold/20 text-gold font-bold text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4" />
            <span>Official Global Launch</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-balance">
            The <span className="text-gold">New Life</span> <br /> 
            Book
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            A spiritual roadmap for the young generation. Discover the path to eternal hope, purpose, and divine destiny.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold bg-gold hover:bg-gold/90 text-gold-foreground rounded-full shadow-[0_20px_40px_-10px_rgba(var(--gold),0.3)] group transition-all hover:scale-105 active:scale-95"
              onClick={() => setIsModalOpen(true)}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download with Code
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg font-bold glass rounded-full border-foreground/10 hover:bg-foreground/5 transition-all hover:scale-105"
            >
              <Link href="/donate">
                <CreditCard className="mr-2 h-5 w-5" />
                Buy Now – $20
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Cinematic 3D Book Mockup */}
        <motion.div
          style={{ y: y1, rotateY: rotate }}
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center perspective-[2500px]"
        >
          <div className="relative w-[320px] h-[480px] md:w-[550px] md:h-[825px] group">
            {/* Divine Aura Glow Stroke */}
            <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-r from-gold/40 via-primary/20 to-gold/40 blur-2xl opacity-50 animate-pulse group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Inner Luminous Stroke */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-gold/30 ring-offset-4 ring-offset-background/50 z-20 pointer-events-none group-hover:ring-gold/60 transition-all duration-500" />

            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full h-full shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/bookMOCK.png"
                alt="New Life Book Mockup"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                priority
                sizes="(max-width: 768px) 320px, 550px"
              />
              
              {/* Dynamic Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
            </motion.div>

            {/* Dynamic Shadow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/50 blur-[40px] rounded-[100%]" />
          </div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">Explore the Vision</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground to-transparent" />
      </motion.div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
