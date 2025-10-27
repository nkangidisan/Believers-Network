import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - See God's Goodness in Our Ministry",
  description: "A gallery of moments from our non-profit ministry. See photos from school ministry, baptisms, prayer events, and youth empowerment initiatives.",
  keywords: ["ministry gallery", "school missions photos", "student baptism", "youth prayer events", "faith-based outreach", "non-profit impact"],
};

const galleryImages = {
    schoolMissions: [
        { src: "/_MG_9115.JPG", alt: "Students worshiping during a school ministry outreach event by Believers' Network International." },
        { src: "/missions1.jpg", alt: "A large group of students gathered for a school evangelism event." },
        { src: "/sponsored.jpg", alt: "Students participating in a sponsored school program focused on youth empowerment." },
        { src: "/outreach.jpg", alt: "The Believers' Network International team during a missions outreach in Africa." },
        { src: "/community1.jpg", alt: "Global missions team interacting with a local community during an outreach program." },
        { src: "/discipleship.jpg", alt: "A discipleship group for new believers in our student ministry." },
    ],
    baptisms: [
        { src: "/heroback.jpg", alt: "A young person being baptized as a public declaration of their faith." },
        { src: "/paci.jpeg", alt: "Founder Iradukunda Pacifique with a newly baptized member of the young generation." },
        { src: "/_MG_9115.JPG", alt: "Joyful celebration following a baptism service for students." },
    ],
    prayerEvents: [
        { src: "/back2.jpg", alt: "Passionate worship and prayer during a youth conference event." },
        { src: "/community1.jpg", alt: "A community prayer meeting organized by our non-profit organization." },
        { src: "/og-image.jpg", alt: "A visual collage showing the impact of giving on our global missions and prayer events." },
        { src: "/visionbearer.jpg", alt: "Founder Iradukunda Pacifique speaking at a prayer and empowerment event." },
        { src: "/pacifique.jpg", alt: "Portrait of the Vision Bearer, Iradukunda Pacifique, a leader in faith-based initiatives." },
        { src: "/WhatsApp Image 2024-05-24 at 19.29.28 (1).jpeg", alt: "A prayer event with many attendees." },
        { src: "/WhatsApp Image 2024-05-24 at 19.29.28 (2).jpeg", alt: "Worship during a prayer event." },
        { src: "/WhatsApp Image 2024-05-24 at 19.29.28.jpeg", alt: "A speaker at a prayer event." },
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
                    <div key={`school-mission-${index}`} className="relative aspect-video w-full h-full overflow-hidden rounded-lg shadow-md">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="baptisms">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.baptisms.map((img, index) => (
                    <div key={`baptism-${index}`} className="relative aspect-video w-full h-full overflow-hidden rounded-lg shadow-md">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="prayerEvents">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {galleryImages.prayerEvents.map((img, index) => (
                    <div key={`prayer-event-${index}`} className="relative aspect-video w-full h-full overflow-hidden rounded-lg shadow-md">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
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
