import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Heart, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      <Image
        src="https://placehold.co/1920x1080"
        alt="A diverse group of youth in a moment of worship and evangelism"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="youth worship evangelism"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white container mx-auto px-4">
        <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight drop-shadow-lg"
          >
            Transforming Lives.
            <br />
            Impacting Nations.
            <br />
            Spreading the Gospel.
          </h1>
          <p 
            className="max-w-2xl text-lg md:text-xl text-white/90"
          >
            Join a global move of God reaching students, schools, and communities across Africa and beyond.
          </p>
        </div>
        <div 
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            asChild
            size="lg"
            className="font-bold text-base animate-glow shadow-primary group"
          >
            <Link href="#what-we-do">
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
            <Link href="#who-we-are">
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
            <Link href="#donate">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
