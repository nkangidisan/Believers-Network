
"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, GraduationCap, HeartHandshake, BookOpen, Compass, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Globe,
    value: 10,
    label: "Countries Reached",
    suffix: "+",
  },
  {
    icon: GraduationCap,
    value: 200000,
    label: "Students Reached",
    suffix: "+",
  },
  {
    icon: HeartHandshake,
    value: 20000,
    label: "Lives Transformed",
    suffix: "+",
  },
  {
    icon: BookOpen,
    value: 1000000,
    label: "Gospel Resources Shared",
    suffix: "+",
  },
];

const AnimatedCounter = ({
  targetValue,
  suffix = "",
}: {
  targetValue: number;
  suffix?: string;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const animatedValue = Math.floor(percentage * targetValue);
      setCurrentValue(animatedValue);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return (
    <span className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section 
      id="impact" 
      ref={ref} 
      className="relative w-full py-24 md:py-32 lg:py-40 bg-muted text-white overflow-hidden"
    >
      {/* Cinematic Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110" 
          style={{ backgroundImage: "url(/reach.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
            >
              Transforming Lives. <br />
              <span className="text-gold">Impacting Nations.</span> <br />
              Spreading the Gospel.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Join a global non-profit organization reaching students, schools, and communities across Africa and beyond through faith-based initiatives.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="pt-6"
            >
              <Button
                asChild
                size="lg"
                className="group relative h-16 px-10 text-lg font-bold rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] transition-all duration-500 hover:scale-105"
              >
                <Link href="/what-we-do" className="flex items-center gap-3">
                  <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  Explore What We Do
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl glass border-white/10 group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-10 h-10 text-gold" />
              </div>
              <div className="mt-2 min-h-[4rem]">
                {isVisible && (
                  <AnimatedCounter
                    targetValue={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="mt-4 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
