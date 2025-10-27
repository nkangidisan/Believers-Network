"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandHeart, School, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";


const waysToHelp = [
  {
    icon: <HandHeart className="w-10 h-10 text-primary" />,
    title: "Volunteer",
    description: "Use your gifts and skills to serve God and be a part of what He is doing through our network.",
    href: "/stay-connected",
    cta: "Volunteer"
  },
  {
    icon: <School className="w-10 h-10 text-primary" />,
    title: "Sponsor a Program",
    description: "Help us bring the gospel to an entire school by sponsoring an outreach program.",
    href: "/sponsor-a-program",
    cta: "Sponsor Now"
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: "Partner With Us",
    description: "Become a monthly partner to support the ongoing work of the ministry and fuel revival.",
    href: "/stay-connected",
    cta: "Become a Partner"
  },
];

export default function GetInvolvedSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

  return (
    <section id="get-involved" ref={ref} className="w-full py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-12 transition-opacity duration-700 ease-out", inView ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Get Involved
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            You can be a part of this great move of God. Here's how you can join the mission.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {waysToHelp.map((way, index) => (
             <div key={way.title} className={cn("transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: `${index * 200}ms` }}>
                <Card className="flex flex-col text-center shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                        {way.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl pt-2">{way.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-base flex-grow">{way.description}</CardDescription>
                    <Button asChild className="mt-6 bg-accent hover:bg-accent/90">
                      <Link href={way.href}>{way.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
            </div>
          ))}
        </div>
        <div className={cn("text-center mt-12 transition-opacity duration-700 ease-out", inView ? "opacity-100" : "opacity-0")} style={{ transitionDelay: '600ms' }}>
            <Button asChild size="lg">
                <Link href="/get-involved">Get Involved Now</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
