import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhoWeAreSection from "@/components/home/who-we-are-section";

export default function WhoWeAre() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">
                        Who We Are
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Learn more about our vision, our mission, and the team God has assembled.
                    </p>
                </div>
            </div>
        </section>
        <WhoWeAreSection />
      </main>
      <Footer />
    </div>
  );
}
