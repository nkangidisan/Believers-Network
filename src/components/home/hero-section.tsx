'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, User, Heart, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: 'Exs6flEtJpQ',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'Exs6flEtJpQ',
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          suggestedQuality: 'small'
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            if (isMobile) {
                // Keep muted on mobile for autoplay
            } else {
                 event.target.mute();
                 setIsMuted(true);
            }
          }
        }
      });
    };
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
      delete (window as any).onYouTubeIframeAPIReady;
    }
  }, [isMobile]);

  const toggleMute = () => {
    if (playerRef.current && typeof playerRef.current.isMuted === 'function') {
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <section id="home" className="relative flex flex-col justify-center bg-black text-white overflow-hidden min-h-screen">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div id="youtube-player" className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-110" style={{pointerEvents: 'none'}}></div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center flex-1 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border-white/10 text-white font-bold text-xs uppercase tracking-[0.4em] mb-4">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <span>Global Gospel Movement</span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-balance">
            Transforming Lives.<br />
            Impacting Nations.<br />
            Spreading the <span className="text-gold">Gospel.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
            Join a global non-profit organization reaching students, schools, and communities across Africa and beyond through faith-based initiatives.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 pt-8">
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
            >
              <Link href="/what-we-do">
                <Compass className="mr-2 h-6 w-6" />
                Explore What We Do
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg font-bold rounded-full border-white/20 glass hover:bg-white/10 text-white hover:scale-105 transition-all"
            >
              <Link href="/who-we-are">
                <User className="mr-2 h-6 w-6" />
                Meet the Vision Bearer
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-lg font-bold rounded-full bg-gold hover:bg-gold/90 text-gold-foreground shadow-2xl shadow-gold/20 hover:scale-105 transition-all"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-6 w-6" />
                Donate Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mute Toggle */}
      <div className="absolute bottom-10 right-10 z-30">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="h-12 w-12 rounded-full text-white bg-black/20 border-white/10 hover:bg-black/40 backdrop-blur-md"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
          </Button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Discover the Impact</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
