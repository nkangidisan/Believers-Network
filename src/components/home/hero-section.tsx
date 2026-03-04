'use client';

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube API
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
          mute: 0, // Request audio on
          loop: 1,
          playlist: 'Exs6flEtJpQ',
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            // Note: Autoplay with sound is often blocked by browsers until user interaction.
            // We keep it at mute: 0 but provide a toggle.
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
    <section id="home" className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-end">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div id="youtube-player" className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[110vw] h-[110vh] -translate-x-1/2 -translate-y-1/2 scale-110"></div>
      </div>

      {/* Subtle Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>

      {/* Hero Controls */}
      <div className="relative z-20 container mx-auto px-4 pb-20 flex justify-between items-end">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-start gap-4"
        >
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.4em]">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Experience the Vision</span>
             </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-6"
        >
            <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
                className="h-14 w-14 rounded-full text-white bg-black/20 border-white/10 hover:bg-black/40 backdrop-blur-md transition-all active:scale-90"
            >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </Button>
            
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 opacity-40"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}