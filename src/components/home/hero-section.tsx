
'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, User, Heart, Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

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
          mute: 1,
          loop: 1,
          playlist: 'Exs6flEtJpQ',
          controls: 0,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      delete (window as any).onYouTubeIframeAPIReady;
    }

  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };


  return (
    <section id="home" className="relative w-full flex flex-col md:h-screen md:items-center md:justify-center overflow-hidden">
      <div className="block md:hidden h-96 w-full relative">
        <div id="youtube-player-mobile" className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
         <div id="youtube-player" className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 brightness-50"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
       <div className="absolute top-4 right-4 z-20 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          className="text-white bg-white/10 border-white/20 hover:bg-white/20"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
          <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
        </Button>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white container mx-auto px-4 py-16 md:py-0 md:-mt-24">
        <div className="max-w-4xl space-y-6">
          <h1
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transforming Lives.
            <br />
            Impacting Nations.
            <br />
            Spreading the Gospel.
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 animate-fade-in-up"
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
            className="font-bold text-base animate-glow shadow-primary group bg-primary/80 hover:bg-primary"
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
            className="font-bold text-base bg-white/10 backdrop-blur-sm border-white/50 hover:bg-white/20 text-white"
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
    </section>
  );
}
