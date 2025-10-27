"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

export default function PartnerSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

  return (
    <section id="partner" ref={ref} className="w-full py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
             <div className={cn("max-w-3xl mx-auto transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                    Partner with us to Spread the Gospel
                </h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Your ongoing partnership fuels our mission to reach every student, every campus, and every nation with the life-transforming message of Jesus Christ. Become a regular partner today.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/stay-connected">
                        <HeartHandshake className="mr-2 h-5 w-5" />
                        Become a Partner
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
