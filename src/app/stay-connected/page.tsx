import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function StayConnected() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Stay Connected
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              We'd love to hear from you. Whether you have a question, a testimony, or want to get involved, please reach out.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                   <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your Email Address" />
                  </div>
                   <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message, prayer request, or testimony..." rows={5} />
                  </div>
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </div>
              <div>
                 <h2 className="font-headline text-3xl font-bold mb-6">Contact Information</h2>
                 <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-accent" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <a href="tel:+256752948431" className="text-foreground/80 hover:text-primary">+256 752 948 431</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M16.63 1.341a2.003 2.003 0 0 0-2.43.513l-1.63 2.45a1.002 1.002 0 0 0 .22 1.378l.49.327c.21.14.46.21.71.21a2.41 2.41 0 0 1 2.04 1.25c.3.56.46 1.18.46 1.8V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.03a1.5 1.5 0 0 1-1.5-1.5v-3.48a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5v-7.15c0-.62.16-1.24.46-1.8a2.41 2.41 0 0 1 2.04-1.25c.25 0 .5-.07.71-.21l.49-.327a1.002 1.002 0 0 0 .22-1.378l-1.63-2.45a2.003 2.003 0 0 0-2.43-.514C2.38 2.26 1.18 3.998 1.18 6.05v9.45A4.5 4.5 0 0 0 5.68 24h12.64A4.5 4.5 0 0 0 22.82 15.5V6.05c0-2.05-1.2-3.79-3.19-4.71Z"/></svg>
                             <div>
                                <h3 className="font-semibold">WhatsApp</h3>
                                <a href="https://wa.me/256752948431" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">+256 752 948 431</a>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
