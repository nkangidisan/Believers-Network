
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Paintbrush, Cake, Music, ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const skills = [
  {
    icon: <Camera className="w-12 h-12 text-primary" />,
    title: "Photography & Videography",
    description: "Learn to capture moments, tell stories, and create visually stunning content for ministry and personal projects."
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: "Graphic Design",
    description: "Master the tools to create beautiful graphics for social media, events, and brand-building with a creative flair."
  },
  {
    icon: <Cake className="w-12 h-12 text-primary" />,
    title: "Baking & Cake Making",
    description: "Discover the art of baking and cake decoration, a skill that can bring joy to others and open up business opportunities."
  },
  {
    icon: <Music className="w-12 h-12 text-primary" />,
    title: "Musical Instruments",
    description: "Unleash your musical talents by learning to play an instrument and lead others in worship."
  },
];

export default function LifeSkills() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Learn a Skill, Shape Your Future
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              We believe in empowering you with practical skills that not only enrich your life but also equip you for the work of the ministry and the marketplace.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Skills Training Programs</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Explore the hands-on training we offer to help you grow your talents.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                         <Card key={skill.title} className="text-center shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                    {skill.icon}
                                </div>
                                <CardTitle className="font-headline text-xl pt-2">{skill.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80">{skill.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-6">How to Get Started</h2>
                        <p className="text-lg text-foreground/80 mb-8">Ready to start your learning journey? We're excited to hear from you. You can reach out to us via email, WhatsApp, or by filling out the form. Let us know which skill you're interested in, and we'll get back to you with the next steps.</p>
                         <Card>
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M16.63 1.341a2.003 2.003 0 0 0-2.43.513l-1.63 2.45a1.002 1.002 0 0 0 .22 1.378l.49.327c.21.14.46.21.71.21a2.41 2.41 0 0 1 2.04 1.25c.3.56.46 1.18.46 1.8V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.03a1.5 1.5 0 0 1-1.5-1.5v-3.48a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5v-7.15c0-.62.16-1.24.46-1.8a2.41 2.41 0 0 1 2.04-1.25c.25 0 .5-.07.71-.21l.49-.327a1.002 1.002 0 0 0 .22-1.378l-1.63-2.45a2.003 2.003 0 0 0-2.43-.514C2.38 2.26 1.18 3.998 1.18 6.05v9.45A4.5 4.5 0 0 0 5.68 24h12.64A4.5 4.5 0 0 0 22.82 15.5V6.05c0-2.05-1.2-3.79-3.19-4.71Z"/></svg>
                                    <div>
                                        <h3 className="font-semibold">WhatsApp</h3>
                                        <a href="https://wa.me/256766754286" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">+256 766 754 286</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-accent" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:hello@believersnetwork.com" className="text-foreground/80 hover:text-primary">hello@believersnetwork.com</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                     <div>
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline">Send us an Inquiry</CardTitle>
                                <CardDescription>Let us know you're interested.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form action="mailto:hello@believersnetwork.com" method="post" encType="text/plain" className="space-y-4">
                                    <Input name="name" placeholder="Your Name" required />
                                    <Input name="contact" placeholder="Your Phone Number or Email" required />
                                    <Input name="skill_interest" placeholder="Which skill are you interested in?" required />
                                    <Textarea name="questions" placeholder="Any questions you have..." rows={3} />
                                    <Button type="submit" className="w-full">Submit Inquiry</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
