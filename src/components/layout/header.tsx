
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/stories-of-impact", label: "Stories" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/life-skills", label: "Life Skills" },
  { href: "/salvation", label: "Salvation" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-500',
      isScrolled 
        ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-white/5' 
        : 'py-6 bg-transparent'
    )}>
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gold/10 flex items-center justify-center transition-transform group-hover:rotate-12">
            <Image src="/bnlogo.png" alt="BNI Logo" width={32} height={32} />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            Believers' Network
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-[0.1em] transition-all hover:text-gold",
                pathname === link.href ? "text-gold" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="ghost" className="hover:bg-gold/10 hover:text-gold">
            <Link href="/donate">Sponsor</Link>
          </Button>
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-6">
            <Link href="/stay-connected" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Join the Mission
            </Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-white/10 p-0">
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Image src="/bnlogo.png" alt="Logo" width={32} height={32} />
                  <span className="font-headline font-bold text-lg">BNI</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-headline font-bold transition-all",
                      pathname === link.href ? "text-gold" : "text-foreground/60"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <Button asChild className="w-full bg-gold text-gold-foreground h-14 text-lg font-bold rounded-2xl">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>Donate Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-14 rounded-2xl glass border-white/10">
                  <Link href="/stay-connected" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
