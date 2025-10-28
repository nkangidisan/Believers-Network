"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function SalvationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="salvation" ref={ref} className="w-full py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "order-2 lg:order-2 space-y-6 transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold flex items-center gap-3">
              <Heart className="text-accent w-10 h-10" />
              Prayer of Salvation
            </h2>
            <Card className="bg-background/50">
                <CardContent className="pt-6">
                    <p className="text-sm text-foreground/80 mb-4">Kindly say this prayer with all your heart and believe it:</p>
                    <blockquote className="border-l-4 border-primary pl-4">
                        <p className="text-lg font-semibold italic text-foreground/90">
                            "O Lord God, I believe with all my heart in Jesus Christ, Son of the living God. I believe He died for me and God raised Him from the dead. I believe He is alive today. I confess with my mouth that Jesus Christ is the Lord of my life from this day. Through Him and in His Name, I have eternal life. I am born again. Thank you Lord, for saving my soul! I am now a child of God. Hallelujah!"
                        </p>
                    </blockquote>
                </CardContent>
            </Card>

            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="font-headline">I Received Christ!</CardTitle>
                    <CardDescription>Welcome to the family! Let us know you made a decision. Kindly fill the form below to receive materials to help build your new relationship with God.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <form action="mailto:hello@believersnetworkintl.org" method="post" encType="text/plain" className="space-y-4">
                        <Input name="name" placeholder="Your Name" required />
                        <Input name="contact" placeholder="Your Phone Number or Email" required />
                        <Input name="location" placeholder="Your City/Country" required/>
                        <Button type="submit" className="w-full">I Made a Decision!</Button>
                    </form>
                </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-background/50">
                    <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                        <Download className="w-10 h-10 text-primary mb-2" />
                        <h3 className="font-bold mb-2">Your New Life Book</h3>
                        <Button asChild variant="outline">
                            <a href="/new life book.pdf" download>Download PDF</a>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="bg-primary/20 border-primary">
                     <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                        <h3 className="font-headline text-lg font-bold mb-2">Ready for a New Beginning?</h3>
                        <p className="text-sm text-foreground/80 mb-4">Learn more about the gift of salvation.</p>
                        <Button asChild>
                            <Link href="/salvation">
                                Receive Salvation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

          </div>
          <div
            className={cn(
              "order-1 lg:order-1 transition-all duration-700 ease-out delay-200",
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Image
              src="/prayer salv.jpeg"
              alt="A person in prayer, representing the prayer of salvation."
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5]"
              data-ai-hint="prayer salvation faith"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
