"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    image: "/community1.jpg",
    category: "Community Impact",
    title: "Hope and Healing in the Community",
    excerpt: "Read about our recent outreach program that brought essential supplies and the message of hope to a rural village in Africa.",
    aiHint: "community impact outreach"
  },
  {
    image: "/outreach.jpg",
    category: "Outreach",
    title: "A Life Changed During an Outreach",
    excerpt: "A volunteer shares their transformative experience serving on a short-term mission trip with our non-profit organization.",
    aiHint: "outreach missions volunteer"
  },
  {
    image: "/missions1.jpg",
    category: "School Ministry",
    title: "Taking the Gospel to the Nations",
    excerpt: "See how our missions team is making a difference in unreached communities and schools across the globe.",
    aiHint: "global missions school ministry"
  },
];

export default function StoriesSection() {
  return (
    <section id="stories" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Stories of Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            God is moving powerfully. Here are just a few stories of lives being transformed in the young generation.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.title} className="overflow-hidden shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Image
                src={story.image}
                alt={story.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={story.aiHint}
              />
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{story.category}</p>
                <h3 className="font-headline text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-foreground/80 mb-4">{story.excerpt}</p>
                <Link href="/stories-of-impact" className="font-bold text-accent hover:underline">
                  Read More <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/stories-of-impact">
                    See All Stories
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
