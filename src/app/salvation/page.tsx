
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receive Salvation - A New Beginning with Jesus",
  description: "The most important decision you can make. Learn about God's gift of salvation and pray the salvation prayer to begin your new life in Christ today.",
};

export default function Salvation() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10 text-center">
          <div className="container mx-auto px-4">
            <Heart className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              A New Beginning
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              The most important decision you will ever make is to invite Jesus Christ into your life.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-headline text-3xl font-bold text-center mb-8">An Invitation to Accept Jesus</h2>
            <div className="space-y-6 text-lg text-foreground/80">
                <p>The Bible says, "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life." (John 3:16). God loves you, and He has a wonderful plan for your life.</p>
                <p>We have all sinned and fallen short of God's glory (Romans 3:23), but God demonstrated His own love for us in this: While we were still sinners, Christ died for us (Romans 5:8). Jesus paid the price for our sin so that we could be forgiven and have a relationship with God.</p>
                <p>If you want to accept this free gift of salvation, you can pray this prayer from your heart:</p>
            </div>

            <Card className="my-12 bg-muted shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-center">The Salvation Prayer</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl italic text-center font-semibold">
                        "Dear Lord Jesus, I know that I am a sinner, and I ask for Your forgiveness. I believe You died for my sins and rose from the dead. I turn from my sins and invite You to come into my heart and life. I want to trust and follow You as my Lord and Savior. In Your name, Amen."
                    </p>
                </CardContent>
            </Card>

             <div className="text-center">
                <h2 className="font-headline text-3xl font-bold mb-4">I Received Christ!</h2>
                <p className="text-lg text-foreground/80 mb-6">If you prayed this prayer, congratulations! You have begun a new life in Christ. We would love to connect with you and help you on your journey. Please let us know about your decision.</p>
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline">Welcome to the Family!</CardTitle>
                        <CardDescription>Let us know you made a decision.</CardDescription>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
