import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor a School Ministry Program | Youth Empowerment",
  description: "Be a catalyst for revival. Your sponsorship of a school assembly or mission allows our non-profit to bring the hope of the Gospel to thousands of students.",
  keywords: ["sponsor a program", "school ministry sponsorship", "youth outreach program", "support student evangelism", "Christian non-profit sponsorship"],
};

const sponsorshipLevels = [
  {
    title: "School Assembly",
    price: "$250",
    description: "Sponsor a dynamic gospel assembly in one school.",
    features: ["Speaker & Team", "Sound System", "Follow-up Materials"]
  },
  {
    title: "Full Day Outreach",
    price: "$500",
    description: "Fund a full day of evangelism on a school campus.",
    features: ["Everything in School Assembly", "One-on-one Evangelism", "Lunch for Volunteers"]
  },
  {
    title: "Regional Mission",
    price: "$1,500+",
    description: "Underwrite a multi-day mission to reach several schools in a region.",
    features: ["Everything in Full Day Outreach", "Transportation & Lodging", "Community Service Project"]
  }
];

export default function SponsorAProgram() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Sponsor a School Ministry Program
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Your sponsorship allows us to bring the hope of the Gospel directly to thousands of students. Be the catalyst for revival in a school.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold">Sponsorship Levels</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Choose a level of support that fits your capacity and passion to empower the young generation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsorshipLevels.map(level => (
                <Card key={level.title} className="flex flex-col shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{level.title}</CardTitle>
                    <p className="text-3xl font-bold text-primary">{level.price}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-foreground/80 mb-4 flex-grow">{level.description}</p>
                    <ul className="space-y-2 mb-6">
                      {level.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> {feature}</li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-auto bg-gold hover:bg-gold/90">
                      <Link href="/donate">Sponsor Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">Impact of Sponsorship</h2>
                        <p className="text-lg text-foreground/80">When you sponsor a program, you are not just funding an event; you are investing in eternal destinies. The image you see is from a past outreach in Kampala, Uganda, funded entirely by a single sponsor. Over 200 students gave their lives to Jesus that day. This is the fruit of your partnership.</p>
                    </div>
                    <Image src="/sponsored.jpg" data-ai-hint="sponsored school outreach" alt="Students at a sponsored school outreach program by Believers' Network International." width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
