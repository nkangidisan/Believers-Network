import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GetInvolvedSection from "@/components/home/get-involved-section";

export default function GetInvolved() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
         <section id="get-involved" className="w-full py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">
                    Get Involved
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    You can be a part of this great move of God. Here's how you can join the mission.
                </p>
                </div>
            </div>
         </section>
         <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
}
