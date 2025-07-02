import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StoriesSection from "@/components/home/stories-section";

export default function StoriesOfImpact() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">
                        Stories of Impact
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        God is moving powerfully. Here are just a few stories of lives being transformed.
                    </p>
                </div>
            </div>
        </section>
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
}
