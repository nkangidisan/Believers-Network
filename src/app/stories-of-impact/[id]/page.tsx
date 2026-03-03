
'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar, Share2, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { stories } from "@/components/home/stories-section";
import { cn } from "@/lib/utils";

export default function StoryDetail() {
  const { id } = useParams();
  const router = useRouter();
  
  const story = stories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Story not found</h1>
        <Button onClick={() => router.push('/stories-of-impact')}>Go Back</Button>
      </div>
    );
  }

  // Expanded content for demonstration - in a real app this would come from a database/CMS
  const fullContent = [
    `Our mission started with a simple vision: to reach the unreached and bring hope where there was none. In this particular ${story.category.toLowerCase()} effort, we witnessed God's hand moving in ways we never expected.`,
    `Over the course of three weeks, our team worked tirelessly alongside local leaders to establish roots within the community. We didn't just bring materials; we brought the message of Eternal Life. Every assembly, every one-on-one conversation, was an opportunity for revival.`,
    `"The transformation we saw in the eyes of the students was remarkable," says one of our outreach leads. "They went from a place of uncertainty to a place of divine purpose."`,
    `This is just the beginning. Your support and prayers fuel these missions. Together, we are not just sharing a message—we are building the Kingdom, one soul at a time.`
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-gold selection:text-gold-foreground">
      <Header />
      <main className="flex-1 overflow-hidden">
        {/* Cinematic Header Image */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="container relative z-10 h-full mx-auto px-4 flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl space-y-6"
            >
              <Button asChild variant="ghost" className="text-white hover:text-gold p-0 mb-4 h-auto group">
                <Link href="/stories-of-impact">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Stories
                </Link>
              </Button>
              <div className="flex items-center gap-3 text-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">{story.category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-balance">
                {story.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Main Content */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-8 space-y-8"
              >
                <div className="flex items-center gap-6 text-foreground/40 text-sm border-b border-white/5 pb-8 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Recent Outreach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share This Story</span>
                  </div>
                </div>

                <div className="prose prose-xl dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
                  {fullContent.map((para, i) => (
                    <p key={i} className={cn(i === 0 && "text-2xl font-medium text-foreground leading-snug")}>
                        {para}
                    </p>
                  ))}
                </div>

                {/* Impact Image Block */}
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl my-12 group">
                    <Image src={story.image} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" alt="Impact moment" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
              </motion.div>

              {/* Sidebar / CTA */}
              <aside className="lg:col-span-4 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="sticky top-32 space-y-8"
                >
                    <div className="p-8 rounded-[2rem] glass border-gold/20 bg-gold/5 space-y-6">
                        <Heart className="w-10 h-10 text-gold fill-gold/20" />
                        <h3 className="text-2xl font-bold">Fuel More Stories Like This</h3>
                        <p className="text-foreground/70 leading-relaxed">
                            Your partnership allows us to reach more students and communities. Every gift makes a direct impact on the ground.
                        </p>
                        <Button asChild className="w-full h-14 rounded-full bg-gold text-gold-foreground font-bold shadow-lg shadow-gold/20">
                            <Link href="/donate">Partner Financially</Link>
                        </Button>
                    </div>

                    <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-6">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-foreground/40">Next Steps</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/get-involved" className="flex items-center justify-between group">
                                    <span className="font-bold group-hover:text-gold transition-colors">Volunteer with Us</span>
                                    <ArrowLeft className="w-4 h-4 rotate-180 text-gold" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/stay-connected" className="flex items-center justify-between group">
                                    <span className="font-bold group-hover:text-gold transition-colors">Join Our Community</span>
                                    <ArrowLeft className="w-4 h-4 rotate-180 text-gold" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
