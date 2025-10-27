import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StoriesSection from "@/components/home/stories-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stories of Impact | Testimonies from Our Faith-Based Ministry",
  description: "Read powerful testimonies from our non-profit's school ministry and youth empowerment programs. Be encouraged by stories of lives transformed by God's grace.",
  keywords: ["ministry stories of impact", "Christian testimonies", "student ministry testimonies", "lives transformed by faith", "faith-based non-profit stories"],
};

export default function StoriesOfImpact() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10 relative">
            <Image
                src="/WhatsApp Image 2024-07-25 at 16.32.22_e9154a1e.jpg"
                alt="Stories of Impact"
                fill
                className="object-cover z-0 brightness-50"
                data-ai-hint="testimonies faith"
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 text-white">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-md">
                        Stories of Impact
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 drop-shadow-md">
                        God is moving powerfully. Here are just a few stories of lives being transformed by His grace in the young generation.
                    </p>
                </div>
            </div>
        </section>
        <StoriesSection />
        <section className="w-full py-20 md:py-28">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">Share Your Story</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Has God touched your life through this ministry? Your testimony could be the encouragement someone else needs to hear. We invite you to share your story of God's goodness.</p>
                 <Button asChild size="lg" className="mt-8">
                     <Link href="/stay-connected?subject=My+Testimony">
                        <PlusCircle className="mr-2 h-5 w-5" />
                        Submit Your Testimony
                    </Link>
                 </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
