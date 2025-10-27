import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Heart, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 brightness-50"
          src="https://www.youtube.com/embed/Exs6flEtJpQ?autoplay=1&mute=1&loop=1&playlist=Exs6flEtJpQ&controls=0&showinfo=0&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white container mx-auto px-4">
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
