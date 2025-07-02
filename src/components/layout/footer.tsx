import Link from "next/link";
import { Church, Mail, Phone, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Youtube, href: "#", name: "YouTube" },
];

const activeCountries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Malawi"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-background text-foreground border-t border-border">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Church className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Believers' Network</span>
            </Link>
            <p className="text-muted-foreground">Transforming Lives. Impacting Nations. Spreading the Gospel.</p>
             <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+256752948431" className="hover:text-primary transition-colors">+256 752 948 431</a>
              </li>
              <li className="flex items-center gap-2">
                 <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+256766754286" className="hover:text-primary transition-colors">+256 766 754 286</a>
              </li>
               <li className="flex items-center gap-2">
                 <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M18.477 2.623a.75.75 0 01.28.92l-3.5 12.25a.75.75 0 01-1.428-.105l-2.32-6.963-6.963-2.32a.75.75 0 01-.105-1.428l12.25-3.5a.75.75 0 01.92.28zM4.942 20.33a.75.75 0 001.023.238l3.41-1.948-1.576-4.728-2.857 6.438z" clipRule="evenodd"></path></svg>
                 <a href="https://wa.me/256766754286" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@believersnetwork.com" className="hover:text-primary transition-colors">hello@believersnetwork.com</a>
              </li>
            </ul>
          </div>
           <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider">Active In</h3>
            <div className="grid grid-cols-2 gap-1 text-muted-foreground">
              {activeCountries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>
           <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider">Quick Links</h3>
             <ul className="space-y-2">
                <li><Link href="/what-we-do" className="text-muted-foreground hover:text-primary">What We Do</Link></li>
                <li><Link href="/who-we-are" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/stories-of-impact" className="text-muted-foreground hover:text-primary">Stories of Impact</Link></li>
                <li><Link href="/get-involved" className="text-muted-foreground hover:text-primary">Get Involved</Link></li>
                <li><Link href="/donate" className="text-muted-foreground hover:text-primary">Donate</Link></li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-background/20 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Believers' Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
