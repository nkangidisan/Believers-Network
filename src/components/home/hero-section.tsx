import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Youth worship service"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="youth worship evangelism"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          Transforming Lives.
          <br />
          Impacting Nations.
          <br />
          Spreading the Gospel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
          Join a global movement of young believers passionate about bringing revival to campuses and communities worldwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="lg"
            className="font-bold text-base animate-glow shadow-primary"
          >
            <Link href="#about">Explore What We Do</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold text-base bg-white/10 backdrop-blur-sm border-primary-foreground/50 hover:bg-white/20 text-white"
          >
            <Link href="#contact">Join The Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
