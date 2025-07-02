import Header from "@/components/layout/header";
import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import DevotionalSection from "@/components/home/devotional-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsCounter />
        <DevotionalSection />
      </main>
      <Footer />
    </div>
  );
}
