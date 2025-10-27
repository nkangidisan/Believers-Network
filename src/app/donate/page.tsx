import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to Our Ministry | Support Youth Empowerment",
  description: "Partner with our non-profit organization to spread the Gospel. Your donation fuels our school ministry and mission to empower the young generation. Give today.",
  keywords: ["donate", "support non-profit", "Christian charity", "give to missions", "school ministry donation", "youth empowerment support"],
};

export default function Donate() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10 relative">
          <Image
            src="/heroback.jpg"
            alt="Donate to our ministry"
            fill
            className="object-cover z-0 brightness-50"
            data-ai-hint="giving donation hands"
          />
          <div className="container mx-auto px-4 text-center relative z-10 text-white">
             <div className="max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-md">
                    Partner with Us to Spread the Gospel
                </h1>
                <p className="mt-4 text-lg text-white/90 drop-shadow-md">
                    Your generous donation fuels our mission to reach every student, every campus, and every nation with the life-transforming message of Jesus Christ. Every gift makes a significant impact.
                </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><Phone className="text-accent" /> Mobile Money (Uganda)</CardTitle>
                            <CardDescription>Send your gift directly via Mobile Money.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-bold text-lg">Airtel Money:</h3>
                                <p className="text-foreground/80">+256 752 948 431</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">MTN Mobile Money:</h3>
                                <p className="text-foreground/80">+256 766 754 286</p>
                            </div>
                             <div>
                                <h3 className="font-bold text-lg">In the Name Of:</h3>
                                <p className="text-foreground/80">Iradukunda Pacifique</p>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><CreditCard className="text-accent" /> International Giving</CardTitle>
                            <CardDescription>For bank transfers or other international methods.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-full">
                           <div className="flex-grow">
                             <p className="text-foreground/80">We are currently setting up our international bank accounts for easier giving. In the meantime, please contact us for the best way to send your support from abroad.</p>
                           </div>
                            <Button asChild className="w-full mt-4">
                               <Link href="/stay-connected">
                                 Contact Us for Details <ArrowRight className="ml-2 h-4 w-4"/>
                               </Link>
                            </Button>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">See Your Giving in Action</h2>
                        <p className="text-lg text-foreground/80">"Because of your support, we were able to provide Bibles to over 500 new believers at a recent high school outreach. Many of them had never owned a Bible before. Thank you for putting God's Word into their hands!"</p>
                        <cite className="block mt-2 font-semibold">- Outreach Team Lead</cite>
                    </div>
                    <Image src="/missions1.jpg" data-ai-hint="giving impact student outreach" alt="Students at a Believers' Network International school outreach event, showing the impact of donations." width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
