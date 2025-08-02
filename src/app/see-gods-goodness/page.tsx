import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - See God's Goodness",
  description: "A gallery of moments capturing the powerful move of God in our ministry. See photos from school missions, baptisms, prayer events, and more.",
};

const galleryImages = {
    schoolMissions: [
        { src: "/gallery/mission1.jpg", alt: "Student Revival" },
        { src: "/gallery/mission2.jpg", alt: "Community Outreach" },
        { src: "/gallery/mission3.jpg", alt: "School Evangelism" },
        { src: "/gallery/mission4.jpg", alt: "Missions Outreach" },
        { src: "/gallery/mission5.jpg", alt: "Global Missions" },
        { src: "/gallery/mission6.jpg", alt: "Discipleship Group" },
    ],
    baptisms: [
        { src: "/gallery/baptism1.jpg", alt: "Baptism 1" },
        { src: "/gallery/baptism2.jpg", alt: "Baptism 2" },
        { src: "/gallery/baptism3.jpg", alt: "Baptism 3" },
    ],
    prayerEvents: [
        { src: "/gallery/prayer1.jpg", alt: "Worship Event" },
        { src: "/gallery/prayer2.jpg", alt: "Prayer Meeting" },
        { src: "/gallery/prayer3.jpg", alt: "Impact of Giving" },
        { src: "/visionbearer.jpg", alt: "Founder speaking at event" },
        { src: "/pacifique.jpg", alt: "Portrait of the Vision Bearer, Iradukunda Pacifique" }
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
                    <Image key={index} src={img.src} alt={img.alt} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="baptisms">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.baptisms.map((img, index) => (
                    <Image key={index} src={img.src} alt={img.alt} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="prayerEvents">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.prayerEvents.map((img, index) => (
                    <Image key={index} src={img.src} alt={img.alt} width={600} height={400} className="rounded-lg shadow-md object-cover w-full h-full aspect-video" />
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
