import Link from "next/link";
import { Church, Mail, Phone, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Youtube, href: "#", name: "YouTube" },
];

const pageLinks = [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/stories-of-impact", label: "Stories of Impact" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/donate", label: "Donate" },
    { href: "/sponsor-a-program", label: "Sponsor a Program" },
    { href: "/financials", label: "Financials" },
    { href: "/daily-devotionals", label: "Daily Devotionals" },
    { href: "/see-gods-goodness", label: "Gallery" },
    { href: "/stay-connected", label: "Stay Connected" },
    { href: "/salvation", label: "Receive Salvation" },
]

const activeCountries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Malawi"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted/50 text-foreground/80 border-t border-border">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Church className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">Believers' Network</span>
            </Link>
            <p className="text-muted-foreground">Transforming Lives. Impacting Nations. Spreading the Gospel.</p>
             <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+256752948431" className="hover:text-primary transition-colors">+256 752 948 431</a>
              </li>
               <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+256766754286" className="hover:text-primary transition-colors">+256 766 754 286</a>
               </li>
               <li className="flex items-center gap-2">
                 <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M16.63 1.341a2.003 2.003 0 0 0-2.43.513l-1.63 2.45a1.002 1.002 0 0 0 .22 1.378l.49.327c.21.14.46.21.71.21a2.41 2.41 0 0 1 2.04 1.25c.3.56.46 1.18.46 1.8V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.03a1.5 1.5 0 0 1-1.5-1.5v-3.48a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5v-7.15c0-.62.16-1.24.46-1.8a2.41 2.41 0 0 1 2.04-1.25c.25 0 .5-.07.71-.21l.49-.327a1.002 1.002 0 0 0 .22-1.378l-1.63-2.45a2.003 2.003 0 0 0-2.43-.514C2.38 2.26 1.18 3.998 1.18 6.05v9.45A4.5 4.5 0 0 0 5.68 24h12.64A4.5 4.5 0 0 0 22.82 15.5V6.05c0-2.05-1.2-3.79-3.19-4.71Z"/></svg>
                 <a href="https://wa.me/256766754286" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@believersnetwork.com" className="hover:text-primary transition-colors">hello@believersnetwork.com</a>
              </li>
            </ul>
          </div>
           <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider text-foreground">Active In</h3>
            <div className="grid grid-cols-2 gap-1 text-muted-foreground">
              {activeCountries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>
           <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline uppercase tracking-wider text-foreground">Quick Links</h3>
             <ul className="space-y-2">
                {pageLinks.map(link => (
                    <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Believers' Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
