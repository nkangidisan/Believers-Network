
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, Download, CreditCard } from 'lucide-react';
import { useState } from 'react';
import DownloadModal from './download-modal';

export default function BookHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Divine Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold/20 text-gold font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Official Global Launch</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
            The <span className="text-gold">New Life</span> <br /> 
            Book
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A spiritual roadmap for the young generation. Discover the path to eternal hope and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="h-16 px-8 text-lg font-bold bg-gold hover:bg-gold/90 text-gold-foreground rounded-full shadow-2xl shadow-gold/20 group transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download with Code
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-8 text-lg font-bold glass rounded-full border-foreground/10 hover:bg-foreground/5"
              onClick={() => setIsModalOpen(true)}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Buy Now – $20
            </Button>
          </div>
        </motion.div>

        {/* 3D Book Mockup */}
        <motion.div
          style={{ y: y1, rotateY: rotate }}
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center perspective-[2000px]"
        >
          <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] group">
            {/* Animated Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/40 blur-2xl rounded-full" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden border border-white/5"
            >
              <Image
                src="/book mockup.jpg"
                alt="New Life Book Mockup"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
      </motion.div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
