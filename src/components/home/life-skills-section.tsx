
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Camera, Paintbrush, Cake, Music, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";


const skills = [
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Photography",
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: "Graphic Design",
  },
  {
    icon: <Cake className="w-10 h-10 text-primary" />,
    title: "Baking",
  },
  {
    icon: <Music className="w-10 h-10 text-primary" />,
    title: "Instruments",
  },
];

export default function LifeSkillsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

  return (
    <section id="life-skills" className="w-full py-20 md:py-28 bg-muted">
      <div ref={ref} className="container mx-auto px-4">
        <div className={cn("text-center mb-12 transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Empowering Through Life Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Beyond spiritual growth, we equip our youth with practical, creative, and professional skills to thrive in their careers and ministries.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={skill.title} className={cn("transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: `${index * 150}ms`}}>
                <Card className="flex flex-col items-center text-center shadow-lg bg-background/50 border-0 h-full p-6">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                        {skill.icon}
                    </div>
                    <CardHeader className="p-2">
                        <CardTitle className="font-headline text-xl">{skill.title}</CardTitle>
                    </CardHeader>
                </Card>
            </div>
          ))}
        </div>
        <div className={cn("text-center transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{transitionDelay: '600ms'}}>
            <Button asChild size="lg">
                <Link href="/life-skills">
                    Explore All Skills <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
