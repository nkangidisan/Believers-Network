"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Users, HeartHandshake, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Globe,
    value: 10,
    label: "Countries Reached",
    suffix: "+",
  },
  {
    icon: Users,
    value: 200000,
    label: "Students Reached",
    suffix: "+",
  },
  {
    icon: HeartHandshake,
    value: 20000,
    label: "Souls Won to Christ",
    suffix: "+",
  },
  {
    icon: BookOpen,
    value: 1000000,
    label: "Gospel Resources Distributed",
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
    <span className="font-headline text-4xl md:text-5xl font-bold text-primary">
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
    <section id="impact" ref={ref} className="w-full py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Our Global Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                By God's grace, our network is growing and reaching thousands across the world.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <stat.icon className="w-12 h-12 text-accent" />
              <div className="mt-4">
                {isVisible && (
                  <AnimatedCounter
                    targetValue={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="mt-2 text-lg font-medium text-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
