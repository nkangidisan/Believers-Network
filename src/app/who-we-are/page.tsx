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
  title: "Who We Are",
  description: "Meet the team behind Believers' Network, including our founder Iradukunda Pacifique. Learn about our mission, vision, and the passion that drives us.",
};

const teamMembers = [
    { 
        name: "Iradukunda Pacifique", 
        role: "Founder & Vision Bearer", 
        image: "/paci.jpeg", 
        description: "Leading the charge with a heart for revival, Pacifique carries the foundational vision of the ministry."
    },
    { 
        name: "Nkangi Disan", 
        role: "CEO", 
        image: "/NkangiDisan1234.jpg",
        description: "Providing strategic leadership and operational oversight to ensure the ministry's vision is executed with excellence.",
        linkedin: "https://www.linkedin.com/in/disan-nkangi-7ab2b62a9/"
    },
]

export default function WhoWeAre() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">
                        Who We Are
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        We are a family of believers, united by a passion to see lives transformed by the power of Jesus Christ.
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
                        <CardDescription className="text-lg italic text-primary">From the classroom floor to the nations of the world — the calling of a soul on fire for Jesus.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 text-lg text-foreground/80">
                        <p>In 2018, a young man named Iradukunda Pacifique received a divine mandate during a time of deep prayer and fasting: <strong className="text-accent">"Go to the students. Take My Word to the schools."</strong></p>
                        <p>He obeyed — not with money, not with fame, but with fire. Armed with nothing more than a Bible, a notebook, and unwavering faith, he stepped into his first school with trembling hands and a burning heart. What followed was the beginning of a supernatural movement.</p>
                        <p>Students began repenting. Teachers were convicted. The fire of the Gospel caught flame — and the birth of Believers’ Network began.</p>
                        <p>Today, Pacifique leads not as a CEO, but as a servant-leader. He prays, fasts, teaches, travels, and equips a new generation of soul-winners across nations.</p>
                        <p className="font-bold text-center text-xl">His life testifies to one unshakable truth: <br/> <span className="text-primary">When God finds a yielded vessel, nations can be transformed.</span></p>

                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                            <div>
                                <h3 className="font-headline text-2xl flex items-center gap-2 mb-4"><Flame className="text-accent"/> His Passion</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><CheckCircle className="text-accent h-5 w-5 mt-1 shrink-0" /> <span>Raising young evangelists from school benches to global stages</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-accent h-5 w-5 mt-1 shrink-0" /> <span>Taking the Gospel to overlooked communities</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-accent h-5 w-5 mt-1 shrink-0" /> <span>Training intercessors, disciple-makers, and frontline missionaries</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="text-accent h-5 w-5 mt-1 shrink-0" /> <span>Ensuring that no student graduates without hearing about Jesus</span></li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="font-headline text-2xl flex items-center gap-2 mb-4"><MessageSquareQuote className="text-accent"/> His Message</h3>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-xl">
                                    “This is not about crowds, clicks, or popularity. It’s about souls. It’s about Jesus. It’s about eternity.”
                                    <cite className="block mt-2 text-md not-italic text-foreground/70">— Iradukunda Pacifique</cite>
                                </blockquote>
                            </div>
                        </div>

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
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center border-0 shadow-lg max-w-sm mx-auto">
                            <CardContent className="p-0">
                                {member.linkedin ? (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-auto rounded-t-lg object-cover" />
                                    </a>
                                ) : (
                                    <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-auto rounded-t-lg object-cover" />
                                )}
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
