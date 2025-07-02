import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Donate() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
             <div className="max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    Partner with us to Spread the Gospel
                </h1>
                <p className="mt-4 text-lg text-foreground/80">
                    Your generous donation fuels our mission to reach every student, every campus, and every nation with the life-transforming message of Jesus Christ. Every gift, no matter the size, makes a significant impact and helps us win more souls for the kingdom.
                </p>
                <div className="mt-8 space-y-4">
                    <p className="font-bold text-lg">Donation options will be available here soon.</p>
                    <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-bold text-lg">
                        <Heart className="mr-2 h-5 w-5" />
                        Give Now
                    </Button>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
