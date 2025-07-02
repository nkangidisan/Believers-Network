import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = {
    schoolMissions: [
        { src: "/story-1.jpg", alt: "Student Prayer", aiHint: "student prayer" },
        { src: "/story-2.jpg", alt: "Community Outreach", aiHint: "community help" },
        { src: "/story-3.jpg", alt: "Mission Trip", aiHint: "mission trip" },
        { src: "/hero-bg.jpg", alt: "Youth Worship", aiHint: "youth worship" },
    ],
    baptisms: [
        { src: "https://placehold.co/600x400.png", alt: "Baptism 1", aiHint: "water baptism" },
        { src: "https://placehold.co/600x400.png", alt: "Baptism 2", aiHint: "water baptism" },
    ],
    prayerEvents: [
        { src: "/hero-bg.jpg", alt: "Prayer Event 1", aiHint: "prayer event" },
        { src: "/story-1.jpg", alt: "Student Prayer during an event", aiHint: "student prayer" },
        { src: "/vision-bearer.jpg", alt: "Founder speaking at event", aiHint: "man portrait" },
    ],
};


export default function SeeGodsGoodness() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              See God's Goodness
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              A gallery of moments capturing the powerful move of God in our ministry. Taste and see that the Lord is good!
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="schoolMissions" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="schoolMissions">School Missions</TabsTrigger>
                <TabsTrigger value="baptisms">Baptisms</TabsTrigger>
                <TabsTrigger value="prayerEvents">Prayer Events</TabsTrigger>
              </TabsList>
              <TabsContent value="schoolMissions">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.schoolMissions.map((img, index) => (
                    <Image key={index} src={img.src} alt={img.alt} data-ai-hint={img.aiHint} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="baptisms">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.baptisms.map((img, index) => (
                    <Image key={index} src={img.src} alt={img.alt} data-ai-hint={img.aiHint} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="prayerEvents">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.prayerEvents.map((img, index) => (
                    <Image key={index} src={img.src} alt={img.alt} data-ai-hint={img.aiHint} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
