
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Handshake, Linkedin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iradukunda Pacifique Benjamin - Founder & Vision Bearer | Believers' Network International",
  description: "Meet Iradukunda Pacifique Benjamin, the founder and vision bearer of Believers' Network International. Learn about his mission to empower the young generation through school ministry, discipleship, and technological innovation.",
  keywords: ["Iradukunda Pacifique", "Iradukunda Pacifique Benjamin", "Believers' Network International", "Vision Bearer", "Pacifique Essence", "faith-based leadership", "school ministry", "youth empowerment", "non-profit founder"],
};

const teamMembers = [
    { 
        name: "Iradukunda Pacifique", 
        role: "Founder & Vision Bearer", 
        image: "/paci.jpeg", 
        description: "Leading the charge with a heart for revival, Pacifique carries the foundational vision for school ministry and empowering the young generation."
    },
    { 
        name: "Nkangi Disan", 
        role: "CEO", 
        image: "/NkangiDisan1234.jpg",
        description: "Providing strategic leadership and operational oversight to ensure the ministry's vision is executed with excellence.",
        linkedin: "https://www.linkedin.com/in/disan-nkangi-7ab2b62a9/"
    },
    {
        name: "Bugingo Alice linzy",
        role: "Secretary",
        image: "/Bugingo Alice linzy.jpg",
        description: "Managing communications and administrative duties, ensuring smooth operations for our growing non-profit organization."
    },
    {
        name: "Chris Apple",
        role: "Head of Media",
        image: "/Chris Apple.jpg",
        description: "Spearheading our media and content strategy, capturing the move of God and sharing it with the world."
    }
]

export default function WhoWeAre() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iradukunda Pacifique Benjamin",
    "alternateName": "Iradukunda Pacifique",
    "jobTitle": "Founder & Vision Bearer",
    "url": "https://believersnetworkintl.org/who-we-are",
    "image": "https://believersnetworkintl.org/pac.jpeg",
    "worksFor": {
      "@type": "Organization",
      "name": "Believers' Network International",
      "url": "https://believersnetworkintl.org"
    },
    "sameAs": [
        "https://www.instagram.com/believersnetworkintl/",
        "https://www.youtube.com/@Iradukundapacifiquebenjamin"
    ],
    "description": "Iradukunda Pacifique Benjamin is a Global Minister, Innovator, and the Founder & Vision Bearer of Believers' Network International. He seamlessly blends global ministry with technological innovation to spread the Gospel, disciple students, and empower the young generation across Africa and beyond.",
    "knowsAbout": ["Evangelism", "School Ministry", "Youth Empowerment", "Discipleship", "Technological Innovation", "Non-Profit Leadership"]
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">
                        Who We Are
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        We are a family of believers, a non-profit organization united by a passion to see the young generation transformed by the power of Jesus Christ.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-foreground/80">To ignite a fire for Jesus Christ in students, schools, and communities across the globe, fulfilling the Great Commission by leading a generation into a personal, life-transforming relationship with God.</p>
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-foreground/80">To witness a global revival where a generation of young believers, passionately in love with Jesus and empowered by the Holy Spirit, rises up to transform their nations and cultures for the glory of God.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4 max-w-6xl">
                <Card className="shadow-2xl overflow-hidden md:grid md:grid-cols-5">
                    <div className="md:col-span-2">
                         <Image src="/pac.jpeg" alt="Iradukunda Pacifique Benjamin, Founder of Believers' Network International" width={400} height={600} className="object-cover w-full h-full object-top"/>
                    </div>
                    <div className="md:col-span-3">
                        <CardHeader className="p-6 md:p-8 text-center">
                            <CardTitle className="font-headline text-3xl md:text-4xl">Vision Bearer – Iradukunda Pacifique Benjamin</CardTitle>
                            <CardDescription className="text-lg italic text-primary mt-2">From the classroom floor to the nations — the calling of a soul on fire for Jesus.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 pt-0 space-y-4 text-lg text-foreground/80">
                            <h3 className="font-bold text-xl">Iradukunda Pacifique: Global Minister, Innovator, and Leader</h3>
                            <p>Iradukunda Pacifique Benjamin is a dynamic leader seamlessly blending global ministry with technological innovation to effect profound change worldwide.</p>
                            <p>As a Global Minister and Philanthropist, he is the Founder of Believer's Network International (@believersnetworkintl). This evangelical ministry is committed to Spreading the Gospel through outreaches in communities, street evangelism, and strategic engagement with schools and educational institutions. His work is dedicated to connecting people to the power of God through prayer, worship, and discipleship, empowering individuals to become ambassadors of Christ and agents of transformation globally.</p>
                            <p>Complementing his ministry is his role as the CEO of Pacifique Essence (@pacifiqueessence), a versatile tech company with expertise in branding, graphics, web design, photography, videography, and app development. This enterprise reflects his commitment to leveraging digital tools and creative strategy to build, communicate, and expand influence.</p>
                            <p>Iradukunda Pacifique Benjamin's journey is one of holistic impact: guiding spiritual growth through diverse evangelistic efforts while harnessing technological prowess to build a global legacy.</p>

                            <div className="pt-6 text-center">
                                <h3 className="font-headline text-2xl flex items-center justify-center gap-2 mb-4"><Handshake className="text-accent"/> Let’s Join Hands</h3>
                                <p className="mb-6">You too can stand with the vision and be part of this global Gospel movement:</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground"><Link href="/donate">Support the Vision</Link></Button>
                                    <Button asChild size="lg" variant="outline"><Link href="/get-involved">Get Involved</Link></Button>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>


        <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Meet the Team
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        God has assembled a dedicated team to carry this vision forward.
                    </p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center border-0 shadow-lg max-w-sm w-full flex flex-col">
                            <CardContent className="p-0 flex flex-col flex-grow">
                                <div className="relative w-full h-80">
                                    <Image src={member.image} alt={`Portrait of ${member.name}, ${member.role} of Believers' Network International`} fill style={{objectFit: 'cover', objectPosition: 'top'}} className="rounded-t-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"/>
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-semibold">{member.role}</p>
                                    <p className="text-foreground/70 mt-2 text-sm flex-grow">{member.description}</p>
                                    {member.linkedin && (
                                        <div className="mt-4">
                                            <Button asChild variant="outline" size="sm">
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`View ${member.name}'s LinkedIn profile`}>
                                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                                </a>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    