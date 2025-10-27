"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getPersonalizedDevotional } from "@/app/actions";
import type { PersonalizedDevotionalOutput } from "@/ai/flows/personalized-devotionals";
import { Loader2 } from "lucide-react";

export default function DevotionalSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [devotional, setDevotional] =
    useState<PersonalizedDevotionalOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setDevotional(null);

    const formData = new FormData(event.currentTarget);
    const spiritualMaturityLevel = formData.get(
      "spiritualMaturityLevel"
    ) as string;
    const preferredTopics = formData.get("preferredTopics") as string;

    if (!spiritualMaturityLevel || !preferredTopics) {
      toast({
        variant: "destructive",
        title: "Missing Fields",
        description:
          "Please select a maturity level and enter your preferred topics.",
      });
      setIsLoading(false);
      return;
    }

    const { data, error } = await getPersonalizedDevotional({
      spiritualMaturityLevel: spiritualMaturityLevel as any,
      preferredTopics,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error Generating Devotional",
        description: error,
      });
    } else {
      setDevotional(data);
    }

    setIsLoading(false);
  };

  return (
    <section id="daily-devotional" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Daily Devotionals
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Receive a personalized word of encouragement and join our community for daily updates.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">
                  Generate Your Devotional
                </CardTitle>
                <CardDescription>
                  Tell us a bit about yourself to receive a personalized
                  devotional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="spiritualMaturityLevel">
                      Spiritual Maturity Level
                    </Label>
                    <Select name="spiritualMaturityLevel" required>
                      <SelectTrigger
                        id="spiritualMaturityLevel"
                        aria-label="Select your spiritual maturity level"
                      >
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTopics">Preferred Topics</Label>
                    <Input
                      id="preferredTopics"
                      name="preferredTopics"
                      placeholder="e.g., Faith, Love, Forgiveness, Hope"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Get My Devotional
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
            <div className="space-y-8">
                <Card className="shadow-lg bg-background text-center p-8">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                         <svg className="h-10 w-10 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M16.63 1.341a2.003 2.003 0 0 0-2.43.513l-1.63 2.45a1.002 1.002 0 0 0 .22 1.378l.49.327c.21.14.46.21.71.21a2.41 2.41 0 0 1 2.04 1.25c.3.56.46 1.18.46 1.8V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.03a1.5 1.5 0 0 1-1.5-1.5v-3.48a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5v-7.15c0-.62.16-1.24.46-1.8a2.41 2.41 0 0 1 2.04-1.25c.25 0 .5-.07.71-.21l.49-.327a1.002 1.002 0 0 0 .22-1.378l-1.63-2.45a2.003 2.003 0 0 0-2.43-.514C2.38 2.26 1.18 3.998 1.18 6.05v9.45A4.5 4.5 0 0 0 5.68 24h12.64A4.5 4.5 0 0 0 22.82 15.5V6.05c0-2.05-1.2-3.79-3.19-4.71Z"/></svg>
                    </div>
                    <h3 className="font-headline text-2xl font-bold">
                        Join Our WhatsApp Channel
                    </h3>
                    <p className="mt-2 text-lg text-foreground/80">
                        Get daily devotionals, ministry updates, and words of encouragement delivered directly to your phone.
                    </p>
                    <Button asChild className="mt-6" size="lg">
                        <Link
                        href="https://whatsapp.com/channel/0029Vb2zSP8JkK7HPOVJJQ1r"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Join Our Channel
                        </Link>
                    </Button>
                </Card>
                 {isLoading && (
                    <div className="text-center mt-8">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                        <p className="mt-4 text-lg text-foreground/80">
                        Generating your personalized devotional...
                        </p>
                    </div>
                )}

                {devotional && (
                    <Card className="mt-8 shadow-lg animate-fade-in-up">
                        <CardHeader>
                        <CardTitle className="font-headline text-3xl">
                            {devotional.title}
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="prose dark:prose-invert max-w-none text-lg">
                            {devotional.content.split("\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
