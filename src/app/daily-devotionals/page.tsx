
'use client';

import { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getPersonalizedDevotional } from '../actions';
import type { PersonalizedDevotionalOutput } from '@/ai/flows/personalized-devotionals';
import { Loader2 } from 'lucide-react';

export default function DailyDevotionals() {
  const [isLoading, setIsLoading] = useState(false);
  const [devotional, setDevotional] = useState<PersonalizedDevotionalOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setDevotional(null);

    const formData = new FormData(event.currentTarget);
    const spiritualMaturityLevel = formData.get('spiritualMaturityLevel') as string;
    const preferredTopics = formData.get('preferredTopics') as string;

    if (!spiritualMaturityLevel || !preferredTopics) {
      toast({
        variant: 'destructive',
        title: 'Missing Fields',
        description: 'Please select a maturity level and enter your preferred topics.',
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
        variant: 'destructive',
        title: 'Error Generating Devotional',
        description: error,
      });
    } else {
      setDevotional(data);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Daily Devotionals
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Start your day with a word from God, personalized just for you.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Generate Your Devotional</CardTitle>
                <CardDescription>
                  Tell us a bit about yourself to receive a personalized devotional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="spiritualMaturityLevel">Spiritual Maturity Level</Label>
                    <Select name="spiritualMaturityLevel" required>
                      <SelectTrigger id="spiritualMaturityLevel">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTopics">Preferred Topics</Label>
                    <Input
                      id="preferredTopics"
                      name="preferredTopics"
                      placeholder="e.g., Faith, Love, Forgiveness"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Get My Devotional
                  </Button>
                </form>
              </CardContent>
            </Card>

            {isLoading && (
              <div className="text-center mt-12">
                <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                <p className="mt-4 text-lg text-foreground/80">
                  Generating your personalized devotional...
                </p>
              </div>
            )}

            {devotional && (
              <Card className="mt-12 shadow-lg animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">{devotional.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none text-lg">
                    {devotional.content.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
