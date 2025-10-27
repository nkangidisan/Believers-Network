import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhoWeAreSection from "@/components/home/who-we-are-section";
import { CheckCircle, Flame, Handshake, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | About Our Faith-Based Non-Profit Organization",
  description: "Meet the team behind Believers' Network International, including our founder Iradukunda Pacifique. Learn about our mission for school ministry and youth empowerment.",
  keywords: ["about us", "our mission", "our vision", "faith-based leadership", "non-profit team", "Iradukunda Pacifique", "Nkangi Disan"],
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
        name: "Bugingo Alice Linzy",
        role: "Secretary",
        image: "/Bugingo Alice linzy.jpg",
        description: "Handling administrative duties and ensuring smooth communication within the organization."
    }
]

export default function WhoWeAre() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10 relative">
          <Image
            src="/WhatsApp Image 2024-07-25 at 16.32.22_e9154a1e.jpg"
            alt="Who we are"
            fill
            className="object-cover z-0 brightness-50"
            data-ai-hint="team ministry"
          />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 text-white">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-md">
                        Who We Are
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90 drop-shadow-md">
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
        
        <WhoWeAreSection />

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl md:text-4xl">Vision Bearer – Iradukunda Pacifique</CardTitle>
                        <CardDescription className="text-lg italic text-primary">From the classroom floor to the nations — the calling of a soul on fire for Jesus.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-lg text-foreground/80">
                        <h3 className="font-bold text-xl">Iradukunda Pacifique Benjamin: Global Minister, Innovator, and Leader</h3>
                        <p>Iradukunda Pacifique Benjamin is a dynamic leader seamlessly blending global ministry with technological innovation to effect profound change worldwide.</p>
                        <p>As a Global Minister and Philanthropist, he is the Founder of Believer's Network International (@believersnetworkintl). This evangelical ministry is committed to Spreading the Gospel through outreaches in communities, street evangelism, and strategic engagement with schools and educational institutions. His work is dedicated to connecting people to the power of God through prayer, worship, and discipleship, empowering individuals to become ambassadors of Christ and agents of transformation globally.</p>
                        <p>Complementing his ministry is his role as the CEO of Pacifique Essence (@pacifiqueessence), a versatile tech company with expertise in branding, graphics, web design, photography, videography, and app development. This enterprise reflects his commitment to leveraging digital tools and creative strategy to build, communicate, and expand influence.</p>
                        <p>Iradukunda Pacifique Benjamin's journey is one of holistic impact: guiding spiritual growth through diverse evangelistic efforts while harnessing technological prowess to build a global legacy.</p>

                        <div className="pt-8 text-center">
                            <h3 className="font-headline text-2xl flex items-center justify-center gap-2 mb-4"><Handshake className="text-accent"/> Let’s Join Hands</h3>
                            <p className="mb-6">You too can stand with the vision and be part of this global Gospel movement:</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground"><Link href="/donate">Support the Vision – Donate Now</Link></Button>
                                <Button asChild size="lg" variant="outline"><Link href="/sponsor-a-program">Become a School Mission Partner</Link></Button>
                                <Button asChild size="lg" variant="outline"><Link href="/get-involved">Pray for the Movement</Link></Button>
                                <Button asChild size="lg" variant="outline"><Link href="/stories-of-impact">Read His Full Testimony</Link></Button>
                            </div>
                        </div>
                    </CardContent>
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
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center border-0 shadow-lg max-w-sm mx-auto">
                            <CardContent className="p-0">
                                <div className="relative w-full h-96">
                                    {member.linkedin ? (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`View ${member.name}'s LinkedIn profile`}>
                                            <Image src={member.image} alt={`Portrait of ${member.name}, ${member.role} of Believers' Network International`} fill style={{objectFit: 'cover', objectPosition: 'top'}} className="rounded-t-lg" />
                                        </a>
                                    ) : (
                                        <Image src={member.image} alt={`Portrait of ${member.name}, ${member.role} of Believers' Network International`} fill style={{objectFit: 'cover', objectPosition: 'top'}} className="rounded-t-lg" />
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-semibold">{member.role}</p>
                                    <p className="text-foreground/70 mt-2 text-sm">{member.description}</p>
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
