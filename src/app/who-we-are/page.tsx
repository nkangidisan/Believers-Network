'use client';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Handshake, Linkedin, Sparkles, Target, Eye, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

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
        linkedin: "https://www.linkedin.com/in/nkangi-disan-7ab2b62a9/"
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
    "description": "Iradukunda Pacifique Benjamin is a Global Minister, Innovator, and the Founder & Vision Bearer of Believers' Network International.",
    "knowsAbout": ["Evangelism", "School Ministry", "Youth Empowerment", "Discipleship", "Technological Innovation", "Non-Profit Leadership"]
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background selection:bg-gold selection:text-gold-foreground">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Header />
      <main className="flex-1 overflow-hidden">
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full divine-glow opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.05)_0%,transparent_70%)]" />
          </div>

          <div className="container relative z-10 px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold/20 text-gold font-bold text-xs uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>Our Identity</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance">
                Who We <span className="text-gold">Are</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-medium leading-relaxed">
                A global family of believers united by a sacred mission to ignite revival and empower the next generation for the Kingdom of God.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="h-full glass border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
                            <CardHeader className="p-8 md:p-12 pb-4">
                                <div className="p-4 rounded-2xl bg-gold/10 w-fit mb-6">
                                    <Target className="w-8 h-8 text-gold" />
                                </div>
                                <CardTitle className="font-headline text-4xl md:text-5xl mb-4">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 md:p-12 pt-0">
                                <p className="text-xl text-foreground/70 leading-relaxed">
                                    To ignite a fire for Jesus Christ in students, schools, and communities across the globe, fulfilling the Great Commission by leading a generation into a personal, life-transforming relationship with God.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="h-full glass border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                            <CardHeader className="p-8 md:p-12 pb-4">
                                <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6">
                                    <Eye className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-4xl md:text-5xl mb-4">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 md:p-12 pt-0">
                                <p className="text-xl text-foreground/70 leading-relaxed">
                                    To witness a global revival where a generation of young believers, passionately in love with Jesus and empowered by the Holy Spirit, rises up to transform their nations and cultures for the glory of God.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Vision Bearer Featured Section */}
        <section className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group">
                                <Image 
                                    src="/pac.jpeg" 
                                    alt="Iradukunda Pacifique Benjamin" 
                                    fill 
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-10 left-10">
                                    <div className="text-gold flex items-center gap-2 mb-2">
                                        <Sparkles className="w-5 h-5" />
                                        <span className="text-sm font-bold uppercase tracking-widest">Global Minister</span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-white">Iradukunda Pacifique Benjamin</h2>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-7 space-y-8 lg:pt-12"
                        >
                            <div className="space-y-4">
                                <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Vision Bearer</h3>
                                <h2 className="text-5xl md:text-6xl font-bold leading-tight">Leading the Charge <br /> for <span className="text-gold">Global Revival</span></h2>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/70 space-y-6">
                                <p className="text-xl italic font-medium text-foreground">"From the classroom floor to the nations — the calling of a soul on fire for Jesus."</p>
                                <p>
                                    Iradukunda Pacifique Benjamin is a dynamic leader seamlessly blending global ministry with technological innovation to effect profound change worldwide. As a Global Minister and Philanthropist, he is the Founder of Believer's Network International.
                                </p>
                                <p>
                                    His work is dedicated to connecting people to the power of God through prayer, worship, and discipleship, empowering individuals to become ambassadors of Christ and agents of transformation globally.
                                </p>
                                <p>
                                    Complementing his ministry is his role as the CEO of Pacifique Essence, a versatile tech company. This enterprise reflects his commitment to leveraging digital tools and creative strategy to build, communicate, and expand influence.
                                </p>
                            </div>

                            <div className="pt-8 grid sm:grid-cols-2 gap-6">
                                <Button asChild size="lg" className="h-16 rounded-full bg-gold text-gold-foreground font-bold shadow-xl shadow-gold/20 hover:scale-[1.02] transition-transform">
                                    <Link href="/donate">Support the Vision</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-16 rounded-full glass border-white/10 hover:bg-white/5 font-bold">
                                    <Link href="/get-involved">Get Involved</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* Global Leadership Team */}
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                     >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            Global <span className="text-gold">Leadership</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-foreground/60">
                            A dedicated team empowered by the Holy Spirit to carry the fire of revival to the nations.
                        </p>
                     </motion.div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group relative overflow-hidden bg-transparent border-0 h-full flex flex-col">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-xl transition-all duration-500 group-hover:shadow-primary/20">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        fill 
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                        {member.linkedin && (
                                            <Button asChild size="icon" className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 self-end">
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="w-4 h-4 text-white" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2 text-center flex-grow">
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-gold transition-colors">{member.name}</h3>
                                    <p className="text-gold font-bold uppercase tracking-widest text-xs">{member.role}</p>
                                    <p className="text-foreground/60 text-sm leading-relaxed max-w-[250px] mx-auto pt-2">{member.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-12 md:p-20 glass border-gold/20 rounded-[3rem] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles className="w-24 h-24 text-gold" />
                    </div>
                    
                    <Quote className="w-12 h-12 text-gold mx-auto mb-8 opacity-50" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the Movement</h2>
                    <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                        We are looking for partners, volunteers, and believers who are ready to stand with us in this global Gospel movement.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                         <Button asChild size="lg" className="h-16 px-10 bg-gold text-gold-foreground rounded-full font-bold shadow-2xl shadow-gold/20">
                            <Link href="/stay-connected">Contact Us <ChevronRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-full glass border-white/10 font-bold">
                            <Link href="/get-involved">Ways to Join</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}