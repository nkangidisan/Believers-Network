import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GetInvolvedSection from "@/components/home/get-involved-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Pray } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved with Our Non-Profit Ministry | Volunteer & Pray",
  description: "Join our faith-based mission! Discover ways to get involved with Believers' Network International, from volunteering for school ministry to praying with us.",
  keywords: ["get involved", "volunteer non-profit", "mission trips", "pray for ministry", "support youth empowerment", "faith-based volunteer"],
};

export default function GetInvolved() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
         <section id="get-involved-hero" className="w-full py-20 md:py-28 bg-primary/10 relative">
            <Image
                src="/WhatsApp Image 2024-07-25 at 16.32.22_e9154a1e.jpg"
                alt="Get Involved"
                fill
                className="object-cover z-0 brightness-50"
                data-ai-hint="volunteer mission"
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 text-white">
                <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-md">
                    Get Involved
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 drop-shadow-md">
                    You are a vital part of what God is doing in the young generation. There are many ways to join the mission and make an eternal impact.
                </p>
                </div>
            </div>
         </section>
         <GetInvolvedSection />

         <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">More Ways to Join In</h2>
                </div>
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-headline text-2xl font-bold mb-4">Pray With Us</h3>
                        <p className="text-lg text-foreground/80">Prayer is the engine of our ministry. We believe in the power of prayer to break down barriers, open doors for school ministry, and bring revival to the young generation. Join our global team of prayer warriors who stand with us for revival. Your prayers are essential for the advancement of the Gospel.</p>
                    </div>
                    <Image src="/back2.jpg" data-ai-hint="prayer meeting youth" alt="A group of young people praying together at a Believers' Network International event." width={600} height={400} className="rounded-lg shadow-lg" />
                 </div>
            </div>
         </section>

         <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="font-headline text-2xl font-bold text-accent">A Volunteer's Testimony</h2>
                    <blockquote className="mt-4 text-xl italic text-foreground/80 max-w-3xl mx-auto">
                        "Serving on a mission trip with Believers' Network completely changed my perspective. Seeing students give their lives to Jesus was an experience I'll never forget. I came to give, but I received so much more."
                    </blockquote>
                    <cite className="mt-4 block font-semibold">- Sarah, Mission Volunteer</cite>
                </div>
            </div>
         </section>
      </main>
      <Footer />
    </div>
  );
}
