import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Heart, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/heroback.jpg"
          alt="A diverse group of youth in a moment of worship and prayer"
          layout="fill"
          objectFit="cover"
          className="brightness-50 object-center"
          priority
          data-ai-hint="worship youth"
        />
        <div className="absolute inset-0 bg-black/50"></div>
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
            Join a global move of God reaching students, schools, and communities across Africa and beyond.
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
