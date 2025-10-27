import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatWeDoSection from "@/components/home/what-we-do-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | School Ministry, Discipleship, & Missions",
  description: "Learn about the core pillars of our faith-based non-profit: school evangelism, discipleship for the young generation, and local & international missions.",
  keywords: ["what we do", "school ministry", "student discipleship", "international missions", "youth evangelism", "non-profit programs"],
};

export default function WhatWeDo() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">What We Do</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Our ministry is focused on three core pillars to transform lives and impact nations for Christ.
                </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 space-y-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">School Evangelism</h2>
                        <p className="text-lg text-foreground/80 mb-6">We are passionate about bringing the life-changing message of Jesus Christ to students right where they are. Through dynamic school assemblies, campus-wide outreach events, and one-on-one conversations, we create opportunities for the young generation to encounter God's love and truth. Our goal is to see a revival sweep through the educational institutions of every nation we reach.</p>
                        <Button asChild>
                            <Link href="/sponsor-a-program">Sponsor an Outreach</Link>
                        </Button>
                    </div>
                    <Image src="/missions1.jpg" data-ai-hint="school evangelism students" alt="Students engaged in a school evangelism event by Believers' Network International." width={600} height={400} className="rounded-lg shadow-lg" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <Image src="/discipleship.jpg" data-ai-hint="youth discipleship group" alt="A youth discipleship group studying the Bible, a core part of our student ministry." width={600} height={400} className="rounded-lg shadow-lg md:order-2" />
                    <div className="md:order-1">
                        <h2 className="font-headline text-3xl font-bold mb-4">Discipleship</h2>
                        <p className="text-lg text-foreground/80 mb-6">Salvation is just the beginning of a lifelong journey with Christ. We are committed to discipleship, helping new believers grow in their faith. We provide mentorship, Bible studies, and a supportive community where individuals can deepen their relationship with God, understand His Word, and learn to walk in the power of the Holy Spirit. </p>
                        <Button asChild>
                            <Link href="/get-involved">Join a Group</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">Outreach & Missions</h2>
                        <p className="text-lg text-foreground/80 mb-6">Our hearts are stirred for nations. We organize local outreaches and international mission trips to spread the Gospel to unreached areas, support local churches, and serve communities in practical ways. From village crusades to leadership training, we are equipping a global generation to carry the fire of revival to the ends of the earth.</p>
                        <Button asChild>
                            <Link href="/get-involved">Join a Mission Trip</Link>
                        </Button>
                    </div>
                    <Image src="/outreach.jpg" data-ai-hint="international outreach missions" alt="Our missions team during an international outreach, representing our faith-based initiative." width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">Partner With Our Mission</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Your support makes this work possible. Partner with us financially or sponsor a specific school ministry program to help us reach more souls for Christ.</p>
                 <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
                        <Link href="/donate">Give Now</Link>
                    </Button>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/sponsor-a-program">Sponsor a Program</Link>
                    </Button>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
