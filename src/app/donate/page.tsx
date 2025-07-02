import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
             <div className="max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                    Partner with us to Spread the Gospel
                </h1>
                <p className="mt-4 text-lg text-foreground/80">
                    Your generous donation fuels our mission to reach every student, every campus, and every nation with the life-transforming message of Jesus Christ. Every gift, no matter the size, makes a significant impact and helps us win more souls for the kingdom.
                </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><Heart className="text-accent" /> One-Time Gift</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Make a single donation to support the immediate needs of the ministry.</CardDescription>
                            <p className="font-bold my-4 text-lg">Use MTN Mobile Money or Bank Transfer.</p>
                            <Button className="w-full bg-gold hover:bg-gold/90">Give a One-Time Gift</Button>
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><Heart className="text-accent fill-current" /> Monthly Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Become a monthly partner to provide sustained support for ongoing missions.</CardDescription>
                            <p className="font-bold my-4 text-lg">Set up a recurring donation today.</p>
                            <Button className="w-full">Become a Monthly Partner</Button>
                        </CardContent>
                    </Card>
                 </div>
                 <div className="text-center mt-12 max-w-4xl mx-auto">
                    <Card className="shadow-lg">
                        <CardHeader>
                             <CardTitle className="font-headline flex items-center gap-2 justify-center"><BookOpen className="text-accent" /> Print Gospel Materials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Help us print Bibles, tracts, and other discipleship materials to give away for free during our outreaches.</CardDescription>
                            <Button asChild className="mt-4">
                                <Link href="/sponsor-a-program">Sponsor Materials</Link>
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
                    <Image src="/story-2.jpg" data-ai-hint="community help" alt="Giving Impact" width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
