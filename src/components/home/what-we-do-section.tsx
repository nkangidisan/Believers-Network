"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { School, Zap, Users } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <School className="w-12 h-12 text-accent" />,
        title: "School Evangelism",
        description: "Bringing the light of the Gospel to students in schools and on campuses through dynamic outreach events."
    },
    {
        icon: <Zap className="w-12 h-12 text-accent" />,
        title: "Discipleship & Mentorship",
        description: "Building a strong foundation of faith through mentorship, biblical teaching, and spiritual growth programs."
    },
    {
        icon: <Users className="w-12 h-12 text-accent" />,
        title: "Community Outreach & Missions",
        description: "Impacting communities with the love of Christ through practical service, missions, and partnerships."
    }
]

export default function WhatWeDoSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

  return (
    <section id="what-we-do" ref={ref} className="w-full py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-12 transition-opacity duration-700 ease-out", inView ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Our ministry is focused on three core pillars to transform lives and impact nations for Christ.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={feature.title} className={cn("transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Card className="text-center shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                {feature.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="font-headline text-2xl mb-2">{feature.title}</CardTitle>
                            <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
