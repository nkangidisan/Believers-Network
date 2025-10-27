"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import Link from "next/link";

const presetAmounts = [10, 25, 50, 100];

export default function DonateSection() {
  const [amount, setAmount] = useState<number | string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
        setAmount(value);
    }
  };

  const handlePresetClick = (preset: number) => {
    setAmount(preset);
  };

  return (
    <section id="donate" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Make a One-Time Donation
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Your gift today will help us reach more students and communities with the Gospel.
            </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-2xl bg-muted/50 p-6 sm:p-8">
          <CardContent className="p-0">
            <div className="flex justify-center flex-wrap gap-4 mb-6">
                {presetAmounts.map(preset => (
                    <Button 
                        key={preset} 
                        variant={amount === preset ? 'default' : 'outline'}
                        className="min-w-[80px] text-lg font-bold"
                        onClick={() => handlePresetClick(preset)}
                    >
                        ${preset}
                    </Button>
                ))}
            </div>
            <div className="relative mb-6">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">$</span>
                <Input
                    type="text"
                    placeholder="Enter custom amount"
                    className="h-16 pl-10 text-2xl font-bold text-center"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <Button asChild size="lg" className="w-full font-bold text-lg bg-gold hover:bg-gold/90 text-gold-foreground">
                <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Give Now
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
