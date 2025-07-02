import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function DonateSection() {
  return (
    <section id="donate" className="w-full py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
             <div className="max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                    Partner with us to Spread the Gospel
                </h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Your generous donation fuels our mission to reach every student, every campus, and every nation with the life-transforming message of Jesus Christ. Every gift, no matter the size, makes a significant impact and helps us win more souls for the kingdom.
                </p>
                <Button asChild size="lg" className="mt-8 bg-gold hover:bg-gold/90 text-gold-foreground font-bold text-lg">
                    <Link href="/donate">
                        <Heart className="mr-2 h-5 w-5" />
                        Give Now
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
