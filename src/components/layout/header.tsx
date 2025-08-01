"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/stories-of-impact", label: "Stories" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/life-skills", label: "Life Skills" },
  { href: "/salvation", label: "Receive Salvation" },
  { href: "/stay-connected", label: "Stay Connected" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTransparent, setIsTransparent] = React.useState(true);
  const pathname = usePathname()

  React.useEffect(() => {
    const isHomePage = pathname === '/';

    const handleScroll = () => {
      const transparent = isHomePage && window.scrollY <= 20;
      setIsTransparent(transparent);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);


  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isTransparent ? 'bg-transparent border-b-transparent' : 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'}`}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/bnlogo.png" alt="Believers' Network Logo" width={40} height={40} className={isTransparent ? 'invert' : ''} />
            <span className={`font-bold font-headline text-xl transition-colors ${isTransparent ? 'text-white' : 'text-foreground'}`}>
              Believers' Network
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors uppercase tracking-wider ${isTransparent ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link href="/donate">Donate Now</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`md:hidden transition-colors ${isTransparent ? 'text-white bg-white/10 border-white/20 hover:bg-white/20' : 'text-foreground'}`}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex h-full flex-col">
                 <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <Image src="/bnlogo.png" alt="Believers' Network Logo" width={32} height={32} />
                        <span className="font-bold font-headline text-lg">
                        Believers' Network
                        </span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {[...navLinks, { href: "/donate", label: "Donate" }].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
