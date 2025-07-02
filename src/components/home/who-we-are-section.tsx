import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="w-full py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Meet the Vision Bearer
            </h2>
            <p className="text-lg text-foreground/80">
              Believers' Network is led by a passionate servant of God with a heart for revival among the youth. Their journey of faith and dedication to the Great Commission is the driving force behind our mission to see nations transformed by the power of the Gospel.
            </p>
            <p className="text-lg text-foreground/80">
              With years of experience in campus ministry and a deep love for God's word, they inspire a new generation to live boldly for Christ.
            </p>
            <Button asChild size="lg">
              <Link href="/who-we-are">
                Learn More About Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x700"
              alt="Portrait of the Vision Bearer"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              data-ai-hint="portrait african man"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
