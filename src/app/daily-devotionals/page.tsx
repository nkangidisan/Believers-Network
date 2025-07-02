import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DevotionalSection from "@/components/home/devotional-section";

export default function DailyDevotionals() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Daily Devotionals
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Start your day with a word from God. Generate a personalized devotional below or read our latest entries.
            </p>
          </div>
        </section>

        <DevotionalSection />

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl font-bold">Recent Devotionals</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">This section will display a feed of recent devotionals added from the admin dashboard.</p>
                </div>
                 {/* Placeholder for devotional feed */}
                <div className="text-center text-foreground/50">
                    <p>Devotional feed coming soon.</p>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
