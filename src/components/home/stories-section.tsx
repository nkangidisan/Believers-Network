
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

export const stories = [
  {
    id: "hope-and-healing",
    image: "/community1.jpg",
    category: "Community Impact",
    title: "Hope and Healing in the Community",
    excerpt: "Read about our recent outreach program that brought essential supplies and the message of hope to a rural village in Africa.",
    aiHint: "community impact outreach"
  },
  {
    id: "life-changed",
    image: "/outreach.jpg",
    category: "Outreach",
    title: "A Life Changed During an Outreach",
    excerpt: "A volunteer shares their transformative experience serving on a short-term mission trip with our non-profit organization.",
    aiHint: "outreach missions volunteer"
  },
  {
    id: "gospel-to-nations",
    image: "/missions1.jpg",
    category: "School Ministry",
    title: "Taking the Gospel to the Nations",
    excerpt: "See how our missions team is making a difference in unreached communities and schools across the globe.",
    aiHint: "global missions school ministry"
  },
];

export default function StoriesSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section id="stories" ref={ref} className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("text-center mb-16 transition-all duration-1000 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Testimonies of Grace</span>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Stories of <span className="text-gold">Impact</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground/60 font-medium">
            Witness the powerful move of God in the young generation across the nations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
             <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
             >
                <Link href={`/stories-of-impact/${story.id}`}>
                    <Card className="group relative overflow-hidden rounded-[2rem] border-white/5 bg-white/[0.02] shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20 h-full flex flex-col">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            data-ai-hint={story.aiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute top-6 left-6">
                             <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold uppercase tracking-widest text-primary">
                                {story.category}
                             </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-8 flex flex-col flex-grow">
                        <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{story.title}</h3>
                        <p className="text-foreground/60 mb-8 flex-grow leading-relaxed">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-gold font-bold text-sm group-hover:gap-4 transition-all uppercase tracking-widest">
                          Read More <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                </Link>
            </motion.div>
          ))}
        </div>

         <div className={cn("text-center mt-20 transition-all duration-1000 ease-out", inView ? "opacity-100" : "opacity-0")} style={{ transitionDelay: '600ms' }}>
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                <Link href="/stories-of-impact">
                    See All Stories
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
