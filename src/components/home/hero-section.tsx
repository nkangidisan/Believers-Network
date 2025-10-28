
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
    <section id="home" className="w-full bg-primary/10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 md:gap-12 min-h-screen pt-24 md:pt-16">
        <div className="md:order-1 text-center md:text-left">
           <div className="max-w-2xl space-y-6">
            <h1
              className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-foreground drop-shadow-lg animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Transforming Lives.
              <br />
              Impacting Nations.
              <br />
              Spreading the Gospel.
            </h1>
            <p
              className="max-w-2xl text-lg md:text-xl text-foreground/80 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Join a global non-profit organization reaching students, schools, and communities across Africa and beyond through faith-based initiatives.
            </p>
          </div>
          <div
            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up"
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
              className="font-bold text-base"
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
        <div className="md:order-2 w-full h-[60vh] md:h-[80vh] relative rounded-lg overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s'}}>
           <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
            <div className="absolute top-2 right-2 z-20">
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
        </div>
      </div>
    </section>
  );
}
