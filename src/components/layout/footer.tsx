import Link from "next/link";
import { Church, Mail, Phone, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Youtube, href: "#", name: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Church className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Believers' Network</span>
            </Link>
            <p className="text-muted-foreground">Transforming Lives. Impacting Nations. Spreading the Gospel.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-headline">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+256752948431" className="hover:text-primary transition-colors">+256 752 948 431</a>
              </li>
              <li className="flex items-center gap-2">
                 <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="m15.5 13.5-3 3-3-3a2.14 2.14 0 0 1 3-3l3 3a2.14 2.14 0 0 1-3 3z"></path></svg>
                <a href="https://wa.me/256766754286" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp: +256 766 754 286</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@believersnetwork.com" className="hover:text-primary transition-colors">hello@believersnetwork.com</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
             <h3 className="text-lg font-semibold font-headline">Stay Connected</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild className="bg-background/10 border-background/20 hover:bg-background/20">
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5 text-background" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-background/20 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Believers' Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
