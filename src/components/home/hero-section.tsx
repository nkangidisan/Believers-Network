'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, User, Heart, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

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
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
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
          mute: 1, // Start muted to ensure autoplay
          loop: 1,
          playlist: 'Exs6flEtJpQ',
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
      delete (window as any).onYouTubeIframeAPIReady;
    }
  }, []);

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
    <section id="home" className="relative flex flex-col justify-center bg-black text-white overflow-hidden min-h-screen pt-16">
      {/* Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div id="youtube-player" className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" style={{pointerEvents: 'none'}}></div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center flex-1 text-center py-12 md:py-20">
        <div className="max-w-3xl space-y-6">
          <h1
            className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transforming Lives.
            <br />
            Impacting Nations.
            <br />
            Spreading the Gospel.
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Join a global non-profit organization reaching students, schools, and communities across Africa and beyond through faith-based initiatives.
          </p>
        </div>
        <div
          className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Button
            asChild
            size="lg"
            className="font-bold text-base animate-glow shadow-primary group bg-primary/80 hover:bg-primary text-primary-foreground"
          >
            <Link href="/what-we-do">
              <Compass className="mr-2 h-5 w-5" />
              Explore What We Do
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold text-base border-white/50 hover:bg-white/10"
          >
            <Link href="/who-we-are">
              <User className="mr-2 h-5 w-5" />
              Meet the Vision Bearer
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="default"
            className="font-bold text-base bg-gold hover:bg-gold/90 text-gold-foreground shadow-lg"
          >
            <Link href="/donate">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Mute/Unmute button */}
      <div className="absolute top-20 right-4 z-30">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="text-white bg-black/20 border-white/30 hover:bg-black/40"
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
            <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
          </Button>
      </div>
    </section>
  );
}
