
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SalvationSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/prayer salv.jpeg"
              alt="Person in prayer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 mb-2 text-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">A New Beginning</span>
              </div>
              <h3 className="text-3xl font-bold">Find Hope in Christ</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-accent">
              <Heart className="w-8 h-8 fill-current" />
              <h2 className="text-4xl md:text-5xl font-bold">The Salvation Prayer</h2>
            </div>

            <p className="text-xl text-foreground/70 leading-relaxed">
              Accepting Jesus is the most significant step you'll ever take. It's a journey into eternal life and a personal relationship with the Creator.
            </p>

            <Card className="glass border-gold/20 bg-gold/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-12 h-12 text-gold" />
              </div>
              <CardContent className="p-8">
                <p className="text-lg font-medium italic leading-relaxed text-foreground/90">
                  "O Lord God, I believe with all my heart in Jesus Christ, Son of the living God. I believe He died for me and God raised Him from the dead. I believe He is alive today. I confess with my mouth that Jesus Christ is the Lord of my life from this day. Through Him and in His Name, I have eternal life. I am born again."
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold shadow-xl shadow-accent/20">
                <Link href="/salvation">
                  I Made a Decision
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-14 px-8 rounded-full border border-foreground/10 hover:bg-foreground/5 font-bold">
                <Link href="/stay-connected">Talk to Someone</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
