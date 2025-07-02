import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Meet the Vision Bearer
            </h2>
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-xl font-semibold italic text-foreground/90">
                “God told me: Go to the students. Take My Word to the schools.”
              </p>
              <cite className="block mt-2 text-md text-foreground/70">— Iradukunda Pacifique, Founder</cite>
            </blockquote>
            <p className="text-lg text-foreground/80">
              Believers' Network is led by a passionate servant of God with a heart for revival among the youth. Their journey of faith and dedication to the Great Commission is the driving force behind our mission.
            </p>
            <Button asChild size="lg">
              <Link href="/who-we-are">
                Read Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/vision-bearer.jpg"
              alt="Portrait of the Vision Bearer, Iradukunda Pacifique"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
